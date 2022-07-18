import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerDemographicsCreateNestedOneWithoutCustomerCustomerDemoInput } from "../inputs/CustomerDemographicsCreateNestedOneWithoutCustomerCustomerDemoInput";

@TypeGraphQL.InputType("CustomerCustomerDemoCreateWithoutCustomersInput", {
  isAbstract: true
})
export class CustomerCustomerDemoCreateWithoutCustomersInput {
  @TypeGraphQL.Field(_type => CustomerDemographicsCreateNestedOneWithoutCustomerCustomerDemoInput, {
    nullable: false
  })
  CustomerDemographics!: CustomerDemographicsCreateNestedOneWithoutCustomerCustomerDemoInput;
}
