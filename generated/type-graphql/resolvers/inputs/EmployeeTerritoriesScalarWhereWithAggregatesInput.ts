import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EmployeeTerritoriesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class EmployeeTerritoriesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EmployeeTerritoriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EmployeeTerritoriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EmployeeTerritoriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EmployeeTerritoriesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  EmployeeID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  TerritoryID?: StringWithAggregatesFilter | undefined;
}
