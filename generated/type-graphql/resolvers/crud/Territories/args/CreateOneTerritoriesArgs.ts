import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TerritoriesCreateInput } from "../../../inputs/TerritoriesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTerritoriesArgs {
  @TypeGraphQL.Field(_type => TerritoriesCreateInput, {
    nullable: false
  })
  data!: TerritoriesCreateInput;
}
