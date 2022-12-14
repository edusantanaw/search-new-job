import { Job } from "@prisma/client";

export interface createJobUseCase {
  create: (data: { vacancyFor: string; CompanyId: string, salary: number, description: string }) => Promise<Job>;
}

export interface loadJobUseCase {
  loadById: (id: string) => Promise<Job | null>;
  loadRecentVacancys: (skip: number, take: number) => Promise<Job[]>;
  loadByName: (name: string, city?: string) => Promise<Job[]>;
}

export interface updateJobUseCase {
  update: (
    id: string,
    status: boolean
  ) => Promise<Job | { statusCode: number; body: any } | null>;
}
