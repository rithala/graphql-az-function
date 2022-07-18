import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TerritoriesOrderByWithAggregationInput } from "../../../inputs/TerritoriesOrderByWithAggregationInput";
import { TerritoriesScalarWhereWithAggregatesInput } from "../../../inputs/TerritoriesScalarWhereWithAggregatesInput";
import { TerritoriesWhereInput } from "../../../inputs/TerritoriesWhereInput";
import { TerritoriesScalarFieldEnum } from "../../../../enums/TerritoriesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTerritoriesArgs {
  @TypeGraphQL.Field(_type => TerritoriesWhereInput, {
    nullable: true
  })
  where?: TerritoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TerritoriesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"TerritoryID" | "TerritoryDescription" | "RegionID">;

  @TypeGraphQL.Field(_type => TerritoriesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TerritoriesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
