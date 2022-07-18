import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoCreateManyCustomersInputEnvelope } from "../inputs/CustomerCustomerDemoCreateManyCustomersInputEnvelope";
import { CustomerCustomerDemoCreateOrConnectWithoutCustomersInput } from "../inputs/CustomerCustomerDemoCreateOrConnectWithoutCustomersInput";
import { CustomerCustomerDemoCreateWithoutCustomersInput } from "../inputs/CustomerCustomerDemoCreateWithoutCustomersInput";
import { CustomerCustomerDemoScalarWhereInput } from "../inputs/CustomerCustomerDemoScalarWhereInput";
import { CustomerCustomerDemoUpdateManyWithWhereWithoutCustomersInput } from "../inputs/CustomerCustomerDemoUpdateManyWithWhereWithoutCustomersInput";
import { CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomersInput } from "../inputs/CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomersInput";
import { CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomersInput } from "../inputs/CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomersInput";
import { CustomerCustomerDemoWhereUniqueInput } from "../inputs/CustomerCustomerDemoWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCustomerDemoUpdateManyWithoutCustomersNestedInput", {
  isAbstract: true
})
export class CustomerCustomerDemoUpdateManyWithoutCustomersNestedInput {
  @TypeGraphQL.Field(_type => [CustomerCustomerDemoCreateWithoutCustomersInput], {
    nullable: true
  })
  create?: CustomerCustomerDemoCreateWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoCreateOrConnectWithoutCustomersInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCustomerDemoCreateOrConnectWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  upsert?: CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoCreateManyCustomersInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCustomerDemoCreateManyCustomersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoWhereUniqueInput], {
    nullable: true
  })
  set?: CustomerCustomerDemoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CustomerCustomerDemoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoWhereUniqueInput], {
    nullable: true
  })
  delete?: CustomerCustomerDemoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerCustomerDemoWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomersInput], {
    nullable: true
  })
  update?: CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoUpdateManyWithWhereWithoutCustomersInput], {
    nullable: true
  })
  updateMany?: CustomerCustomerDemoUpdateManyWithWhereWithoutCustomersInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CustomerCustomerDemoScalarWhereInput[] | undefined;
}
