import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuppliersCreateWithoutProductsInput } from "../inputs/SuppliersCreateWithoutProductsInput";
import { SuppliersUpdateWithoutProductsInput } from "../inputs/SuppliersUpdateWithoutProductsInput";

@TypeGraphQL.InputType("SuppliersUpsertWithoutProductsInput", {
  isAbstract: true
})
export class SuppliersUpsertWithoutProductsInput {
  @TypeGraphQL.Field(_type => SuppliersUpdateWithoutProductsInput, {
    nullable: false
  })
  update!: SuppliersUpdateWithoutProductsInput;

  @TypeGraphQL.Field(_type => SuppliersCreateWithoutProductsInput, {
    nullable: false
  })
  create!: SuppliersCreateWithoutProductsInput;
}
