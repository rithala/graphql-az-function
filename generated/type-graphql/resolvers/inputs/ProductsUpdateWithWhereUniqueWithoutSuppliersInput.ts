import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsUpdateWithoutSuppliersInput } from "../inputs/ProductsUpdateWithoutSuppliersInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateWithWhereUniqueWithoutSuppliersInput", {
  isAbstract: true
})
export class ProductsUpdateWithWhereUniqueWithoutSuppliersInput {
  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: false
  })
  where!: ProductsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutSuppliersInput, {
    nullable: false
  })
  data!: ProductsUpdateWithoutSuppliersInput;
}
