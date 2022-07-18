import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TerritoriesMinAggregate", {
  isAbstract: true
})
export class TerritoriesMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TerritoryID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TerritoryDescription!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  RegionID!: number | null;
}
