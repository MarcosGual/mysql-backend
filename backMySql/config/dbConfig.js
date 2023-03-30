require('dotenv').config();

module.exports={
    HOST: process.env.HOST,
    USUARIO: process.env.USUARIO,
    PASSWORD: process.env.PASSWORD,
    DATABASE: process.env.DATABASE,
    PUERTO_DB: process.env.DB_PORT,
    DIALECTO: 'mysql'
}