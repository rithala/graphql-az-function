import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EmployeeTerritoriesListRelationFilter } from "../inputs/EmployeeTerritoriesListRelationFilter";
import { EmployeesListRelationFilter } from "../inputs/EmployeesListRelationFilter";
import { EmployeesRelationFilter } from "../inputs/EmployeesRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { OrdersListRelationFilter } from "../inputs/OrdersListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("EmployeesWhereInput", {
  isAbstract: true
})
export class EmployeesWhereInput {
  @TypeGraphQL.Field(_type => [EmployeesWhereInput], {
    nullable: true
  })
  AND?: EmployeesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeesWhereInput], {
    nullable: true
  })
  OR?: EmployeesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeesWhereInput], {
    nullable: true
  })
  NOT?: EmployeesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  EmployeeID?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  LastName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  FirstName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  TitleOfCourtesy?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  BirthDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  HireDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Address?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  City?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Region?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  PostalCode?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Country?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  HomePhone?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Extension?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  Photo?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  Notes?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  ReportsTo?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  PhotoPath?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EmployeesRelationFilter, {
    nullable: true
  })
  Employees?: EmployeesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EmployeesListRelationFilter, {
    nullable: true
  })
  other_Employees?: EmployeesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EmployeeTerritoriesListRelationFilter, {
    nullable: true
  })
  EmployeeTerritories?: EmployeeTerritoriesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => OrdersListRelationFilter, {
    nullable: true
  })
  Orders?: OrdersListRelationFilter | undefined;
}
