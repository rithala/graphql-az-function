import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateWithoutTerritoriesInput } from "../inputs/RegionCreateWithoutTerritoriesInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionCreateOrConnectWithoutTerritoriesInput", {
  isAbstract: true
})
export class RegionCreateOrConnectWithoutTerritoriesInput {
  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: false
  })
  where!: RegionWhereUniqueInput;

  @TypeGraphQL.Field(_type => RegionCreateWithoutTerritoriesInput, {
    nullable: false
  })
  create!: RegionCreateWithoutTerritoriesInput;
}
