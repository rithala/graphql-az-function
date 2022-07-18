import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesWhereInput } from "../inputs/EmployeeTerritoriesWhereInput";

@TypeGraphQL.InputType("EmployeeTerritoriesListRelationFilter", {
  isAbstract: true
})
export class EmployeeTerritoriesListRelationFilter {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereInput, {
    nullable: true
  })
  every?: EmployeeTerritoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereInput, {
    nullable: true
  })
  some?: EmployeeTerritoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereInput, {
    nullable: true
  })
  none?: EmployeeTerritoriesWhereInput | undefined;
}
