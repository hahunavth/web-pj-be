import { IsString, IsNumber, IsDate } from 'class-validator';
import { Book } from '@prisma/client';
import { Type } from 'class-transformer';

/*
 * @brief Validate type Book
 * TODO: ADD OPTIONAL ATTRIBUTE
 *
 * Created on Wed Dec 14 2022
 * Copyright (c) 2022 HaVT
 */
export class BookEntity implements Book {
  @IsNumber()
  id: number;

  @IsString()
  title: string;

  @IsString()
  author: string;
  @IsString()
  category: string;
  @IsString()
  coverUrl: string;
  @IsString()
  coverForm: string;
  @IsString()
  code: string;
  @IsString()
  supplier: string;
  @IsString()
  language: string;
  @IsNumber()
  weight: number;
  @IsNumber()
  width: number;
  @IsNumber()
  height: number;
  @IsString()
  description: string;

  @IsNumber()
  numOfPages: number;
  @IsString()
  publisher: string;
  @IsNumber()
  price: number;
  @Type(() => Date)
  @IsDate()
  publishDate: Date;
  @IsString()
  coverType: string;
  @IsDate()
  createdAt: Date;
  @IsDate()
  updatedAt: Date;
  // Feedback?:
  // UserCart?:
  // OrderItem?:
}
