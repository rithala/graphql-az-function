import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesOrderByRelationAggregateInput } from "../inputs/TerritoriesOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("RegionOrderByWithRelationInput", {
  isAbstract: true
})
export class RegionOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  RegionID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  RegionDescription?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TerritoriesOrderByRelationAggregateInput, {
    nullable: true
  })
  Territories?: TerritoriesOrderByRelationAggregateInput | undefined;
}
