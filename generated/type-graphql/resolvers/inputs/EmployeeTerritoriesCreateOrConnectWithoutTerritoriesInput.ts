import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesCreateWithoutTerritoriesInput } from "../inputs/EmployeeTerritoriesCreateWithoutTerritoriesInput";
import { EmployeeTerritoriesWhereUniqueInput } from "../inputs/EmployeeTerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput", {
  isAbstract: true
})
export class EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereUniqueInput, {
    nullable: false
  })
  where!: EmployeeTerritoriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesCreateWithoutTerritoriesInput, {
    nullable: false
  })
  create!: EmployeeTerritoriesCreateWithoutTerritoriesInput;
}
