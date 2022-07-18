import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TerritoriesListRelationFilter } from "../inputs/TerritoriesListRelationFilter";

@TypeGraphQL.InputType("RegionWhereInput", {
  isAbstract: true
})
export class RegionWhereInput {
  @TypeGraphQL.Field(_type => [RegionWhereInput], {
    nullable: true
  })
  AND?: RegionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionWhereInput], {
    nullable: true
  })
  OR?: RegionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [RegionWhereInput], {
    nullable: true
  })
  NOT?: RegionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  RegionID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  RegionDescription?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TerritoriesListRelationFilter, {
    nullable: true
  })
  Territories?: TerritoriesListRelationFilter | undefined;
}
