import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SQLITE_PATH } from './utils/config';
import { ContactsModule } from './contacts/contacts.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({

      type: 'sqlite',
      database: SQLITE_PATH,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ContactsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
