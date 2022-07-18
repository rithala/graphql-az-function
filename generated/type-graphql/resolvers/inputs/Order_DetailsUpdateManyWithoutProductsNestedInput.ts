import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsCreateManyProductsInputEnvelope } from "../inputs/Order_DetailsCreateManyProductsInputEnvelope";
import { Order_DetailsCreateOrConnectWithoutProductsInput } from "../inputs/Order_DetailsCreateOrConnectWithoutProductsInput";
import { Order_DetailsCreateWithoutProductsInput } from "../inputs/Order_DetailsCreateWithoutProductsInput";
import { Order_DetailsScalarWhereInput } from "../inputs/Order_DetailsScalarWhereInput";
import { Order_DetailsUpdateManyWithWhereWithoutProductsInput } from "../inputs/Order_DetailsUpdateManyWithWhereWithoutProductsInput";
import { Order_DetailsUpdateWithWhereUniqueWithoutProductsInput } from "../inputs/Order_DetailsUpdateWithWhereUniqueWithoutProductsInput";
import { Order_DetailsUpsertWithWhereUniqueWithoutProductsInput } from "../inputs/Order_DetailsUpsertWithWhereUniqueWithoutProductsInput";
import { Order_DetailsWhereUniqueInput } from "../inputs/Order_DetailsWhereUniqueInput";

@TypeGraphQL.InputType("Order_DetailsUpdateManyWithoutProductsNestedInput", {
  isAbstract: true
})
export class Order_DetailsUpdateManyWithoutProductsNestedInput {
  @TypeGraphQL.Field(_type => [Order_DetailsCreateWithoutProductsInput], {
    nullable: true
  })
  create?: Order_DetailsCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: Order_DetailsCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsUpsertWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  upsert?: Order_DetailsUpsertWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: Order_DetailsCreateManyProductsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Order_DetailsUpdateWithWhereUniqueWithoutProductsInput], {
    nullable: true
  })
  update?: Order_DetailsUpdateWithWhereUniqueWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsUpdateManyWithWhereWithoutProductsInput], {
    nullable: true
  })
  updateMany?: Order_DetailsUpdateManyWithWhereWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Order_DetailsScalarWhereInput[] | undefined;
}
