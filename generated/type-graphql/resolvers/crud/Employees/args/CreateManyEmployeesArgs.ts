import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeesCreateManyInput } from "../../../inputs/EmployeesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEmployeesArgs {
  @TypeGraphQL.Field(_type => [EmployeesCreateManyInput], {
    nullable: false
  })
  data!: EmployeesCreateManyInput[];
}
