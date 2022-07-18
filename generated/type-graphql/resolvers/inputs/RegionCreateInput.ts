import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesCreateNestedManyWithoutRegionInput } from "../inputs/TerritoriesCreateNestedManyWithoutRegionInput";

@TypeGraphQL.InputType("RegionCreateInput", {
  isAbstract: true
})
export class RegionCreateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  RegionID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  RegionDescription!: string;

  @TypeGraphQL.Field(_type => TerritoriesCreateNestedManyWithoutRegionInput, {
    nullable: true
  })
  Territories?: TerritoriesCreateNestedManyWithoutRegionInput | undefined;
}
