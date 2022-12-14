import { LoadCompanyUseCase } from "../../../domain/company-useCases/loadCompanyUseCase";
import { CompanyRepository } from "../../../infra/repositores/company-repositore";
import { LoadCompanyByIdRouter } from "../../../presentational/routers/company/loadCompanyById-Router";

export class LoadCompanyByIdComposer {
    static compose() {

        const companyRepository = new CompanyRepository()
        const loadCompanyUseCase = new LoadCompanyUseCase(companyRepository)
        return new LoadCompanyByIdRouter(loadCompanyUseCase)
    }
}