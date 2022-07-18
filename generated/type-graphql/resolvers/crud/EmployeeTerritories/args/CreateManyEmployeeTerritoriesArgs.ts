import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeeTerritoriesCreateManyInput } from "../../../inputs/EmployeeTerritoriesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEmployeeTerritoriesArgs {
  @TypeGraphQL.Field(_type => [EmployeeTerritoriesCreateManyInput], {
    nullable: false
  })
  data!: EmployeeTerritoriesCreateManyInput[];
}
