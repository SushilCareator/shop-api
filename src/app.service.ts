import { Injectable } from "@nestjs/common";
import { InjectTwilio, TwilioClient } from "nestjs-twilio";

@Injectable()
export class AppService {
    public constructor(@InjectTwilio() private readonly client: TwilioClient) {}

    getHello(): string {
        return "Hello World!";
    }

    async sendWhatsApp(data: any) {
        try {
            return await this.client.messages
                .create({
                    body: "SMS Body, sent to the phone!",
                    from: "whatsapp:+14155238886",
                    to: "whatsapp:+918073038821",
                })
                .then((data) => {
                    console.log(data);
                });
        } catch (e) {
            return e;
        }
    }
}
