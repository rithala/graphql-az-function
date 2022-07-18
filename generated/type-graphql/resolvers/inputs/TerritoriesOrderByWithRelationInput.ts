import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesOrderByRelationAggregateInput } from "../inputs/EmployeeTerritoriesOrderByRelationAggregateInput";
import { RegionOrderByWithRelationInput } from "../inputs/RegionOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TerritoriesOrderByWithRelationInput", {
  isAbstract: true
})
export class TerritoriesOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TerritoryID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TerritoryDescription?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  RegionID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => RegionOrderByWithRelationInput, {
    nullable: true
  })
  Region?: RegionOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesOrderByRelationAggregateInput, {
    nullable: true
  })
  EmployeeTerritories?: EmployeeTerritoriesOrderByRelationAggregateInput | undefined;
}
