import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EmployeeTerritoriesOrderByWithAggregationInput } from "../../../inputs/EmployeeTerritoriesOrderByWithAggregationInput";
import { EmployeeTerritoriesScalarWhereWithAggregatesInput } from "../../../inputs/EmployeeTerritoriesScalarWhereWithAggregatesInput";
import { EmployeeTerritoriesWhereInput } from "../../../inputs/EmployeeTerritoriesWhereInput";
import { EmployeeTerritoriesScalarFieldEnum } from "../../../../enums/EmployeeTerritoriesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEmployeeTerritoriesArgs {
  @TypeGraphQL.Field(_type => EmployeeTerritoriesWhereInput, {
    nullable: true
  })
  where?: EmployeeTerritoriesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EmployeeTerritoriesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeeTerritoriesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"EmployeeID" | "TerritoryID">;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EmployeeTerritoriesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
