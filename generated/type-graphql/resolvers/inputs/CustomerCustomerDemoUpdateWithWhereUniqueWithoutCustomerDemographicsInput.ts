import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoUpdateWithoutCustomerDemographicsInput } from "../inputs/CustomerCustomerDemoUpdateWithoutCustomerDemographicsInput";
import { CustomerCustomerDemoWhereUniqueInput } from "../inputs/CustomerCustomerDemoWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomerDemographicsInput", {
  isAbstract: true
})
export class CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomerDemographicsInput {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerCustomerDemoWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoUpdateWithoutCustomerDemographicsInput, {
    nullable: false
  })
  data!: CustomerCustomerDemoUpdateWithoutCustomerDemographicsInput;
}
