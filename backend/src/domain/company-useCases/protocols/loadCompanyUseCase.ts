import { Company } from "@prisma/client";

export interface loadCompanyUseCase {
    loadById: (id: string) => Promise<Company>;
    loadAll: () => Promise<Company[]>
}
