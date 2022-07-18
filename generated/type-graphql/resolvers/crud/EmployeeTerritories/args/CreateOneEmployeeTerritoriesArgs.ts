import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeeTerritoriesCreateInput } from "../../../inputs/EmployeeTerritoriesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEmployeeTerritoriesArgs {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesCreateInput, {
    nullable: false
  })
  data!: EmployeeTerritoriesCreateInput;
}
