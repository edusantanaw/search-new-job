import { Job } from "@prisma/client";
import { client, job } from "../../prisma/client";
import { jobParams, jobRepository } from "./protocols/job-repository";

export class JobRepository implements jobRepository {
  async create(data: jobParams) {
    const vacancy = await job.create({
      data: data,
    });
    return vacancy;
  }

  async getJobById(id: string) {
    const vancacy: Job[] = await client.$queryRaw`
        select * from job 
        inner join company on  company.id = job."CompanyId"
        where job.id = ${id};
    `;
    if (!vancacy) return null;
    return vancacy[0];
  }

  async loadJobsByName(name: string) {

    const vancacys: Job[] = await client.$queryRaw`
        select job.id,"vacancyFor",job.description, name, company.id, job.city, salary from job
        inner join company on company.id = job."CompanyId"
        where "vacancyFor" like ${`%${name}%`} and "openStatus" = true;  
    `
    if (vancacys.length === 0) return null;
    return vancacys;

  }

  async loadJobsByNameAndCity(name: string, city: string) {
    const vancacys: Job[] = await client.$queryRaw`
     select job.id,"vacancyFor",job.description, name, company.id, job.city, salary from job
    inner join company on company.id = job."CompanyId"
    where "vacancyFor" like ${`%${name}%`} and "openStatus" = true and job.city=${city};  
`;
    if (vancacys.length === 0) return null;
    return vancacys;
  }

  async update(status: boolean, id: string) {
    const updatedVancacy = await job.update({
      where: {
        id: id,
      },
      data: {
        openStatus: status,
      },
    });
    return updatedVancacy;
  }

  async loadRecents(skip: number, take: number) {
    const vancacys: Job[] = await client.$queryRaw`
       select job.id,"vacancyFor", job.description, company.name, company.id as "compId", job.city, salary from job
        inner join company on company.id = job."CompanyId"
        order by job."createdAt" asc
        limit ${take} offset ${skip};
    `
    return vancacys;
  }
}
