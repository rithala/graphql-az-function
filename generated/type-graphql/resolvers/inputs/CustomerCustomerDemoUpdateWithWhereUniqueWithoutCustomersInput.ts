import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoUpdateWithoutCustomersInput } from "../inputs/CustomerCustomerDemoUpdateWithoutCustomersInput";
import { CustomerCustomerDemoWhereUniqueInput } from "../inputs/CustomerCustomerDemoWhereUniqueInput";

@TypeGraphQL.InputType("CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomersInput", {
  isAbstract: true
})
export class CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomersInput {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereUniqueInput, {
    nullable: false
  })
  where!: CustomerCustomerDemoWhereUniqueInput;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoUpdateWithoutCustomersInput, {
    nullable: false
  })
  data!: CustomerCustomerDemoUpdateWithoutCustomersInput;
}
