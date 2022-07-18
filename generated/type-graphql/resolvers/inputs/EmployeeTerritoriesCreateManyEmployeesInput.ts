import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("EmployeeTerritoriesCreateManyEmployeesInput", {
  isAbstract: true
})
export class EmployeeTerritoriesCreateManyEmployeesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TerritoryID!: string;
}
