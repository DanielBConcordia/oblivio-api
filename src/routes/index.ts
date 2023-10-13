import { Router } from "express";
import { cuidadorRoutes } from "./cuidador.routes";

const routes = Router();

routes.use("/cuidador", cuidadorRoutes);

export { routes };