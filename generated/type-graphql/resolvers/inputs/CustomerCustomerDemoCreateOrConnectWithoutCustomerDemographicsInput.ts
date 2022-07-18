import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoCreateWithoutCustomerDemographicsInput } from "../inputs/CustomerCustomerDemoCreateWithoutCustomerDemographicsInput";
import { CustomerCustomerDemoWhereUniqueInput } from "../inputs/CustomerCustomerDemoWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput", {
  isAbstract: true
})
export class CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerCustomerDemoWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoCreateWithoutCustomerDemographicsInput, {
    nullable: false
  })
  create!: CustomerCustomerDemoCreateWithoutCustomerDemographicsInput;
}
