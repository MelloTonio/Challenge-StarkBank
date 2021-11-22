import express from 'express'
import bodyParser from 'body-parser'

import * as dotenv from 'dotenv';
dotenv.config()

import integrationRouter from "./routes/integration"
import InvoiceCronjobs from './cronjob'
import bankClient from './gateway/starkbank/client/client'

const invoiceCronjobs = new InvoiceCronjobs(bankClient)
invoiceCronjobs.schedule()

const app = express()
const PORT = 4567

app.listen(PORT, () => console.log(`Server running on port ${PORT}`)) 

app.use(bodyParser.json())
app.post("/", integrationRouter)

