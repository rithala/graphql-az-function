import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeeTerritoriesWhereInput } from "../../../inputs/EmployeeTerritoriesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEmployeeTerritoriesArgs {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereInput, {
    nullable: true
  })
  where?: EmployeeTerritoriesWhereInput | undefined;
}
