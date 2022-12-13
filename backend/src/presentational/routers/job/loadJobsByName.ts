import { loadJobUseCase } from "../../../domain/job/protocols/ijob-useCase";
import { HttpResponse, InvalidParamError } from "../../../utils/errors";
import { Controller } from "../../../utils/protocols/controller";

export class LoadJobsByNameRouter implements Controller {
  constructor(private loadJobCase: loadJobUseCase) { }

  // can pass the city and name by query, params or body
  async handle({ name, city }: { name: string, city?: string }) {
    try {
      if (!name) return HttpResponse.badRequest(new InvalidParamError("name"));

      const jobs = await this.loadJobCase.loadByName(name, city);

      return HttpResponse.ok({ jobs });
    } catch (error) {
      return HttpResponse.catchError(error);
    }
  }
}
