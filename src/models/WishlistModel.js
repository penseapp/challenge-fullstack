import knex from "../database/index.js";

export async function create(user_id) {
  return await knex("wishlists").insert({ user_id }).returning("*");
}

export async function createProductWishlist(wishlist_id, product_id) {
  return await knex("products_wishlist").insert({ wishlist_id, product_id }).returning("*");
}

export async function deleteProductWishlist(wishlist_id, product_id) {
  return await knex("products_wishlist").where({ wishlist_id, product_id }).del();
}

export async function readById(id) {
  const wish = await knex.from("products_wishlist").select().where("wishlist_id", id);

  const products = await knex.from("products").where('id', 'IN', wish.map(item => item.product_id))

  const wishlist = {
    id: id,
    products
  }

  return wishlist
}

export async function readByUserId(user_id) {
  let wishlist = await knex.from('wishlists').select().where('user_id', user_id)

  const id = wishlist[0].id

  const wish = await knex.from("products_wishlist").select().where("wishlist_id", id);

  wishlist = undefined

  const products = await knex.from("products").where('id', 'IN', wish.map(item => item.product_id))

  wishlist = {
    id: id,
    products
  }

  return wishlist
}

export async function deleteById(id) {
  return await knex("wishlists").where('id', id).delete(id);
}
