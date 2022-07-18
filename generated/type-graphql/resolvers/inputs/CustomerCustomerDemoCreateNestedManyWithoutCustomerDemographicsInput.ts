import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope } from "../inputs/CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope";
import { CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput } from "../inputs/CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput";
import { CustomerCustomerDemoCreateWithoutCustomerDemographicsInput } from "../inputs/CustomerCustomerDemoCreateWithoutCustomerDemographicsInput";
import { CustomerCustomerDemoWhereUniqueInput } from "../inputs/CustomerCustomerDemoWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCustomerDemoCreateNestedManyWithoutCustomerDemographicsInput", {
  isAbstract: true
})
export class CustomerCustomerDemoCreateNestedManyWithoutCustomerDemographicsInput {
  @TypeGraphQL.Field(_type => [CustomerCustomerDemoCreateWithoutCustomerDemographicsInput], {
    nullable: true
  })
  create?: CustomerCustomerDemoCreateWithoutCustomerDemographicsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput], {
    nullable: true
  })
  connectOrCreate?: CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope, {
    nullable: true
  })
  createMany?: CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoWhereUniqueInput], {
    nullable: true
  })
  connect?: CustomerCustomerDemoWhereUniqueInput[] | undefined;
}
