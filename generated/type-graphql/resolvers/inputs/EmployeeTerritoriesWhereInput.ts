import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesRelationFilter } from "../inputs/EmployeesRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TerritoriesRelationFilter } from "../inputs/TerritoriesRelationFilter";

@TypeGraphQL.InputType("EmployeeTerritoriesWhereInput", {
  isAbstract: true
})
export class EmployeeTerritoriesWhereInput {
  @TypeGraphQL.Field(_type => [EmployeeTerritoriesWhereInput], {
    nullable: true
  })
  AND?: EmployeeTerritoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesWhereInput], {
    nullable: true
  })
  OR?: EmployeeTerritoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesWhereInput], {
    nullable: true
  })
  NOT?: EmployeeTerritoriesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  EmployeeID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  TerritoryID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EmployeesRelationFilter, {
    nullable: true
  })
  Employees?: EmployeesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TerritoriesRelationFilter, {
    nullable: true
  })
  Territories?: TerritoriesRelationFilter | undefined;
}
