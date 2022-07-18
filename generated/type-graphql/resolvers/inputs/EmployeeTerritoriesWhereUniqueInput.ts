import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesEmployeeIDTerritoryIDCompoundUniqueInput } from "../inputs/EmployeeTerritoriesEmployeeIDTerritoryIDCompoundUniqueInput";

@TypeGraphQL.InputType("EmployeeTerritoriesWhereUniqueInput", {
  isAbstract: true
})
export class EmployeeTerritoriesWhereUniqueInput {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesEmployeeIDTerritoryIDCompoundUniqueInput, {
    nullable: true
  })
  EmployeeID_TerritoryID?: EmployeeTerritoriesEmployeeIDTerritoryIDCompoundUniqueInput | undefined;
}
