import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RegionCreateOrConnectWithoutTerritoriesInput } from "../inputs/RegionCreateOrConnectWithoutTerritoriesInput";
import { RegionCreateWithoutTerritoriesInput } from "../inputs/RegionCreateWithoutTerritoriesInput";
import { RegionWhereUniqueInput } from "../inputs/RegionWhereUniqueInput";

@TypeGraphQL.InputType("RegionCreateNestedOneWithoutTerritoriesInput", {
  isAbstract: true
})
export class RegionCreateNestedOneWithoutTerritoriesInput {
  @TypeGraphQL.Field(_type => RegionCreateWithoutTerritoriesInput, {
    nullable: true
  })
  create?: RegionCreateWithoutTerritoriesInput | undefined;

  @TypeGraphQL.Field(_type => RegionCreateOrConnectWithoutTerritoriesInput, {
    nullable: true
  })
  connectOrCreate?: RegionCreateOrConnectWithoutTerritoriesInput | undefined;

  @TypeGraphQL.Field(_type => RegionWhereUniqueInput, {
    nullable: true
  })
  connect?: RegionWhereUniqueInput | undefined;
}
