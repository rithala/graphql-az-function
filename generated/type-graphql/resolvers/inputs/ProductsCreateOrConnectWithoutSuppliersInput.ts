import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateWithoutSuppliersInput } from "../inputs/ProductsCreateWithoutSuppliersInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateOrConnectWithoutSuppliersInput", {
  isAbstract: true
})
export class ProductsCreateOrConnectWithoutSuppliersInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsCreateWithoutSuppliersInput, {
    nullable: false
  })
  create!: ProductsCreateWithoutSuppliersInput;
}
