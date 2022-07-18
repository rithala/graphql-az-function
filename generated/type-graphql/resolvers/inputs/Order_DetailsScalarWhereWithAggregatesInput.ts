import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("Order_DetailsScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class Order_DetailsScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Order_DetailsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Order_DetailsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Order_DetailsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Order_DetailsScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  OrderID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  ProductID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  UnitPrice?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  Quantity?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  Discount?: FloatWithAggregatesFilter | undefined;
}
