import { Request } from 'express'

export interface BankClient {
    HandleEvent(req: Request): any
}
