import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeeTerritoriesWhereUniqueInput } from "../../../inputs/EmployeeTerritoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneEmployeeTerritoriesArgs {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeeTerritoriesWhereUniqueInput;
}
