import { loadCompanyUseCase } from "../../../domain/company-useCases/protocols/loadCompanyUseCase";
import { HttpResponse, InvalidParamError } from "../../../utils/errors";

export class LoadCompanyByIdRouter {

    constructor(private loadCompanyUseCase: loadCompanyUseCase) {

    }

    async handle({ id }: { id: string }) {
        try {
            if (!id) return HttpResponse.badRequest(new InvalidParamError("id"))
            const company = await this.loadCompanyUseCase.loadById(id)
            return HttpResponse.ok({ company })
        } catch (error) {
            return HttpResponse.catchError(error)
        }

    }
}