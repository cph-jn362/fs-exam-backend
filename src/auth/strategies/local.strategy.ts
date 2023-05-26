import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class localStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log(username);
    console.log(password);

    const user = await this.authService.validateUser(username, password);
    console.log('user in local.strategy', user);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
