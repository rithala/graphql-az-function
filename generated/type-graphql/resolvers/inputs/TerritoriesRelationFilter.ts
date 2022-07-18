import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesWhereInput } from "../inputs/TerritoriesWhereInput";

@TypeGraphQL.InputType("TerritoriesRelationFilter", {
  isAbstract: true
})
export class TerritoriesRelationFilter {
  @TypeGraphQL.Field(_type => TerritoriesWhereInput, {
    nullable: true
  })
  is?: TerritoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => TerritoriesWhereInput, {
    nullable: true
  })
  isNot?: TerritoriesWhereInput | undefined;
}
