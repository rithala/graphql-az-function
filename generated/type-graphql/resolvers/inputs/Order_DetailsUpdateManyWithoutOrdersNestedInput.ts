import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsCreateManyOrdersInputEnvelope } from "../inputs/Order_DetailsCreateManyOrdersInputEnvelope";
import { Order_DetailsCreateOrConnectWithoutOrdersInput } from "../inputs/Order_DetailsCreateOrConnectWithoutOrdersInput";
import { Order_DetailsCreateWithoutOrdersInput } from "../inputs/Order_DetailsCreateWithoutOrdersInput";
import { Order_DetailsScalarWhereInput } from "../inputs/Order_DetailsScalarWhereInput";
import { Order_DetailsUpdateManyWithWhereWithoutOrdersInput } from "../inputs/Order_DetailsUpdateManyWithWhereWithoutOrdersInput";
import { Order_DetailsUpdateWithWhereUniqueWithoutOrdersInput } from "../inputs/Order_DetailsUpdateWithWhereUniqueWithoutOrdersInput";
import { Order_DetailsUpsertWithWhereUniqueWithoutOrdersInput } from "../inputs/Order_DetailsUpsertWithWhereUniqueWithoutOrdersInput";
import { Order_DetailsWhereUniqueInput } from "../inputs/Order_DetailsWhereUniqueInput";

@TypeGraphQL.InputType("Order_DetailsUpdateManyWithoutOrdersNestedInput", {
  isAbstract: true
})
export class Order_DetailsUpdateManyWithoutOrdersNestedInput {
  @TypeGraphQL.Field(_type => [Order_DetailsCreateWithoutOrdersInput], {
    nullable: true
  })
  create?: Order_DetailsCreateWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsCreateOrConnectWithoutOrdersInput], {
    nullable: true
  })
  connectOrCreate?: Order_DetailsCreateOrConnectWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsUpsertWithWhereUniqueWithoutOrdersInput], {
    nullable: true
  })
  upsert?: Order_DetailsUpsertWithWhereUniqueWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsCreateManyOrdersInputEnvelope, {
    nullable: true
  })
  createMany?: Order_DetailsCreateManyOrdersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsWhereUniqueInput], {
    nullable: true
  })
  set?: Order_DetailsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Order_DetailsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsWhereUniqueInput], {
    nullable: true
  })
  delete?: Order_DetailsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_DetailsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsUpdateWithWhereUniqueWithoutOrdersInput], {
    nullable: true
  })
  update?: Order_DetailsUpdateWithWhereUniqueWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsUpdateManyWithWhereWithoutOrdersInput], {
    nullable: true
  })
  updateMany?: Order_DetailsUpdateManyWithWhereWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_DetailsScalarWhereInput[] | undefined;
}
