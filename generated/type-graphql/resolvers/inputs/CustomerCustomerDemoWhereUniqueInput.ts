import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoCustomerIDCustomerTypeIDCompoundUniqueInput } from "../inputs/CustomerCustomerDemoCustomerIDCustomerTypeIDCompoundUniqueInput";

@TypeGraphQL.InputType("CustomerCustomerDemoWhereUniqueInput", {
  isAbstract: true
})
export class CustomerCustomerDemoWhereUniqueInput {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoCustomerIDCustomerTypeIDCompoundUniqueInput, {
    nullable: true
  })
  CustomerID_CustomerTypeID?: CustomerCustomerDemoCustomerIDCustomerTypeIDCompoundUniqueInput | undefined;
}
