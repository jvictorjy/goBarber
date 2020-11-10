// import AppError from '@shared/erros/AppError';
import { injectable, inject } from 'tsyringe';

// import User from '@modules/users/infra/typeorm/entities/User';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';


interface IRequest {
  email: string;
}

@injectable()
export default class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(data: IRequest): Promise<void> {}
}
