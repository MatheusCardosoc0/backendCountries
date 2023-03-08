import { compare } from "bcryptjs";
import { LoginUserRequest } from "../@types/userInterfaces";
import { prisma } from "../utils/prisma";
import {sign} from 'jsonwebtoken'

class SignInUserService{
  async execute({email, password}: LoginUserRequest){

    const checkUser = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if(!checkUser) throw new Error("User not exist")

    const passwordCompare = await compare(password, checkUser.password)

    if(!passwordCompare) throw new Error("Password incorrect")

    //token

    const token = sign({
      name: checkUser.name,
      email: checkUser.email,
    },
      process.env.JWT_SECRET as string,
    {
      subject: checkUser.id,
      expiresIn: '30d'
    })

    return {
      id: checkUser.id,
      name: checkUser.name,
      email: checkUser.email,
      token
    }
  }
}

export {SignInUserService}