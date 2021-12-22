import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductModule } from "./product/product.module";
// import { AuthModule } from "./auth/auth.module";
// import { AddressModule } from "./address/address.module";
// import { OrderModule } from "./order/order.module";
// import { OrderDetailModule } from "./order-detail/order-detail.module";
// import { PaymentModule } from "./payment/payment.module";
import { ThrottlerModule } from "@nestjs/throttler";
import { TwilioModule } from "nestjs-twilio";

@Module({
    imports: [
        // register the modules : features
        TypeOrmModule.forRoot(),
        ProductModule,
        // AuthModule,
        // AddressModule,
        // OrderModule,
        // OrderDetailModule,
        // PaymentModule,
        ThrottlerModule.forRoot({
            ttl: 60,
            limit: 10,
        }),
        TwilioModule.forRoot({
            accountSid: "ACcb02d6ec9f4f85a955306bcd2ed4e661",
            authToken: "1a595aef0e16881691dd31a02e601434",
        }),
    ],
    controllers: [
        // register the controller
        AppController,
    ],
    providers: [
        // register the services
        AppService,
    ],
})
export class AppModule {}
