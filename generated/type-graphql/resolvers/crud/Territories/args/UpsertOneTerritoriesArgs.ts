import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TerritoriesCreateInput } from "../../../inputs/TerritoriesCreateInput";
import { TerritoriesUpdateInput } from "../../../inputs/TerritoriesUpdateInput";
import { TerritoriesWhereUniqueInput } from "../../../inputs/TerritoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTerritoriesArgs {
  @TypeGraphQL.Field(_type => TerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: TerritoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => TerritoriesCreateInput, {
    nullable: false
  })
  create!: TerritoriesCreateInput;

  @TypeGraphQL.Field(_type => TerritoriesUpdateInput, {
    nullable: false
  })
  update!: TerritoriesUpdateInput;
}
