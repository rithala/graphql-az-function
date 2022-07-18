import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EmployeeTerritoriesScalarWhereInput", {
  isAbstract: true
})
export class EmployeeTerritoriesScalarWhereInput {
  @TypeGraphQL.Field(_type => [EmployeeTerritoriesScalarWhereInput], {
    nullable: true
  })
  AND?: EmployeeTerritoriesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesScalarWhereInput], {
    nullable: true
  })
  OR?: EmployeeTerritoriesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesScalarWhereInput], {
    nullable: true
  })
  NOT?: EmployeeTerritoriesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  EmployeeID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  TerritoryID?: StringFilter | undefined;
}
