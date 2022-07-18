import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TerritoriesOrderByWithRelationInput } from "../../../inputs/TerritoriesOrderByWithRelationInput";
import { TerritoriesWhereInput } from "../../../inputs/TerritoriesWhereInput";
import { TerritoriesWhereUniqueInput } from "../../../inputs/TerritoriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateTerritoriesArgs {
  @TypeGraphQL.Field(_type => TerritoriesWhereInput, {
    nullable: true
  })
  where?: TerritoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TerritoriesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TerritoriesWhereUniqueInput, {
    nullable: true
  })
  cursor?: TerritoriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
