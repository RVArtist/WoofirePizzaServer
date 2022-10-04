import express from 'express'

const router = express.Router()
import Pizza from '../models/pizzaModel.js'

router.get('/getpizza' , async(req , res)=>{
    try {
      const pizza = await Pizza.find({})
      res.send(pizza)
    } catch (error) {
      return res.status(400).json({message: error})
    }
})

export default router