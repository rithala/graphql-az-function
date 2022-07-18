import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("EmployeeTerritoriesUpdateManyMutationInput", {
  isAbstract: true
})
export class EmployeeTerritoriesUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  DoNotUseThisInputType!: string;
}
