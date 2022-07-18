import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("EmployeeTerritoriesEmployeeIDTerritoryIDCompoundUniqueInput", {
  isAbstract: true
})
export class EmployeeTerritoriesEmployeeIDTerritoryIDCompoundUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  EmployeeID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TerritoryID!: string;
}
