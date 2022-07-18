import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TerritoriesScalarWhereInput", {
  isAbstract: true
})
export class TerritoriesScalarWhereInput {
  @TypeGraphQL.Field(_type => [TerritoriesScalarWhereInput], {
    nullable: true
  })
  AND?: TerritoriesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesScalarWhereInput], {
    nullable: true
  })
  OR?: TerritoriesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TerritoriesScalarWhereInput], {
    nullable: true
  })
  NOT?: TerritoriesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  TerritoryID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  TerritoryDescription?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  RegionID?: IntFilter | undefined;
}
