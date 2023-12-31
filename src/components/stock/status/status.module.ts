import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusController } from './status.controller';
import { Status } from './entities/status.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  controllers: [StatusController],
  imports: [MikroOrmModule.forFeature([Status])],
  providers: [StatusService],
  exports: [StatusService],
})
export class StatusModule {}
