import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesAvgOrderByAggregateInput } from "../inputs/EmployeesAvgOrderByAggregateInput";
import { EmployeesCountOrderByAggregateInput } from "../inputs/EmployeesCountOrderByAggregateInput";
import { EmployeesMaxOrderByAggregateInput } from "../inputs/EmployeesMaxOrderByAggregateInput";
import { EmployeesMinOrderByAggregateInput } from "../inputs/EmployeesMinOrderByAggregateInput";
import { EmployeesSumOrderByAggregateInput } from "../inputs/EmployeesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EmployeesOrderByWithAggregationInput", {
  isAbstract: true
})
export class EmployeesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  EmployeeID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  LastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  FirstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  TitleOfCourtesy?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  BirthDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  HireDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Address?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  City?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Region?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  PostalCode?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Country?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  HomePhone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Extension?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Photo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Notes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ReportsTo?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  PhotoPath?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EmployeesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EmployeesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EmployeesAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EmployeesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EmployeesMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EmployeesSumOrderByAggregateInput | undefined;
}
