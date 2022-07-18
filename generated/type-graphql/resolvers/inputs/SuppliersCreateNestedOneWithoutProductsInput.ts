import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuppliersCreateOrConnectWithoutProductsInput } from "../inputs/SuppliersCreateOrConnectWithoutProductsInput";
import { SuppliersCreateWithoutProductsInput } from "../inputs/SuppliersCreateWithoutProductsInput";
import { SuppliersWhereUniqueInput } from "../inputs/SuppliersWhereUniqueInput";

@TypeGraphQL.InputType("SuppliersCreateNestedOneWithoutProductsInput", {
  isAbstract: true
})
export class SuppliersCreateNestedOneWithoutProductsInput {
  @TypeGraphQL.Field(_type => SuppliersCreateWithoutProductsInput, {
    nullable: true
  })
  create?: SuppliersCreateWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => SuppliersCreateOrConnectWithoutProductsInput, {
    nullable: true
  })
  connectOrCreate?: SuppliersCreateOrConnectWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => SuppliersWhereUniqueInput, {
    nullable: true
  })
  connect?: SuppliersWhereUniqueInput | undefined;
}
