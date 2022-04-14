import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    
    if(!email){
      throw new Error('No email provided');
    }
    if(!name){
      throw new Error('No name provided');
    }

    if(this.usersRepository.findByEmail(email)){
      throw new Error('Email already taken');
    }
    
    return this.usersRepository.create({name, email});
  }
}

export { CreateUserUseCase };
