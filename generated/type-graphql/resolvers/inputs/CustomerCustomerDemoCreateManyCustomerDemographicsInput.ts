import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CustomerCustomerDemoCreateManyCustomerDemographicsInput", {
  isAbstract: true
})
export class CustomerCustomerDemoCreateManyCustomerDemographicsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CustomerID!: string;
}
