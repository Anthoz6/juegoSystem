const PORT = process.env.PORT || 3000;

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || ''
const DB_PORT = process.env.DB_PORT || '3306'
const DB_NAME = process.env.DB_USER || 'fedora'

module.exports = {
    PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
    DB_NAME
  };