import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutOrder_DetailsInput } from "../inputs/ProductsCreateWithoutOrder_DetailsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutOrder_DetailsInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutOrder_DetailsInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutOrder_DetailsInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutOrder_DetailsInput;
}
