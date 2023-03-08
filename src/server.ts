import Express, { NextFunction, Request, Response } from 'express'
import { route } from './routes'
import 'express-async-errors'
import cors from  'cors'

const app = Express()
app.use(Express.json())

app.use(cors())


app.use(route)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if(err instanceof Error){
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})




app.listen(process.env.PORT || 3300)