import { RegisterUserRequest } from "../@types/userInterfaces";
import { prisma } from "../utils/prisma";
import { hash } from 'bcryptjs'

class CreateUserService{
  async execute({email, name, password}: RegisterUserRequest){

    const verify = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if(verify) throw new Error("User already exist")

    const passwordHash = await hash(password, 8)
     
    const createUser = await prisma.user.create({
      data: {
        email,
        name,
        password: passwordHash
      }
    })

    return createUser
  }
}

export {CreateUserService}
