import { Job } from "@prisma/client";
import { jobRepository } from "../../infra/repositores/protocols/job-repository";
import { NotFoundError } from "../../utils/errors/not-found";
import { loadJobUseCase } from "./protocols/ijob-useCase";

export class LoadJobUseCase implements loadJobUseCase {
  constructor(private jobRepository: jobRepository) { }

  async loadRecentVacancys(skip: number, take: number) {
    const vacancy = await this.jobRepository.loadRecents(skip, take);
    if (vacancy) return vacancy;
    throw new NotFoundError("vacancys");
  }

  async loadById(id: string) {
    const vancacy = await this.jobRepository.getJobById(id);
    if (vancacy) return vancacy;
    throw new NotFoundError("vacancys");
  }

  async loadByName(name: string, city?: string) {
    let jobs: Job[] | null = []
    city ? jobs = await this.jobRepository.loadJobsByNameAndCity(name, city) :
      jobs = await this.jobRepository.loadJobsByName(name)
    if (!jobs) throw "Jobs not found!";
    return jobs;
  }

}
