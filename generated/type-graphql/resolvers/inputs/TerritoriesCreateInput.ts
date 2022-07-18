import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesCreateNestedManyWithoutTerritoriesInput } from "../inputs/EmployeeTerritoriesCreateNestedManyWithoutTerritoriesInput";
import { RegionCreateNestedOneWithoutTerritoriesInput } from "../inputs/RegionCreateNestedOneWithoutTerritoriesInput";

@TypeGraphQL.InputType("TerritoriesCreateInput", {
  isAbstract: true
})
export class TerritoriesCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TerritoryID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TerritoryDescription!: string;

  @TypeGraphQL.Field(_type => RegionCreateNestedOneWithoutTerritoriesInput, {
    nullable: false
  })
  Region!: RegionCreateNestedOneWithoutTerritoriesInput;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesCreateNestedManyWithoutTerritoriesInput, {
    nullable: true
  })
  EmployeeTerritories?: EmployeeTerritoriesCreateNestedManyWithoutTerritoriesInput | undefined;
}
