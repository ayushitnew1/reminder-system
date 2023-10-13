import express from "express"
import { join } from "path"
const app = express()
const port = process.env.PORT | '3000'
import login from './routes/loginroute.js'

app.set('view engine','ejs')

app.use(express.static(join(process.cwd(),'public')))

app.use('/',login)

app.listen(port,()=>{
    console.log(`server listening at http://localhost:${port}`)
})