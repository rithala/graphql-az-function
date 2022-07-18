import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ShippersScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ShippersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ShippersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ShippersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShippersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ShippersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShippersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ShippersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  ShipperID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  CompanyName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Phone?: StringNullableWithAggregatesFilter | undefined;
}
