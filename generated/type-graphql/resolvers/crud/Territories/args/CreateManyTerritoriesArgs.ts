import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TerritoriesCreateManyInput } from "../../../inputs/TerritoriesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTerritoriesArgs {
  @TypeGraphQL.Field(_type => [TerritoriesCreateManyInput], {
    nullable: false
  })
  data!: TerritoriesCreateManyInput[];
}
