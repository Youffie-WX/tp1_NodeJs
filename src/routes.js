import { Router } from "express";

import rootController from "./controllers/rootController";
import productsController from "./controllers/productsController";


const api = () => {
  const routes = Router();

  routes.get('/', rootController.index);
  routes.get('/products', productsController.getProducts);
  routes.put('/product', productsController.insertProduct);

  return routes;
};

export default api;