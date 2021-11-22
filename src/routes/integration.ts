import express from 'express'
import bankClient from '../gateway/starkbank/client/client';
import IntegrationUsecase from '../domain/usecases/integration';

const router = express.Router()

const integrationUC = new IntegrationUsecase(bankClient);

router.post('/', integrationUC.HandleEvent.bind(integrationUC)) // 'bind' allow us to access 'this' inside the request handler

export default router;