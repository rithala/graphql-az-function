import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Territories } from "../models/Territories";
import { RegionCount } from "../resolvers/outputs/RegionCount";

@TypeGraphQL.ObjectType("Region", {
  isAbstract: true
})
export class Region {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  RegionID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RegionDescription!: string;

  Territories?: Territories[];

  @TypeGraphQL.Field(_type => RegionCount, {
    nullable: true
  })
  _count?: RegionCount | null;
}
