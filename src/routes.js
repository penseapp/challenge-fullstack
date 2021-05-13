const express = require('express');
const routes = express.Router();
const {celebrate, Segments, Joi} = require('celebrate');

const StoreController = require('./controllers/StoreController');
const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');
const AuthController = require('./controllers/AuthController');

/**
 *  STORE
 */

routes.get('/store', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.number()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), StoreController.get);

routes.post('/store', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), StoreController.post);

routes.put('/store/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  }),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), StoreController.put);

routes.patch('/store/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  }),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    description: Joi.string()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), StoreController.patch);

routes.delete('/store/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), StoreController.delete);

/**
 *  PRODUCT
 */

routes.get('/product', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.number(),
    orderPrice: Joi.string(),
    orderAlpha: Joi.string(),
    search: Joi.string(),
    promotional: Joi.string()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), ProductController.get);

routes.post('/product', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
    price: Joi.string(),
    promotional_price: Joi.string(),
    status_flag: Joi.string(),
    category: Joi.string()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), ProductController.post);

routes.put('/product/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  }),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.string().required(),
    promotional_price: Joi.string().required(),
    status_flag: Joi.string().required(),
    category: Joi.string().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), ProductController.put);

routes.patch('/product/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  }),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    description: Joi.string(),
    price: Joi.string(),
    promotional_price: Joi.string(),
    status_flag: Joi.string(),
    category: Joi.string()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), ProductController.patch);

routes.delete('/product/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), ProductController.delete);

/**
 *  USER
 */

routes.get('/user', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    id: Joi.number()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), UserController.get);

routes.post('/user', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), UserController.post);

routes.put('/user/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  }),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), UserController.put);

routes.patch('/user/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  }),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string().email(),
    password: Joi.string()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), UserController.patch);

routes.delete('/user/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  }),
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), UserController.delete);

/**
 *  AUTH
 */

 routes.get('/auth', celebrate({
  [Segments.HEADERS]: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
  }).unknown()
}), AuthController.get);

/**
 *  WISHLIST
 */

 routes.post('/wishlist', ProductController.wishList);

module.exports = routes; 
