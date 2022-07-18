import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput } from "../inputs/CustomersUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput";

@TypeGraphQL.InputType("CustomerCustomerDemoUpdateWithoutCustomerDemographicsInput", {
  isAbstract: true
})
export class CustomerCustomerDemoUpdateWithoutCustomerDemographicsInput {
  @TypeGraphQL.Field(_type => CustomersUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput, {
    nullable: true
  })
  Customers?: CustomersUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput | undefined;
}
