import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtConfigService {
  constructor(private configService: ConfigService) {}

  get secret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }

  get expiresIn(): number {
    return parseInt(
      this.configService.getOrThrow<string>(
        'ACCESS_TOKEN_VALIDITY_DURATION_IN_SEC',
      ),
    );
  }
}
