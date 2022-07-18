import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShippersCreateWithoutOrdersInput } from "../inputs/ShippersCreateWithoutOrdersInput";
import { ShippersUpdateWithoutOrdersInput } from "../inputs/ShippersUpdateWithoutOrdersInput";

@TypeGraphQL.InputType("ShippersUpsertWithoutOrdersInput", {
  isAbstract: true
})
export class ShippersUpsertWithoutOrdersInput {
  @TypeGraphQL.Field(_type => ShippersUpdateWithoutOrdersInput, {
    nullable: false
  })
  update!: ShippersUpdateWithoutOrdersInput;

  @TypeGraphQL.Field(_type => ShippersCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: ShippersCreateWithoutOrdersInput;
}
