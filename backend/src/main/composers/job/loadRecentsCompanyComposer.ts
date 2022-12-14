import { LoadJobUseCase } from "../../../domain/job/loadJobUseCase";
import { JobRepository } from "../../../infra/repositores/job-repository";
import { LoadRecentJobRouter } from "../../../presentational/routers/job/loadRecentsJobs";

export class LoadRecentsJobsComposer {
  static compose() {
    const loadJobRepository = new JobRepository();
    const loadJobUseCase = new LoadJobUseCase(loadJobRepository);

    return new LoadRecentJobRouter(loadJobUseCase);
  }
}
