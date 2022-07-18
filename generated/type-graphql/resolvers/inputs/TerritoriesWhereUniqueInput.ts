import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TerritoriesWhereUniqueInput", {
  isAbstract: true
})
export class TerritoriesWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TerritoryID?: string | undefined;
}
