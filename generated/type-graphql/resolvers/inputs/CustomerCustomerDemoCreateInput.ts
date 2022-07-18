import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerDemographicsCreateNestedOneWithoutCustomerCustomerDemoInput } from "../inputs/CustomerDemographicsCreateNestedOneWithoutCustomerCustomerDemoInput";
import { CustomersCreateNestedOneWithoutCustomerCustomerDemoInput } from "../inputs/CustomersCreateNestedOneWithoutCustomerCustomerDemoInput";

@TypeGraphQL.InputType("CustomerCustomerDemoCreateInput", {
  isAbstract: true
})
export class CustomerCustomerDemoCreateInput {
  @TypeGraphQL.Field(_type => CustomersCreateNestedOneWithoutCustomerCustomerDemoInput, {
    nullable: false
  })
  Customers!: CustomersCreateNestedOneWithoutCustomerCustomerDemoInput;

  @TypeGraphQL.Field(_type => CustomerDemographicsCreateNestedOneWithoutCustomerCustomerDemoInput, {
    nullable: false
  })
  CustomerDemographics!: CustomerDemographicsCreateNestedOneWithoutCustomerCustomerDemoInput;
}
