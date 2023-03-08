interface LoginUserRequest{
  email: string
  password: string
}

interface RegisterUserRequest extends LoginUserRequest{
  name: string
}


export type {RegisterUserRequest, LoginUserRequest}