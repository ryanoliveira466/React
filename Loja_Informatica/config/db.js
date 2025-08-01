const { syncIndexes } = require('mongoose')
const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB conectado com sucesso!');
        
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error.message)
    }
}
module.exports = connectDb