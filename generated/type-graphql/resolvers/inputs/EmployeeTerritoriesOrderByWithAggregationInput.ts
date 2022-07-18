import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesAvgOrderByAggregateInput } from "../inputs/EmployeeTerritoriesAvgOrderByAggregateInput";
import { EmployeeTerritoriesCountOrderByAggregateInput } from "../inputs/EmployeeTerritoriesCountOrderByAggregateInput";
import { EmployeeTerritoriesMaxOrderByAggregateInput } from "../inputs/EmployeeTerritoriesMaxOrderByAggregateInput";
import { EmployeeTerritoriesMinOrderByAggregateInput } from "../inputs/EmployeeTerritoriesMinOrderByAggregateInput";
import { EmployeeTerritoriesSumOrderByAggregateInput } from "../inputs/EmployeeTerritoriesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EmployeeTerritoriesOrderByWithAggregationInput", {
  isAbstract: true
})
export class EmployeeTerritoriesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  EmployeeID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TerritoryID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EmployeeTerritoriesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EmployeeTerritoriesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EmployeeTerritoriesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EmployeeTerritoriesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EmployeeTerritoriesSumOrderByAggregateInput | undefined;
}
