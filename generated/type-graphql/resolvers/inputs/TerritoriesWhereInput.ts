import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesListRelationFilter } from "../inputs/EmployeeTerritoriesListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { RegionRelationFilter } from "../inputs/RegionRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TerritoriesWhereInput", {
  isAbstract: true
})
export class TerritoriesWhereInput {
  @TypeGraphQL.Field(_type => [TerritoriesWhereInput], {
    nullable: true
  })
  AND?: TerritoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesWhereInput], {
    nullable: true
  })
  OR?: TerritoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesWhereInput], {
    nullable: true
  })
  NOT?: TerritoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  TerritoryID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  TerritoryDescription?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  RegionID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => RegionRelationFilter, {
    nullable: true
  })
  Region?: RegionRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesListRelationFilter, {
    nullable: true
  })
  EmployeeTerritories?: EmployeeTerritoriesListRelationFilter | undefined;
}
