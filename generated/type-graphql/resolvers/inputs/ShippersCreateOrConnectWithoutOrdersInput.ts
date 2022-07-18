import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShippersCreateWithoutOrdersInput } from "../inputs/ShippersCreateWithoutOrdersInput";
import { ShippersWhereUniqueInput } from "../inputs/ShippersWhereUniqueInput";

@TypeGraphQL.InputType("ShippersCreateOrConnectWithoutOrdersInput", {
  isAbstract: true
})
export class ShippersCreateOrConnectWithoutOrdersInput {
  @TypeGraphQL.Field(_type => ShippersWhereUniqueInput, {
    nullable: false
  })
  where!: ShippersWhereUniqueInput;

  @TypeGraphQL.Field(_type => ShippersCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: ShippersCreateWithoutOrdersInput;
}
