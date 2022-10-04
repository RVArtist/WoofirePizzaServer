import express from 'express'
import db from './db.js'
import pizza from './models/pizzaModel.js'
const app = express()

const port = process.env.PORT || 5000
app.use(express.json())

import pizzaRoute from './routes/pizzaRoute.js'
import userRoute from './routes/userRoute.js'

app.use('/api/pizza' , pizzaRoute)
app.use('/api/user' , userRoute)

if(process.env.NODE_ENV === 'production'){
  app.use('/',express.static('client/build'))
  app.get('*' , (req , res) => res.sendFile(path.resolve(__dirname, 'client/build/index.html')))
}
app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})




app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))