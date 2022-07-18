import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutOrder_DetailsInput } from "../inputs/ProductsCreateWithoutOrder_DetailsInput";
import { ProductsUpdateWithoutOrder_DetailsInput } from "../inputs/ProductsUpdateWithoutOrder_DetailsInput";

@TypeGraphQL.InputType("ProductsUpsertWithoutOrder_DetailsInput", {
  isAbstract: true
})
export class ProductsUpsertWithoutOrder_DetailsInput {
  @TypeGraphQL.Field(_type => ProductsUpdateWithoutOrder_DetailsInput, {
    nullable: false
  })
  update!: ProductsUpdateWithoutOrder_DetailsInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutOrder_DetailsInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutOrder_DetailsInput;
}
