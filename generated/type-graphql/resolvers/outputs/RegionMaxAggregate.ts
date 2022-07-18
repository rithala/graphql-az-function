import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("RegionMaxAggregate", {
  isAbstract: true
})
export class RegionMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  RegionID!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  RegionDescription!: string | null;
}
