import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Products } from "../models/Products";
import { CategoriesCount } from "../resolvers/outputs/CategoriesCount";

@TypeGraphQL.ObjectType("Categories", {
  isAbstract: true
})
export class Categories {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  CategoryID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CategoryName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Description?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  Picture?: Buffer | null;

  Products?: Products[];

  @TypeGraphQL.Field(_type => CategoriesCount, {
    nullable: true
  })
  _count?: CategoriesCount | null;
}
