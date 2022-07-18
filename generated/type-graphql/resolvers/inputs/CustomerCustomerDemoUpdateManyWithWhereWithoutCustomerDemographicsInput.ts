import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoScalarWhereInput } from "../inputs/CustomerCustomerDemoScalarWhereInput";
import { CustomerCustomerDemoUpdateManyMutationInput } from "../inputs/CustomerCustomerDemoUpdateManyMutationInput";

@TypeGraphQL.InputType("CustomerCustomerDemoUpdateManyWithWhereWithoutCustomerDemographicsInput", {
  isAbstract: true
})
export class CustomerCustomerDemoUpdateManyWithWhereWithoutCustomerDemographicsInput {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoScalarWhereInput, {
    nullable: false
  })
  where!: CustomerCustomerDemoScalarWhereInput;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoUpdateManyMutationInput, {
    nullable: false
  })
  data!: CustomerCustomerDemoUpdateManyMutationInput;
}
