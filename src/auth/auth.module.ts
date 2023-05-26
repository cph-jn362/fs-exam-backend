import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../users/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { localStrategy } from "./strategies/local.strategy";
import { jwtConstants } from "./strategies/constant";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { AdminGuard } from "./guards/admin.guard";
import { TenantGuard } from "./guards/tenant.guard";

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: '3600s'},
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, localStrategy, JwtAuthGuard, AdminGuard, TenantGuard, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule{}

