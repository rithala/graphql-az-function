import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeeTerritoriesUpdateManyMutationInput } from "../../../inputs/EmployeeTerritoriesUpdateManyMutationInput";
import { EmployeeTerritoriesWhereInput } from "../../../inputs/EmployeeTerritoriesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEmployeeTerritoriesArgs {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesUpdateManyMutationInput, {
    nullable: false
  })
  data!: EmployeeTerritoriesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereInput, {
    nullable: true
  })
  where?: EmployeeTerritoriesWhereInput | undefined;
}
