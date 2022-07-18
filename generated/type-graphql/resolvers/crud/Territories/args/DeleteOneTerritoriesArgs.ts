import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TerritoriesWhereUniqueInput } from "../../../inputs/TerritoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneTerritoriesArgs {
  @TypeGraphQL.Field(_type => TerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: TerritoriesWhereUniqueInput;
}
