import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeeTerritoriesCreateInput } from "../../../inputs/EmployeeTerritoriesCreateInput";
import { EmployeeTerritoriesUpdateInput } from "../../../inputs/EmployeeTerritoriesUpdateInput";
import { EmployeeTerritoriesWhereUniqueInput } from "../../../inputs/EmployeeTerritoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEmployeeTerritoriesArgs {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeeTerritoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesCreateInput, {
    nullable: false
  })
  create!: EmployeeTerritoriesCreateInput;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesUpdateInput, {
    nullable: false
  })
  update!: EmployeeTerritoriesUpdateInput;
}
