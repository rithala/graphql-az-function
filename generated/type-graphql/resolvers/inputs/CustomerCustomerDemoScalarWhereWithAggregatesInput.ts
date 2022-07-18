import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CustomerCustomerDemoScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CustomerCustomerDemoScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CustomerCustomerDemoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CustomerCustomerDemoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CustomerCustomerDemoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CustomerCustomerDemoScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  CustomerID?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  CustomerTypeID?: StringWithAggregatesFilter | undefined;
}
