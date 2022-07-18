import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesWhereInput } from "../inputs/EmployeesWhereInput";

@TypeGraphQL.InputType("EmployeesRelationFilter", {
  isAbstract: true
})
export class EmployeesRelationFilter {
  @TypeGraphQL.Field(_type => EmployeesWhereInput, {
    nullable: true
  })
  is?: EmployeesWhereInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesWhereInput, {
    nullable: true
  })
  isNot?: EmployeesWhereInput | undefined;
}
