const express = require('express')
const cors = require('cors')
const app = express()

const chalk = require('chalk')
const debug = require('debug')('index')
const morgan = require('morgan')

require('dotenv').config()


app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())


const {getAllInfo, postNewInfo} = require('./controller')

app.get('/api/info', getAllInfo)
app.post('/api/info', postNewInfo)


const PORT = process.env.PORT || 3500

app.listen(PORT, () => {
  debug(`Battlship Docking at Port ${chalk.bgGreenBright.whiteBright(PORT)}`)
})