const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const Transfer = require("./transfer");

const PORT = 4567
app.use(bodyParser.json())
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`)) 

app.use(bodyParser.json())
app.post("/", (req, res) => {
  if (req.body.event.subscription == 'invoice' && req.body.event.log.type == 'credited'){
    var newTransfer = new Transfer();
    console.log("TRANSFERING...")
    newTransfer.Create(req.body.event.log.invoice.amount);
  }else{
    console.log(req.body) 
    res.status(200).end() 
  }
})

