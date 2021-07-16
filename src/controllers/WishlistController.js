import { readById, createProductWishlist, deleteProductWishlist, readByUserId } from "../models/WishlistModel.js";

export async function addProductInWishlist(req, res) {
  try {
    const { wishlist_id, product_id } = req.body

    const wishlist_item = await createProductWishlist(parseInt(wishlist_id), parseInt(product_id))

    res.status(201).json(wishlist_item)
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function readWishlistByid(req, res) {
  try {
    const { id } = req.params

    const wishlist = await readById(id)

    res.status(201).json(wishlist)
  } catch(error) {
    console.log(error)
    res.status(500).send(error);
  }
}

export async function readWishlistByUserId(req, res) {
  try {
    const { id } = req.params

    const wishlist = await readByUserId(parseInt(id))

    res.status(201).json(wishlist)
  } catch(error) {
    console.log(error)
    res.status(500).send(error);
  }
}

export async function removeProductInWishlist(req, res) {
  try {
    const { wishlist_id, product_id } = req.params

    await deleteProductWishlist(parseInt(wishlist_id), parseInt(product_id))

    res.status(200).send()
  } catch(error) {
    console.log(error)
    res.status(500).send(error);
  }
}
