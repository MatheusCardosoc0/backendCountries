import { Request, Response } from "express";
import { RegisterUserRequest } from "../@types/userInterfaces";
import { CreateUserService } from "../service/CreateUserService";

class CreateUserController{
  async handle(req: Request, res: Response){

    try {
      const {email, name, password}: RegisterUserRequest = req.body

      const service = new CreateUserService()
  
      const createUser = await service.execute({
        email,
        name,
        password
      })

      return res.json(createUser)
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}

export {CreateUserController}