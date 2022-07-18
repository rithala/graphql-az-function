import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerDemographicsCreateWithoutCustomerCustomerDemoInput } from "../inputs/CustomerDemographicsCreateWithoutCustomerCustomerDemoInput";
import { CustomerDemographicsUpdateWithoutCustomerCustomerDemoInput } from "../inputs/CustomerDemographicsUpdateWithoutCustomerCustomerDemoInput";

@TypeGraphQL.InputType("CustomerDemographicsUpsertWithoutCustomerCustomerDemoInput", {
  isAbstract: true
})
export class CustomerDemographicsUpsertWithoutCustomerCustomerDemoInput {
  @TypeGraphQL.Field(_type => CustomerDemographicsUpdateWithoutCustomerCustomerDemoInput, {
    nullable: false
  })
  update!: CustomerDemographicsUpdateWithoutCustomerCustomerDemoInput;

  @TypeGraphQL.Field(_type => CustomerDemographicsCreateWithoutCustomerCustomerDemoInput, {
    nullable: false
  })
  create!: CustomerDemographicsCreateWithoutCustomerCustomerDemoInput;
}
