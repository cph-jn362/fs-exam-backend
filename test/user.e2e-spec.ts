import { TestingModule, Test } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('signup', () => {
    it('should create a user', () => {
      const user = { username: 'Daniel', password: 4321 };
      return request(app.getHttpServer())
        .post('/auth/signup')
        .send(user)
        .expect(201);
    });
  });
});
