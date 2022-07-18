import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoCreateManyCustomerDemographicsInput } from "../inputs/CustomerCustomerDemoCreateManyCustomerDemographicsInput";

@TypeGraphQL.InputType("CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope", {
  isAbstract: true
})
export class CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope {
  @TypeGraphQL.Field(_type => [CustomerCustomerDemoCreateManyCustomerDemographicsInput], {
    nullable: false
  })
  data!: CustomerCustomerDemoCreateManyCustomerDemographicsInput[];
}
