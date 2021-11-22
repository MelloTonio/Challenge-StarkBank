import { Request, Response } from 'express'

import { BankClient } from './types';

class IntegrationUsecase {
    constructor(private bankClient: BankClient) {}

    async HandleEvent(req: Request, res: Response) {
       let statusCode: number = await this.bankClient.HandleEvent(req)

       res.sendStatus(statusCode)
    }
}

export default IntegrationUsecase;
