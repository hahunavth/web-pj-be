import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { PaginatedDto } from './query.dto';

/**
 * STUB: Deprecated
 */
// export const ApiPaginatedResponse = <TModel extends Type<any>>(
//   model: TModel,
// ) => {
//   return applyDecorators(
//     ApiExtraModels(PaginatedDto, model),
//     ApiOkResponse({
//       schema: {
//         allOf: [
//           { $ref: getSchemaPath(PaginatedDto) },
//           {
//             properties: {
//               data: {
//                 type: 'array',
//                 items: { $ref: getSchemaPath(model) },
//               },
//             },
//           },
//         ],
//       },
//     }),
//   );
// };
