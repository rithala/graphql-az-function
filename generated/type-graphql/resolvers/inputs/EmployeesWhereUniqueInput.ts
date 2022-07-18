import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("EmployeesWhereUniqueInput", {
  isAbstract: true
})
export class EmployeesWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EmployeeID?: number | undefined;
}
