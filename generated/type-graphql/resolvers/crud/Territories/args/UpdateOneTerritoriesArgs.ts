import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TerritoriesUpdateInput } from "../../../inputs/TerritoriesUpdateInput";
import { TerritoriesWhereUniqueInput } from "../../../inputs/TerritoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTerritoriesArgs {
  @TypeGraphQL.Field(_type => TerritoriesUpdateInput, {
    nullable: false
  })
  data!: TerritoriesUpdateInput;

  @TypeGraphQL.Field(_type => TerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: TerritoriesWhereUniqueInput;
}
