import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';


@Module({
 
  controllers: [AppController],
  providers: [AppService],
  imports: [NinjasModule, UsersModule],
})
export class AppModule {}
