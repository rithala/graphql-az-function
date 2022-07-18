import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateOrConnectWithoutEmployeeTerritoriesInput } from "../inputs/EmployeesCreateOrConnectWithoutEmployeeTerritoriesInput";
import { EmployeesCreateWithoutEmployeeTerritoriesInput } from "../inputs/EmployeesCreateWithoutEmployeeTerritoriesInput";
import { EmployeesWhereUniqueInput } from "../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeesCreateNestedOneWithoutEmployeeTerritoriesInput", {
  isAbstract: true
})
export class EmployeesCreateNestedOneWithoutEmployeeTerritoriesInput {
  @TypeGraphQL.Field(_type => EmployeesCreateWithoutEmployeeTerritoriesInput, {
    nullable: true
  })
  create?: EmployeesCreateWithoutEmployeeTerritoriesInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesCreateOrConnectWithoutEmployeeTerritoriesInput, {
    nullable: true
  })
  connectOrCreate?: EmployeesCreateOrConnectWithoutEmployeeTerritoriesInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesWhereUniqueInput, {
    nullable: true
  })
  connect?: EmployeesWhereUniqueInput | undefined;
}
