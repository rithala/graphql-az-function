import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateOrConnectWithoutOther_EmployeesInput } from "../inputs/EmployeesCreateOrConnectWithoutOther_EmployeesInput";
import { EmployeesCreateWithoutOther_EmployeesInput } from "../inputs/EmployeesCreateWithoutOther_EmployeesInput";
import { EmployeesUpdateWithoutOther_EmployeesInput } from "../inputs/EmployeesUpdateWithoutOther_EmployeesInput";
import { EmployeesUpsertWithoutOther_EmployeesInput } from "../inputs/EmployeesUpsertWithoutOther_EmployeesInput";
import { EmployeesWhereUniqueInput } from "../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeesUpdateOneWithoutOther_EmployeesNestedInput", {
  isAbstract: true
})
export class EmployeesUpdateOneWithoutOther_EmployeesNestedInput {
  @TypeGraphQL.Field(_type => EmployeesCreateWithoutOther_EmployeesInput, {
    nullable: true
  })
  create?: EmployeesCreateWithoutOther_EmployeesInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesCreateOrConnectWithoutOther_EmployeesInput, {
    nullable: true
  })
  connectOrCreate?: EmployeesCreateOrConnectWithoutOther_EmployeesInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesUpsertWithoutOther_EmployeesInput, {
    nullable: true
  })
  upsert?: EmployeesUpsertWithoutOther_EmployeesInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => EmployeesWhereUniqueInput, {
    nullable: true
  })
  connect?: EmployeesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesUpdateWithoutOther_EmployeesInput, {
    nullable: true
  })
  update?: EmployeesUpdateWithoutOther_EmployeesInput | undefined;
}
