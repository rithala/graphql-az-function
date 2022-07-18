import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeeTerritoriesWhereUniqueInput } from "../../../inputs/EmployeeTerritoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEmployeeTerritoriesArgs {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeeTerritoriesWhereUniqueInput;
}
