
const express=require('express')
const cors=require('cors')
const router = require('./routes/product.route')
const app = express()
app.use(cors())
app.use(express.json())

app.use(router)





app.listen(8090,()=>{
    console.log("listening on port 8090");
})