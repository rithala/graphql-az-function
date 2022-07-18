import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesWhereInput } from "../inputs/EmployeesWhereInput";

@TypeGraphQL.InputType("EmployeesListRelationFilter", {
  isAbstract: true
})
export class EmployeesListRelationFilter {
  @TypeGraphQL.Field(_type => EmployeesWhereInput, {
    nullable: true
  })
  every?: EmployeesWhereInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesWhereInput, {
    nullable: true
  })
  some?: EmployeesWhereInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesWhereInput, {
    nullable: true
  })
  none?: EmployeesWhereInput | undefined;
}
