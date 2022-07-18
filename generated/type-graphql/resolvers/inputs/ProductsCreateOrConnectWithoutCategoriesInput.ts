import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutCategoriesInput } from "../inputs/ProductsCreateWithoutCategoriesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutCategoriesInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutCategoriesInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutCategoriesInput;
}
