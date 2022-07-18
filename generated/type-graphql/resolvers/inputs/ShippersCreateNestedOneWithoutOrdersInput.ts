import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShippersCreateOrConnectWithoutOrdersInput } from "../inputs/ShippersCreateOrConnectWithoutOrdersInput";
import { ShippersCreateWithoutOrdersInput } from "../inputs/ShippersCreateWithoutOrdersInput";
import { ShippersWhereUniqueInput } from "../inputs/ShippersWhereUniqueInput";

@TypeGraphQL.InputType("ShippersCreateNestedOneWithoutOrdersInput", {
  isAbstract: true
})
export class ShippersCreateNestedOneWithoutOrdersInput {
  @TypeGraphQL.Field(_type => ShippersCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: ShippersCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ShippersCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: ShippersCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ShippersWhereUniqueInput, {
    nullable: true
  })
  connect?: ShippersWhereUniqueInput | undefined;
}
