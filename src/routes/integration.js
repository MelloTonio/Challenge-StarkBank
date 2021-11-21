const express = require("express");
const IntegrationUsecase = require("../usecases/integration");

const router = new express.Router()

var integrationUC = new IntegrationUsecase();
router.post('/', integrationUC.CheckEventSubscription)

module.exports = router;