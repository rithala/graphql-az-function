import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesCreateWithoutTerritoriesInput } from "../inputs/EmployeeTerritoriesCreateWithoutTerritoriesInput";
import { EmployeeTerritoriesUpdateWithoutTerritoriesInput } from "../inputs/EmployeeTerritoriesUpdateWithoutTerritoriesInput";
import { EmployeeTerritoriesWhereUniqueInput } from "../inputs/EmployeeTerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeeTerritoriesUpsertWithWhereUniqueWithoutTerritoriesInput", {
  isAbstract: true
})
export class EmployeeTerritoriesUpsertWithWhereUniqueWithoutTerritoriesInput {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeeTerritoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesUpdateWithoutTerritoriesInput, {
    nullable: false
  })
  update!: EmployeeTerritoriesUpdateWithoutTerritoriesInput;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesCreateWithoutTerritoriesInput, {
    nullable: false
  })
  create!: EmployeeTerritoriesCreateWithoutTerritoriesInput;
}
