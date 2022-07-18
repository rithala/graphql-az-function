import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("RegionCountAggregate", {
  isAbstract: true
})
export class RegionCountAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  RegionID!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  RegionDescription!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  _all!: number;
}
