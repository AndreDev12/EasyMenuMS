import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database/database.module';
import { CompaniesModule } from './modules/companies/company.module';
import { UserTypesModule } from './modules/user-types/user-types.module';
import { UsersModule } from './modules/users/users.module';
import { NewsModule } from './modules/news/news.module';
import { CategoriesModule } from './modules/categories/categories.module';
import { SaucesModule } from './modules/sauces/sauces.module';
import { DishesModule } from './modules/dishes/dishes.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    CompaniesModule,
    UserTypesModule,
    UsersModule,
    NewsModule,
    CategoriesModule,
    SaucesModule,
    DishesModule,
  ],
  controllers: [],
})
export class AppModule {}