import { Router } from "express";

import rootController from "./controllers/rootController";

const api = () => {
  const routes = Router();

  routes.get('/', rootController.index);

  return routes;
};

export default api;