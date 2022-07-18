import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("RegionCreateWithoutTerritoriesInput", {
  isAbstract: true
})
export class RegionCreateWithoutTerritoriesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  RegionID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RegionDescription!: string;
}
