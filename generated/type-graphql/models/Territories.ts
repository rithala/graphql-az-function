import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EmployeeTerritories } from "../models/EmployeeTerritories";
import { Region } from "../models/Region";
import { TerritoriesCount } from "../resolvers/outputs/TerritoriesCount";

@TypeGraphQL.ObjectType("Territories", {
  isAbstract: true
})
export class Territories {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TerritoryID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TerritoryDescription!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  RegionID!: number;

  Region?: Region;

  EmployeeTerritories?: EmployeeTerritories[];

  @TypeGraphQL.Field(_type => TerritoriesCount, {
    nullable: true
  })
  _count?: TerritoriesCount | null;
}
