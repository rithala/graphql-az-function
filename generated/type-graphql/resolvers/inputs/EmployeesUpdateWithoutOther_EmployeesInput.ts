import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesUpdateManyWithoutEmployeesNestedInput } from "../inputs/EmployeeTerritoriesUpdateManyWithoutEmployeesNestedInput";
import { EmployeesUpdateOneWithoutOther_EmployeesNestedInput } from "../inputs/EmployeesUpdateOneWithoutOther_EmployeesNestedInput";
import { NullableBytesFieldUpdateOperationsInput } from "../inputs/NullableBytesFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrdersUpdateManyWithoutEmployeesNestedInput } from "../inputs/OrdersUpdateManyWithoutEmployeesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("EmployeesUpdateWithoutOther_EmployeesInput", {
  isAbstract: true
})
export class EmployeesUpdateWithoutOther_EmployeesInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  LastName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  FirstName?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Title?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  TitleOfCourtesy?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  BirthDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  HireDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Address?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  City?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Region?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  PostalCode?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Country?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  HomePhone?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Extension?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableBytesFieldUpdateOperationsInput, {
    nullable: true
  })
  Photo?: NullableBytesFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  Notes?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  PhotoPath?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesUpdateOneWithoutOther_EmployeesNestedInput, {
    nullable: true
  })
  Employees?: EmployeesUpdateOneWithoutOther_EmployeesNestedInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesUpdateManyWithoutEmployeesNestedInput, {
    nullable: true
  })
  EmployeeTerritories?: EmployeeTerritoriesUpdateManyWithoutEmployeesNestedInput | undefined;

  @TypeGraphQL.Field(_type => OrdersUpdateManyWithoutEmployeesNestedInput, {
    nullable: true
  })
  Orders?: OrdersUpdateManyWithoutEmployeesNestedInput | undefined;
}
