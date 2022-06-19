import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { AuthDto } from 'src/auth/dto/auth.dto';

const testDto: AuthDto = {
	login: 'mstyr',
	password: '111222333'
};

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let createLogin: string;

  beforeEach(async () => {
	const moduleFixture: TestingModule = await Test.createTestingModule({
		imports: [AppModule],
	}).compile();

	app = moduleFixture.createNestApplication();
	await app.init();
  });

  it ('/auth/auth (POST)', async (done) => {
	return request(app.getHttpServer())
		.post('/auth/auth')
		.send(testDto)
		.expect(201)
		.then(({ body }: request.Response) => {
			createLogin = body._login;
			expect(createLogin).toBeDefined;
			done();
		});
	});
});
