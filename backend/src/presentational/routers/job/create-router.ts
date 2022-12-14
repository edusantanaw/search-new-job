import { createJobUseCase } from "../../../domain/job/protocols/ijob-useCase";
import { HttpResponse, InvalidParamError } from "../../../utils/errors";
import { Controller } from "../../../utils/protocols/controller";

export class CreateJobRouter implements Controller {
  constructor(private createJobUseCase: createJobUseCase) { }

  async handle(data: { vacancyFor: string; CompanyId: string, salary: number }) {
    try {
      const { vacancyFor, CompanyId, salary } = data;
      console.log(vacancyFor);

      if (!vacancyFor)
        return HttpResponse.badRequest(new InvalidParamError("vacancyFor"));

      if (!CompanyId)
        return HttpResponse.badRequest(new InvalidParamError("CompanyId"));

      if (!salary)
        return HttpResponse.badRequest(new InvalidParamError("salary"));


      const vancacy = await this.createJobUseCase.create({
        vacancyFor,
        CompanyId,
        salary
      });
      return HttpResponse.ok({ vancacy });
    } catch (error) {
      return HttpResponse.catchError(error);
    }
  }
}
