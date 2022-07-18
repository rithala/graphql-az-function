import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoCreateWithoutCustomerDemographicsInput } from "../inputs/CustomerCustomerDemoCreateWithoutCustomerDemographicsInput";
import { CustomerCustomerDemoUpdateWithoutCustomerDemographicsInput } from "../inputs/CustomerCustomerDemoUpdateWithoutCustomerDemographicsInput";
import { CustomerCustomerDemoWhereUniqueInput } from "../inputs/CustomerCustomerDemoWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomerDemographicsInput", {
  isAbstract: true
})
export class CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomerDemographicsInput {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerCustomerDemoWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoUpdateWithoutCustomerDemographicsInput, {
    nullable: false
  })
  update!: CustomerCustomerDemoUpdateWithoutCustomerDemographicsInput;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoCreateWithoutCustomerDemographicsInput, {
    nullable: false
  })
  create!: CustomerCustomerDemoCreateWithoutCustomerDemographicsInput;
}
