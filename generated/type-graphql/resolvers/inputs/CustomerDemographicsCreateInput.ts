import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoCreateNestedManyWithoutCustomerDemographicsInput } from "../inputs/CustomerCustomerDemoCreateNestedManyWithoutCustomerDemographicsInput";

@TypeGraphQL.InputType("CustomerDemographicsCreateInput", {
  isAbstract: true
})
export class CustomerDemographicsCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CustomerTypeID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CustomerDesc?: string | undefined;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoCreateNestedManyWithoutCustomerDemographicsInput, {
    nullable: true
  })
  CustomerCustomerDemo?: CustomerCustomerDemoCreateNestedManyWithoutCustomerDemographicsInput | undefined;
}
