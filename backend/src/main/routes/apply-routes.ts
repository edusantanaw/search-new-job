import { Router } from "express";
import adapt from "../adapters/express-router-adapter";
import { ApplyComposer } from "../composers/candidate/apply-composer";
import { LoadCandidatesCompose } from "../composers/candidate/loadCandidates-composer";
import { RemoveApplyComposer } from "../composers/candidate/removeApply-composer";
import { verifyTokenMiddleware } from "../middlewares/verifyToken";

export default (router: Router): void => {
  router.post("/apply", verifyTokenMiddleware, adapt(ApplyComposer.compose()));
  router.get("/apply/:vacancyId", verifyTokenMiddleware, adapt(LoadCandidatesCompose.compose()));
  router.delete("/apply", verifyTokenMiddleware, adapt(RemoveApplyComposer.compose()));
};
