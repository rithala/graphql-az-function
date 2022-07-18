import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesScalarWhereInput } from "../inputs/EmployeeTerritoriesScalarWhereInput";
import { EmployeeTerritoriesUpdateManyMutationInput } from "../inputs/EmployeeTerritoriesUpdateManyMutationInput";

@TypeGraphQL.InputType("EmployeeTerritoriesUpdateManyWithWhereWithoutTerritoriesInput", {
  isAbstract: true
})
export class EmployeeTerritoriesUpdateManyWithWhereWithoutTerritoriesInput {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesScalarWhereInput, {
    nullable: false
  })
  where!: EmployeeTerritoriesScalarWhereInput;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesUpdateManyMutationInput, {
    nullable: false
  })
  data!: EmployeeTerritoriesUpdateManyMutationInput;
}
