import { Router } from "express";
import adapt from "../adapters/express-router-adapter";
import CompanyRegisterCompose from "../composers/company/company-register-composer";

import { verifyTokenMiddleware } from "../middlewares/verifyToken";
import { multerMiddleware } from "../middlewares/multer";
import { LoadAllCompanyComposer } from "../composers/company/loadAllCompanyComposer";
import { LoadCompanyByIdComposer } from "../composers/company/loadCompanyByIdComposer";

export default (router: Router): void => {
  router.post(
    "/company",
    verifyTokenMiddleware,
    multerMiddleware,
    adapt(CompanyRegisterCompose.compose())
  );
  router.get(
    '/company',
    verifyTokenMiddleware,
    adapt(LoadAllCompanyComposer.compose())
  );
  router.get(
    '/company/:id',
    verifyTokenMiddleware,
    adapt(LoadCompanyByIdComposer.compose())
  )
};
