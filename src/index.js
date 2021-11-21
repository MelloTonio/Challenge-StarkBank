const express = require("express")
const bodyParser = require("body-parser")
const integrationRouter = require('./routes/integration')

const app = express()
const PORT = 4567

app.use(bodyParser.json())
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`)) 

app.use(bodyParser.json())
app.post("/", integrationRouter)

