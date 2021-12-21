import { Application } from "express";

import appRoutes from "../routes/app.routes";

export const loadEndpoints = (app: Application): void => {
  
  const prefix = "/api/" + app.get("version");
  
  app.use(prefix, appRoutes);  
};
