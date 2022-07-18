import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesCreateWithoutProductsInput } from "../inputs/CategoriesCreateWithoutProductsInput";
import { CategoriesUpdateWithoutProductsInput } from "../inputs/CategoriesUpdateWithoutProductsInput";

@TypeGraphQL.InputType("CategoriesUpsertWithoutProductsInput", {
  isAbstract: true
})
export class CategoriesUpsertWithoutProductsInput {
  @TypeGraphQL.Field(_type => CategoriesUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: CategoriesUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => CategoriesCreateWithoutProductsInput, {
    nullable: false
  })
  create!: CategoriesCreateWithoutProductsInput;
}
