/**
 * Param decorator
 *
 */

import { ExecutionContext, createParamDecorator } from '@nestjs/common';

// export const IntParam = createParamDecorator(
//   (paramName: string, ctx: ExecutionContext) => {
//     const request = ctx.switchToHttp().getRequest();
//     const { params } = request;
//     const attr = params[paramName];

//     return;
//   },
// );
