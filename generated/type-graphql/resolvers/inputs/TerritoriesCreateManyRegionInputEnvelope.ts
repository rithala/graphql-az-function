import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesCreateManyRegionInput } from "../inputs/TerritoriesCreateManyRegionInput";

@TypeGraphQL.InputType("TerritoriesCreateManyRegionInputEnvelope", {
  isAbstract: true
})
export class TerritoriesCreateManyRegionInputEnvelope {
  @TypeGraphQL.Field(_type => [TerritoriesCreateManyRegionInput], {
    nullable: false
  })
  data!: TerritoriesCreateManyRegionInput[];
}
