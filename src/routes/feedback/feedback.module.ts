import { Module } from '@nestjs/common';
import { PrismaModule } from '../../common/prisma/prisma.module';

import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';

@Module({
  imports: [PrismaModule],
  providers: [FeedbackService],
  exports: [FeedbackService],
  controllers: [FeedbackController],
})
export class FeedbackModule {}