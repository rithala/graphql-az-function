import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutCategoriesInput } from "../inputs/ProductsCreateWithoutCategoriesInput";
import { ProductsUpdateWithoutCategoriesInput } from "../inputs/ProductsUpdateWithoutCategoriesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpsertWithWhereUniqueWithoutCategoriesInput", {
  isAbstract: true
})
export class ProductsUpsertWithWhereUniqueWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutCategoriesInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutCategoriesInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutCategoriesInput;
}
