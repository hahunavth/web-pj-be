// import { CreateUserDto, UpdateUserDto } from '@/routes/user/dto/user.dto';
// import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
// import { ApiOkResponse } from '@nestjs/swagger';
// import { User } from '@prisma/client';
// import { CRUDService } from './crud-service';

// // const createCRUDController = () => {
// // return
// class CRUDController<I, C, U> {
//   constructor(public readonly service: CRUDService<I, C, U>) {
//     if (!service) {
//       throw new Error('Must use CRUDService instead of ' + this.service);
//     }
//   }

//   public create = async (data: C): Promise<I> => {
//     return this.service.create(data);
//   };

//   // @Put('users/:id')
//   // @ApiOkResponse({ type: UserEntity })
//   // : Promise<U>
//   private _update = async (
//     /*@Param('id')*/ id: number,
//     /*@Body()*/ body: U,
//   ) => {
//     Param('id')(this, '');
//     return this.service.update(id, body);
//   };
//   public update = Put('users/:id')(this, '_update', null);

//   @Delete('users/:id')
//   async deleteUser(@Param('id') id: number) {
//     return this.service.delete(id);
//   }
// }
// // };

// // function createCRUDController (constructor) {
// //   return null;
// // };
