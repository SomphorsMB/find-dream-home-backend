import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';
import { PropertyModule } from './property/property.module';
import 'dotenv/config'
import { Property } from './property/entities/property.entity';
import { PropertyDetailModule } from './property-detail/property-detail.module';
import { PropertyDetail } from './property-detail/entities/property-detail.entity';
import { PropertyTypeModule } from './property-type/property-type.module';
import { PropertyType } from './property-type/entities/property-type.entity';
import { AgentModule } from './agent/agent.module';
import { Agent } from './agent/entities/agent.entity';
import { AmenityModule } from './amenity/amenity.module';
import { Amenity } from './amenity/entities/amenity.entity';
import { ServiceModule } from './service/service.module';
import { Service } from './service/entities/service.entity';
import { PropertyLayoutModule } from './property-layout/property-layout.module';
import { PropertyLayout } from './property-layout/entities/property-layout.entity';
import { Feature } from './feature/entities/feature.entity';
import { FeatureModule } from './feature/feature.module';
import { FrequentlyQuestionModule } from './frequently-question/frequently-question.module';
import { FrequentlyQuestion } from './frequently-question/entities/frequently-question.entity';
import { BlogPostModule } from './blog-post/blog-post.module';
import { BlogPost } from './blog-post/entities/blog-post.entity';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { PostCommentModule } from './post-comment/post-comment.module';
import { PostComment } from './post-comment/entities/post-comment.entity';
import { PropertyCommentModule } from './property-comment/property-comment.module';
import { PropertyComment } from './property-comment/entities/property-comment.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    timezone: process.env.DB_Time,
    synchronize: true,
    entities:[Category, Property, PropertyDetail, PropertyType, Agent, Amenity, Service, PropertyLayout, Feature, FrequentlyQuestion, BlogPost, User, PostComment, PropertyComment],

  }),CategoryModule, PropertyModule, PropertyDetailModule, PropertyTypeModule, AgentModule, AmenityModule, ServiceModule, PropertyLayoutModule, FeatureModule, FrequentlyQuestionModule, BlogPostModule, UserModule, PostCommentModule, PropertyCommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
