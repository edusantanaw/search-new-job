import { createJobUseCase } from "../../../domain/job/protocols/ijob-useCase";
import { HttpResponse, InvalidParamError } from "../../../utils/errors";
import { Controller } from "../../../utils/protocols/controller";

export class CreateJobRouter implements Controller {
  constructor(private createJobUseCase: createJobUseCase) { }

  async handle(data: { vacancyFor: string; CompanyId: string, salary: number, description: string }) {
    try {
      const { vacancyFor, CompanyId, salary, description } = data;

      if (!vacancyFor)
        return HttpResponse.badRequest(new InvalidParamError("vacancyFor"));

      if (!CompanyId)
        return HttpResponse.badRequest(new InvalidParamError("CompanyId"));

      if (!salary)
        return HttpResponse.badRequest(new InvalidParamError("salary"));

      if (!description)
        return HttpResponse.badRequest(new InvalidParamError("description"));


      const vancacy = await this.createJobUseCase.create({
        vacancyFor,
        CompanyId,
        salary,
        description
      });
      return HttpResponse.ok({ vancacy });
    } catch (error) {
      return HttpResponse.catchError(error);
    }
  }
}
