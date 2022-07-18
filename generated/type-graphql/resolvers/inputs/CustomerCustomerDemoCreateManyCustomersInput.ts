import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CustomerCustomerDemoCreateManyCustomersInput", {
  isAbstract: true
})
export class CustomerCustomerDemoCreateManyCustomersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CustomerTypeID!: string;
}
