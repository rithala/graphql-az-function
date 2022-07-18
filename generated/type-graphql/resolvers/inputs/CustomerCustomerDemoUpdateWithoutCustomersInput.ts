import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerDemographicsUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput } from "../inputs/CustomerDemographicsUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput";

@TypeGraphQL.InputType("CustomerCustomerDemoUpdateWithoutCustomersInput", {
  isAbstract: true
})
export class CustomerCustomerDemoUpdateWithoutCustomersInput {
  @TypeGraphQL.Field(_type => CustomerDemographicsUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput, {
    nullable: true
  })
  CustomerDemographics?: CustomerDemographicsUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput | undefined;
}
