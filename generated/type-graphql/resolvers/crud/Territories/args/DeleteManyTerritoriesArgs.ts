import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TerritoriesWhereInput } from "../../../inputs/TerritoriesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTerritoriesArgs {
  @TypeGraphQL.Field(_type => TerritoriesWhereInput, {
    nullable: true
  })
  where?: TerritoriesWhereInput | undefined;
}
