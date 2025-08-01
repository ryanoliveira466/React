const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const produtoRoutes = require('./routes/productRoutes')

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/produtos', produtoRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost${PORT}`);
})