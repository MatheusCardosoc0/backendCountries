import { Request, Response } from "express";
import { LoginUserRequest } from "../@types/userInterfaces";
import { SignInUserService } from "../service/SignInUserService";

class SignInUserController{
  async handle(req: Request, res: Response){

    try {
      const {email, password}: LoginUserRequest = req.body

      const service = new SignInUserService()

      const sigInUser = await service.execute({
        email,
        password
      })

    return res.json(sigInUser)
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}

export {SignInUserController}