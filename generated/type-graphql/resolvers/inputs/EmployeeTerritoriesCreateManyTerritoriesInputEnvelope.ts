import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesCreateManyTerritoriesInput } from "../inputs/EmployeeTerritoriesCreateManyTerritoriesInput";

@TypeGraphQL.InputType("EmployeeTerritoriesCreateManyTerritoriesInputEnvelope", {
  isAbstract: true
})
export class EmployeeTerritoriesCreateManyTerritoriesInputEnvelope {
  @TypeGraphQL.Field(_type => [EmployeeTerritoriesCreateManyTerritoriesInput], {
    nullable: false
  })
  data!: EmployeeTerritoriesCreateManyTerritoriesInput[];
}
