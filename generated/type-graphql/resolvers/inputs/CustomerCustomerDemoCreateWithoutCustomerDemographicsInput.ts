import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCreateNestedOneWithoutCustomerCustomerDemoInput } from "../inputs/CustomersCreateNestedOneWithoutCustomerCustomerDemoInput";

@TypeGraphQL.InputType("CustomerCustomerDemoCreateWithoutCustomerDemographicsInput", {
  isAbstract: true
})
export class CustomerCustomerDemoCreateWithoutCustomerDemographicsInput {
  @TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutCustomerCustomerDemoInput, {
    nullable: false
  })
  Customers!: CustomersCreateNestedOneWithoutCustomerCustomerDemoInput;
}
