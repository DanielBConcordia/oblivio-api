import { Router } from "express";
import { cuidadorRoutes } from "./cuidador.routes";
import { pacienteRoutes } from "./paciente.routes";
import { remediosRoutes } from "./remedio.routes";

const routes = Router();

routes.use("/cuidador", cuidadorRoutes);

routes.use("/paciente", pacienteRoutes);

routes.use("/remedio", remediosRoutes);

export { routes };