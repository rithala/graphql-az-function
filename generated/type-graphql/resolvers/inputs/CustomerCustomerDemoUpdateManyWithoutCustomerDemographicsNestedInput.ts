import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope } from "../inputs/CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope";
import { CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput } from "../inputs/CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput";
import { CustomerCustomerDemoCreateWithoutCustomerDemographicsInput } from "../inputs/CustomerCustomerDemoCreateWithoutCustomerDemographicsInput";
import { CustomerCustomerDemoScalarWhereInput } from "../inputs/CustomerCustomerDemoScalarWhereInput";
import { CustomerCustomerDemoUpdateManyWithWhereWithoutCustomerDemographicsInput } from "../inputs/CustomerCustomerDemoUpdateManyWithWhereWithoutCustomerDemographicsInput";
import { CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomerDemographicsInput } from "../inputs/CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomerDemographicsInput";
import { CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomerDemographicsInput } from "../inputs/CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomerDemographicsInput";
import { CustomerCustomerDemoWhereUniqueInput } from "../inputs/CustomerCustomerDemoWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCustomerDemoUpdateManyWithoutCustomerDemographicsNestedInput", {
  isAbstract: true
})
export class CustomerCustomerDemoUpdateManyWithoutCustomerDemographicsNestedInput {
  @TypeGraphQL.Field(_type => [CustomerCustomerDemoCreateWithoutCustomerDemographicsInput], {
    nullable: true
  })
  create?: CustomerCustomerDemoCreateWithoutCustomerDemographicsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomerDemographicsInput], {
    nullable: true
  })
  upsert?: CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomerDemographicsInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomerDemographicsInput], {
    nullable: true
  })
  update?: CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomerDemographicsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoUpdateManyWithWhereWithoutCustomerDemographicsInput], {
    nullable: true
  })
  updateMany?: CustomerCustomerDemoUpdateManyWithWhereWithoutCustomerDemographicsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CustomerCustomerDemoScalarWhereInput[] | undefined;
}
