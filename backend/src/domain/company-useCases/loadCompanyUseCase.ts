import { companyRepository } from "../../infra/repositores/protocols/companyRegister";
import { NotFoundError } from "../../utils/errors/not-found";
import { loadCompanyUseCase } from "./protocols/loadCompanyUseCase";


export class LoadCompanyUseCase implements loadCompanyUseCase {
  constructor(private companyRepository: companyRepository) { }

  async loadById(id: string) {
    const company = await this.companyRepository.loadById(id);
    if (company) return company;
    throw new NotFoundError("company");
  }

  async loadAll() {
    const companys = await this.companyRepository.loadAll();
    if (companys) return companys;
    throw new NotFoundError("companys");
  }
}
