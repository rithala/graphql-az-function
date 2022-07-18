import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TerritoriesUpdateManyMutationInput } from "../../../inputs/TerritoriesUpdateManyMutationInput";
import { TerritoriesWhereInput } from "../../../inputs/TerritoriesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTerritoriesArgs {
  @TypeGraphQL.Field(_type => TerritoriesUpdateManyMutationInput, {
    nullable: false
  })
  data!: TerritoriesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TerritoriesWhereInput, {
    nullable: true
  })
  where?: TerritoriesWhereInput | undefined;
}
