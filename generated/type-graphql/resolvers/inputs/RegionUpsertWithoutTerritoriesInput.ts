import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateWithoutTerritoriesInput } from "../inputs/RegionCreateWithoutTerritoriesInput";
import { RegionUpdateWithoutTerritoriesInput } from "../inputs/RegionUpdateWithoutTerritoriesInput";

@TypeGraphQL.InputType("RegionUpsertWithoutTerritoriesInput", {
  isAbstract: true
})
export class RegionUpsertWithoutTerritoriesInput {
  @TypeGraphQL.Field(_type => RegionUpdateWithoutTerritoriesInput, {
    nullable: false
  })
  update!: RegionUpdateWithoutTerritoriesInput;

  @TypeGraphQL.Field(_type => RegionCreateWithoutTerritoriesInput, {
    nullable: false
  })
  create!: RegionCreateWithoutTerritoriesInput;
}
