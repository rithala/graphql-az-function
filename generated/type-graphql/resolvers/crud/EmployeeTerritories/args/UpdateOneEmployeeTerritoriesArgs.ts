import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeeTerritoriesUpdateInput } from "../../../inputs/EmployeeTerritoriesUpdateInput";
import { EmployeeTerritoriesWhereUniqueInput } from "../../../inputs/EmployeeTerritoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEmployeeTerritoriesArgs {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesUpdateInput, {
    nullable: false
  })
  data!: EmployeeTerritoriesUpdateInput;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeeTerritoriesWhereUniqueInput;
}
