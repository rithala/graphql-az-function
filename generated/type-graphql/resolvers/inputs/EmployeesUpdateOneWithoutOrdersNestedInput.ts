import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesCreateOrConnectWithoutOrdersInput } from "../inputs/EmployeesCreateOrConnectWithoutOrdersInput";
import { EmployeesCreateWithoutOrdersInput } from "../inputs/EmployeesCreateWithoutOrdersInput";
import { EmployeesUpdateWithoutOrdersInput } from "../inputs/EmployeesUpdateWithoutOrdersInput";
import { EmployeesUpsertWithoutOrdersInput } from "../inputs/EmployeesUpsertWithoutOrdersInput";
import { EmployeesWhereUniqueInput } from "../inputs/EmployeesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeesUpdateOneWithoutOrdersNestedInput", {
  isAbstract: true
})
export class EmployeesUpdateOneWithoutOrdersNestedInput {
  @TypeGraphQL.Field(_type => EmployeesCreateWithoutOrdersInput, {
    nullable: true
  })
  create?: EmployeesCreateWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesCreateOrConnectWithoutOrdersInput, {
    nullable: true
  })
  connectOrCreate?: EmployeesCreateOrConnectWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesUpsertWithoutOrdersInput, {
    nullable: true
  })
  upsert?: EmployeesUpsertWithoutOrdersInput | undefined;

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

  @TypeGraphQL.Field(_type => EmployeesUpdateWithoutOrdersInput, {
    nullable: true
  })
  update?: EmployeesUpdateWithoutOrdersInput | undefined;
}
