import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesCreateManyTerritoriesInputEnvelope } from "../inputs/EmployeeTerritoriesCreateManyTerritoriesInputEnvelope";
import { EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput } from "../inputs/EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput";
import { EmployeeTerritoriesCreateWithoutTerritoriesInput } from "../inputs/EmployeeTerritoriesCreateWithoutTerritoriesInput";
import { EmployeeTerritoriesWhereUniqueInput } from "../inputs/EmployeeTerritoriesWhereUniqueInput";

@TypeGraphQL.InputType("EmployeeTerritoriesCreateNestedManyWithoutTerritoriesInput", {
  isAbstract: true
})
export class EmployeeTerritoriesCreateNestedManyWithoutTerritoriesInput {
  @TypeGraphQL.Field(_type => [EmployeeTerritoriesCreateWithoutTerritoriesInput], {
    nullable: true
  })
  create?: EmployeeTerritoriesCreateWithoutTerritoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput], {
    nullable: true
  })
  connectOrCreate?: EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesCreateManyTerritoriesInputEnvelope, {
    nullable: true
  })
  createMany?: EmployeeTerritoriesCreateManyTerritoriesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesWhereUniqueInput], {
    nullable: true
  })
  connect?: EmployeeTerritoriesWhereUniqueInput[] | undefined;
}
