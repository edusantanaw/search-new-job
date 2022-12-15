import { companyRepository } from "../../infra/repositores/protocols/companyRegister";
import { emailAlreadyUsed } from "../../utils/errors";

export class CompanyUseCase {
  constructor(private companyRepository: companyRepository) { }

  async create(data: any) {
    const verifyIfEmail = await this.companyRepository.loadByEmail(data.email);
    console.log(verifyIfEmail)
    if (verifyIfEmail?.email) throw new emailAlreadyUsed();

    const company = await this.companyRepository.save({
      ...data,
    });
    return company;
  }
}
