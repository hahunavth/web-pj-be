import { CRUDService } from '../../common/base/crud.service';
import { PrismaService } from '../../common/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

import { FeedbackEntity } from '../../generated-dto/feedback/entities';
import {
  CreateFeedbackDto,
  UpdateFeedbackDto,
  ConnectFeedbackDto,
} from '../../generated-dto/feedback/dto';
// import { Feedback as GeneratedFeedback} from '../../../database/entity/generated/';

@Injectable()
export class FeedbackService extends CRUDService<
  FeedbackEntity,
  CreateFeedbackDto,
  UpdateFeedbackDto
>
{
  constructor(prisma: PrismaService) {
    super(prisma.feedback);
  }
}