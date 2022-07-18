import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TerritoriesScalarWhereInput } from "../inputs/TerritoriesScalarWhereInput";
import { TerritoriesUpdateManyMutationInput } from "../inputs/TerritoriesUpdateManyMutationInput";

@TypeGraphQL.InputType("TerritoriesUpdateManyWithWhereWithoutRegionInput", {
  isAbstract: true
})
export class TerritoriesUpdateManyWithWhereWithoutRegionInput {
  @TypeGraphQL.Field(_type => TerritoriesScalarWhereInput, {
    nullable: false
  })
  where!: TerritoriesScalarWhereInput;

  @TypeGraphQL.Field(_type => TerritoriesUpdateManyMutationInput, {
    nullable: false
  })
  data!: TerritoriesUpdateManyMutationInput;
}
