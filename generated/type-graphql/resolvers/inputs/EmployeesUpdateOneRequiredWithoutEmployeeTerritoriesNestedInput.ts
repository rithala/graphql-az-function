import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateOrConnectWithoutEmployeeTerritoriesInput } from "../inputs/EmployeesCreateOrConnectWithoutEmployeeTerritoriesInput";
import { EmployeesCreateWithoutEmployeeTerritoriesInput } from "../inputs/EmployeesCreateWithoutEmployeeTerritoriesInput";
import { EmployeesUpdateWithoutEmployeeTerritoriesInput } from "../inputs/EmployeesUpdateWithoutEmployeeTerritoriesInput";
import { EmployeesUpsertWithoutEmployeeTerritoriesInput } from "../inputs/EmployeesUpsertWithoutEmployeeTerritoriesInput";
import { EmployeesWhereUniqueInput } from "../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput", {
  isAbstract: true
})
export class EmployeesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput {
  @TypeGraphQL.Field(_type => EmployeesCreateWithoutEmployeeTerritoriesInput, {
    nullable: true
  })
  create?: EmployeesCreateWithoutEmployeeTerritoriesInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesCreateOrConnectWithoutEmployeeTerritoriesInput, {
    nullable: true
  })
  connectOrCreate?: EmployeesCreateOrConnectWithoutEmployeeTerritoriesInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesUpsertWithoutEmployeeTerritoriesInput, {
    nullable: true
  })
  upsert?: EmployeesUpsertWithoutEmployeeTerritoriesInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesWhereUniqueInput, {
    nullable: true
  })
  connect?: EmployeesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesUpdateWithoutEmployeeTerritoriesInput, {
    nullable: true
  })
  update?: EmployeesUpdateWithoutEmployeeTerritoriesInput | undefined;
}
