import { Response } from 'express';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(request: string): string;
    login(res: Response): Promise<void>;
    getPage(): string;
}
