import { TwilioClient } from "nestjs-twilio";
export declare class AppService {
    private readonly client;
    constructor(client: TwilioClient);
    getHello(): string;
    sendWhatsApp(data: any): Promise<any>;
}
