import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeeTerritoriesOrderByRelationAggregateInput } from "../inputs/EmployeeTerritoriesOrderByRelationAggregateInput";
import { EmployeesOrderByRelationAggregateInput } from "../inputs/EmployeesOrderByRelationAggregateInput";
import { OrdersOrderByRelationAggregateInput } from "../inputs/OrdersOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EmployeesOrderByWithRelationInput", {
  isAbstract: true
})
export class EmployeesOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => EmployeesOrderByWithRelationInput, {
    nullable: true
  })
  Employees?: EmployeesOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EmployeesOrderByRelationAggregateInput, {
    nullable: true
  })
  other_Employees?: EmployeesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesOrderByRelationAggregateInput, {
    nullable: true
  })
  EmployeeTerritories?: EmployeeTerritoriesOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrdersOrderByRelationAggregateInput, {
    nullable: true
  })
  Orders?: OrdersOrderByRelationAggregateInput | undefined;
}
