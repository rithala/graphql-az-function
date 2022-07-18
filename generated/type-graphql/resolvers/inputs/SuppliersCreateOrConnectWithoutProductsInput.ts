import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuppliersCreateWithoutProductsInput } from "../inputs/SuppliersCreateWithoutProductsInput";
import { SuppliersWhereUniqueInput } from "../inputs/SuppliersWhereUniqueInput";

@TypeGraphQL.InputType("SuppliersCreateOrConnectWithoutProductsInput", {
  isAbstract: true
})
export class SuppliersCreateOrConnectWithoutProductsInput {
  @TypeGraphQL.Field(_type => SuppliersWhereUniqueInput, {
    nullable: false
  })
  where!: SuppliersWhereUniqueInput;

  @TypeGraphQL.Field(_type => SuppliersCreateWithoutProductsInput, {
    nullable: false
  })
  create!: SuppliersCreateWithoutProductsInput;
}
