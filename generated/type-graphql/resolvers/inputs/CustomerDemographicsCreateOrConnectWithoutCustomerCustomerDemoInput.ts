import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerDemographicsCreateWithoutCustomerCustomerDemoInput } from "../inputs/CustomerDemographicsCreateWithoutCustomerCustomerDemoInput";
import { CustomerDemographicsWhereUniqueInput } from "../inputs/CustomerDemographicsWhereUniqueInput";

@TypeGraphQL.InputType("CustomerDemographicsCreateOrConnectWithoutCustomerCustomerDemoInput", {
  isAbstract: true
})
export class CustomerDemographicsCreateOrConnectWithoutCustomerCustomerDemoInput {
  @TypeGraphQL.Field(_type => CustomerDemographicsWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerDemographicsWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerDemographicsCreateWithoutCustomerCustomerDemoInput, {
    nullable: false
  })
  create!: CustomerDemographicsCreateWithoutCustomerCustomerDemoInput;
}
