import { loadCompanyUseCase } from "../../../domain/company-useCases/protocols/loadCompanyUseCase";
import { HttpResponse } from "../../../utils/errors";
import { Controller } from "../../../utils/protocols/controller";


export class LoadCompanyRouter implements Controller {

    constructor(private loadCompanyUseCase: loadCompanyUseCase) {

    }

    async handle() {
        try {
            const companys = await this.loadCompanyUseCase.loadAll()
            return HttpResponse.ok({ companys })
        } catch (error) {
            return HttpResponse.catchError(error)
        }
    }

}