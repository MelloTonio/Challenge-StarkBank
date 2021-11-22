import { Request, Response } from 'express'

import { BankClient } from './types';

class IntegrationUsecase {
    constructor(private bankClient: BankClient) {}

    async HandleEvent(req: Request, res: Response) {
       let statusCode: number = this.bankClient.HandleEvent(req)

       res.status(statusCode).end()
    }
}

export default IntegrationUsecase;
