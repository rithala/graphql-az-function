import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoWhereInput } from "../inputs/CustomerCustomerDemoWhereInput";

@TypeGraphQL.InputType("CustomerCustomerDemoListRelationFilter", {
  isAbstract: true
})
export class CustomerCustomerDemoListRelationFilter {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereInput, {
    nullable: true
  })
  every?: CustomerCustomerDemoWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereInput, {
    nullable: true
  })
  some?: CustomerCustomerDemoWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereInput, {
    nullable: true
  })
  none?: CustomerCustomerDemoWhereInput | undefined;
}
