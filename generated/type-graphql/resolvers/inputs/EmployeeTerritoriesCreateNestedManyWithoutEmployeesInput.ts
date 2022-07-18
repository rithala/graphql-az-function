import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesCreateManyEmployeesInputEnvelope } from "../inputs/EmployeeTerritoriesCreateManyEmployeesInputEnvelope";
import { EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput } from "../inputs/EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput";
import { EmployeeTerritoriesCreateWithoutEmployeesInput } from "../inputs/EmployeeTerritoriesCreateWithoutEmployeesInput";
import { EmployeeTerritoriesWhereUniqueInput } from "../inputs/EmployeeTerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeeTerritoriesCreateNestedManyWithoutEmployeesInput", {
  isAbstract: true
})
export class EmployeeTerritoriesCreateNestedManyWithoutEmployeesInput {
  @TypeGraphQL.Field(_type => [EmployeeTerritoriesCreateWithoutEmployeesInput], {
    nullable: true
  })
  create?: EmployeeTerritoriesCreateWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput], {
    nullable: true
  })
  connectOrCreate?: EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput[] | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesCreateManyEmployeesInputEnvelope, {
    nullable: true
  })
  createMany?: EmployeeTerritoriesCreateManyEmployeesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesWhereUniqueInput], {
    nullable: true
  })
  connect?: EmployeeTerritoriesWhereUniqueInput[] | undefined;
}
