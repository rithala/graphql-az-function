import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CustomerCustomerDemoCustomerIDCustomerTypeIDCompoundUniqueInput", {
  isAbstract: true
})
export class CustomerCustomerDemoCustomerIDCustomerTypeIDCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CustomerID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CustomerTypeID!: string;
}
