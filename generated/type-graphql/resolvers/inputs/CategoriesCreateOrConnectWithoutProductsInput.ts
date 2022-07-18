import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesCreateWithoutProductsInput } from "../inputs/CategoriesCreateWithoutProductsInput";
import { CategoriesWhereUniqueInput } from "../inputs/CategoriesWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesCreateOrConnectWithoutProductsInput", {
  isAbstract: true
})
export class CategoriesCreateOrConnectWithoutProductsInput {
  @TypeGraphQL.Field(_type => CategoriesWhereUniqueInput, {
    nullable: false
  })
  where!: CategoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoriesCreateWithoutProductsInput, {
    nullable: false
  })
  create!: CategoriesCreateWithoutProductsInput;
}
