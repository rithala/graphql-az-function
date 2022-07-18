import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CategoriesCreateWithoutProductsInput", {
  isAbstract: true
})
export class CategoriesCreateWithoutProductsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CategoryName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Description?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  Picture?: Buffer | undefined;
}
