import { LoadCompanyUseCase } from "../../../domain/company-useCases/loadCompanyUseCase";
import { CompanyRepository } from "../../../infra/repositores/company-repositore";
import { LoadCompanyRouter } from "../../../presentational/routers/company/loadCompany-Router";


export class LoadAllCompanyComposer {
    static compose() {

        const companyRepository = new CompanyRepository()
        const loadCompanyUseCase = new LoadCompanyUseCase(companyRepository)

        return new LoadCompanyRouter(loadCompanyUseCase)
    }
}