import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TerritoriesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TerritoriesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TerritoriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TerritoriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TerritoriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TerritoriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  TerritoryID?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  TerritoryDescription?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  RegionID?: IntWithAggregatesFilter | undefined;
}
