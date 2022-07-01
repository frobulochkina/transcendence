import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { query } from "express";

export const UserCode = createParamDecorator(
	(data: unknown, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest();
		// console.log(request);

		return request.query;
	}
);
