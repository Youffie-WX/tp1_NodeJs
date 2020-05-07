import { Router } from "express";

import rootController from "./controllers/rootController";
import productController from "./controllers/productController";
import purchaseController from "./controllers/purchaseController";

const api = () => {
  const routes = Router();

  routes.get('/', rootController.index);

  routes.get('/products', productController.getProducts);
  routes.put('/product', productController.addProduct);
  routes.post('/product/:productId', productController.updateProduct);
  routes.delete('/product/:productId', productController.deleteProduct);

  routes.get('/purchases', purchaseController.getPurchases);
  routes.put('/purchase', purchaseController.addPurchase);

  return routes;
};

export default api;