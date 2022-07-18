import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesWhereInput } from "../inputs/TerritoriesWhereInput";

@TypeGraphQL.InputType("TerritoriesListRelationFilter", {
  isAbstract: true
})
export class TerritoriesListRelationFilter {
  @TypeGraphQL.Field(_type => TerritoriesWhereInput, {
    nullable: true
  })
  every?: TerritoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TerritoriesWhereInput, {
    nullable: true
  })
  some?: TerritoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TerritoriesWhereInput, {
    nullable: true
  })
  none?: TerritoriesWhereInput | undefined;
}
