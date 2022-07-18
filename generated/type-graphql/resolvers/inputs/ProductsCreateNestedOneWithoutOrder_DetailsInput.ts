import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutOrder_DetailsInput } from "../inputs/ProductsCreateOrConnectWithoutOrder_DetailsInput";
import { ProductsCreateWithoutOrder_DetailsInput } from "../inputs/ProductsCreateWithoutOrder_DetailsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedOneWithoutOrder_DetailsInput", {
  isAbstract: true
})
export class ProductsCreateNestedOneWithoutOrder_DetailsInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutOrder_DetailsInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutOrder_DetailsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutOrder_DetailsInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutOrder_DetailsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;
}
