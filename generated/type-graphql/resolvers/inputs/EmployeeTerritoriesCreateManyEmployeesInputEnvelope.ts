import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesCreateManyEmployeesInput } from "../inputs/EmployeeTerritoriesCreateManyEmployeesInput";

@TypeGraphQL.InputType("EmployeeTerritoriesCreateManyEmployeesInputEnvelope", {
  isAbstract: true
})
export class EmployeeTerritoriesCreateManyEmployeesInputEnvelope {
  @TypeGraphQL.Field(_type => [EmployeeTerritoriesCreateManyEmployeesInput], {
    nullable: false
  })
  data!: EmployeeTerritoriesCreateManyEmployeesInput[];
}
