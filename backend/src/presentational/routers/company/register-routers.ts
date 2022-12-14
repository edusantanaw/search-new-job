import { HttpResponse, InvalidParamError } from "../../../utils/errors";
import { emailValidator } from "../../../utils/protocols/email-validator";
import { CreateCompanyUseCase } from "../../../domain/company-useCases/protocols/create-company-useCase";
import { Controller } from "../../../utils/protocols/controller";

type registerRouter = {
  emailValidator: emailValidator;
  createCompanyUseCase: CreateCompanyUseCase;
};

type request = {
  id?: string;
  name: string;
  description: string;
  perfilLogo: string;
  email: string;
  phone: number;
  ownerId: string;
  city: string;
  req: {
    file: Express.Multer.File;
  };
};

export class CompanyRegisterRouter implements Controller {
  constructor(private props: registerRouter) { }

  async handle(request: request) {
    try {
      const newCompany = this.validate(request)
      const company = await this.props.createCompanyUseCase.create({ ...newCompany });

      return HttpResponse.ok({ company });
    } catch (error) {
      console.log(error);
      return HttpResponse.catchError(error);
    }
  }

  validate(company: request) {
    let { name, description, req, email, phone, ownerId, city } = company;

    const perfilLogo = req.file ? req.file.filename : null;

    if (typeof phone === "string") phone = Number(phone);

    if (!name) return HttpResponse.badRequest(new InvalidParamError("name"));

    if (!description)
      return HttpResponse.badRequest(new InvalidParamError("description"));

    if (!perfilLogo)
      return HttpResponse.badRequest(new InvalidParamError("perfilLogo"));

    if (!email)
      return HttpResponse.badRequest(new InvalidParamError("email"));

    if (!phone)
      return HttpResponse.badRequest(new InvalidParamError("phone"));

    if (!ownerId)
      return HttpResponse.badRequest(new InvalidParamError("ownerId"));

    if (!city)
      return HttpResponse.badRequest(new InvalidParamError("city"));

    if (!this.props.emailValidator.isValid(email))
      return HttpResponse.badRequest(new InvalidParamError("email"));

    return { name, description, email, phone, ownerId, city, perfilLogo }
  }
}
