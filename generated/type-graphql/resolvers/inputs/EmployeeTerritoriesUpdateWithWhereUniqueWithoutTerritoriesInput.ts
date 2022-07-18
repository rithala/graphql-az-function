import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesUpdateWithoutTerritoriesInput } from "../inputs/EmployeeTerritoriesUpdateWithoutTerritoriesInput";
import { EmployeeTerritoriesWhereUniqueInput } from "../inputs/EmployeeTerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeeTerritoriesUpdateWithWhereUniqueWithoutTerritoriesInput", {
  isAbstract: true
})
export class EmployeeTerritoriesUpdateWithWhereUniqueWithoutTerritoriesInput {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeeTerritoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesUpdateWithoutTerritoriesInput, {
    nullable: false
  })
  data!: EmployeeTerritoriesUpdateWithoutTerritoriesInput;
}
