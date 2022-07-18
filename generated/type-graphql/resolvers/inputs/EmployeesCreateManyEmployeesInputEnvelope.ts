import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateManyEmployeesInput } from "../inputs/EmployeesCreateManyEmployeesInput";

@TypeGraphQL.InputType("EmployeesCreateManyEmployeesInputEnvelope", {
  isAbstract: true
})
export class EmployeesCreateManyEmployeesInputEnvelope {
  @TypeGraphQL.Field(_type => [EmployeesCreateManyEmployeesInput], {
    nullable: false
  })
  data!: EmployeesCreateManyEmployeesInput[];
}
