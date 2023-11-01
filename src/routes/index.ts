import { Router } from "express";
import { cuidadorRoutes } from "./cuidador.routes";
import { pacienteRoutes } from "./paciente.routes";

const routes = Router();

routes.use("/cuidador", cuidadorRoutes);

routes.use("/paciente", pacienteRoutes);

export { routes };