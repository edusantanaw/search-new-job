import { loadJobUseCase } from "../../../domain/job/protocols/ijob-useCase";
import { HttpResponse } from "../../../utils/errors";
import { Controller } from "../../../utils/protocols/controller";

export class LoadRecentJobRouter implements Controller {
  constructor(private loadUserUseCase: loadJobUseCase) { }

  async handle({ skip, take }: { skip: number, take: number }) {
    try {
      skip = Number(skip)
      take = Number(take)
      console.log(take)
      const vancacy = await this.loadUserUseCase.loadRecentVacancys(skip, take);
      return HttpResponse.ok({ vancacy });
    } catch (error) {
      console.log(error)
      return HttpResponse.catchError(error);
    }
  }
}
