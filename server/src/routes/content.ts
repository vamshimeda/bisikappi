import { Router } from 'express';
import { queryOne } from '../db';
import { crudRouter, upsertRouter } from '../crud';

/**
 * Marketing content CMS — backs the Content admin panel. Reads are public
 * (the marketing site + shop fetch these on load with no auth); writes
 * require a login with the 'content' app grant, same access model as every
 * other portal. Built entirely on the shared crud/upsert helpers (see
 * ../crud.ts) — this file is just each resource's shape.
 */
export const contentRouter = Router();

// ---- Strings (i18n copy: hero, trust strip, story, page heros, shop chrome…) ----
contentRouter.use('/strings', upsertRouter({
  table: 'content_strings',
  keyColumn: 'key',
  columns: ['en', 'kn'],
  appKey: 'content',
  broadcastChannel: 'content:string',
}));

// ---- Structured copy lists (roastery steps, coffee grinds, consulting services) ----
contentRouter.use('/lists', upsertRouter({
  table: 'content_lists',
  keyColumn: 'key',
  columns: ['items'],
  jsonbColumns: ['items'],
  appKey: 'content',
  broadcastChannel: 'content:list',
  validate: (body) => (body.items !== undefined && !Array.isArray(body.items) ? 'items must be an array' : null),
}));

// ---- Product catalogue (shop + homepage "From our roastery") ----
// `id` is a DB-generated identity column (see schema.sql) — clients never
// supply it, which avoids the "client computes max(id)+1" collision the
// previous version of this endpoint had.
contentRouter.use('/products', crudRouter({
  table: 'content_products',
  appKey: 'content',
  publicRead: true,
  idType: 'number',
  orderBy: 'sort_order, id',
  insertFields: ['name', 'cat', 'tag', 'tone', 'origin', 'roast', 'price', 'rating', 'count', 'img', 'featured', 'sort_order'],
  updateFields: ['name', 'cat', 'tag', 'tone', 'origin', 'roast', 'price', 'rating', 'count', 'img', 'featured', 'sort_order'],
  requiredFields: ['name'],
  defaults: async (body) => {
    const base: Record<string, any> = { cat: 'Beans', price: 0, rating: 4.5, count: 0, img: 'motif-coffee-bean', featured: false };
    if (body.sort_order === undefined) {
      const row = await queryOne<{ max: number }>('select coalesce(max(sort_order), 0) + 1 as max from content_products');
      base.sort_order = row ? Number(row.max) : 1;
    }
    return base;
  },
  broadcastChannel: 'content:product',
}));
