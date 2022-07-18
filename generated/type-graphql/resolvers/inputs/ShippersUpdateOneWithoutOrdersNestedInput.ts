import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShippersCreateOrConnectWithoutOrdersInput } from "../inputs/ShippersCreateOrConnectWithoutOrdersInput";
import { ShippersCreateWithoutOrdersInput } from "../inputs/ShippersCreateWithoutOrdersInput";
import { ShippersUpdateWithoutOrdersInput } from "../inputs/ShippersUpdateWithoutOrdersInput";
import { ShippersUpsertWithoutOrdersInput } from "../inputs/ShippersUpsertWithoutOrdersInput";
import { ShippersWhereUniqueInput } from "../inputs/ShippersWhereUniqueInput";

@TypeGraphQL.InputType("ShippersUpdateOneWithoutOrdersNestedInput", {
  isAbstract: true
})
export class ShippersUpdateOneWithoutOrdersNestedInput {
  @TypeGraphQL.Field(_type => ShippersCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: ShippersCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ShippersCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: ShippersCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => ShippersUpsertWithoutOrdersInput, {
    nullable: true
  })
  upsert?: ShippersUpsertWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ShippersWhereUniqueInput, {
    nullable: true
  })
  connect?: ShippersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ShippersUpdateWithoutOrdersInput, {
    nullable: true
  })
  update?: ShippersUpdateWithoutOrdersInput | undefined;
}
