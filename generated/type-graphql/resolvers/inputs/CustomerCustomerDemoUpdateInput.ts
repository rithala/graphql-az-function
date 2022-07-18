import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerDemographicsUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput } from "../inputs/CustomerDemographicsUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput";
import { CustomersUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput } from "../inputs/CustomersUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput";

@TypeGraphQL.InputType("CustomerCustomerDemoUpdateInput", {
  isAbstract: true
})
export class CustomerCustomerDemoUpdateInput {
  @TypeGraphQL.Field(_type => CustomersUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput, {
    nullable: true
  })
  Customers?: CustomersUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput | undefined;

  @TypeGraphQL.Field(_type => CustomerDemographicsUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput, {
    nullable: true
  })
  CustomerDemographics?: CustomerDemographicsUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput | undefined;
}
