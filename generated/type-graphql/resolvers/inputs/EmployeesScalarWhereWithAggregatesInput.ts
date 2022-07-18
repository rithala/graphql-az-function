import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesNullableWithAggregatesFilter } from "../inputs/BytesNullableWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EmployeesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class EmployeesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EmployeesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EmployeesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EmployeesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EmployeesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  EmployeeID?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  LastName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  FirstName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Title?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  TitleOfCourtesy?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  BirthDate?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  HireDate?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Address?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  City?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Region?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  PostalCode?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Country?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  HomePhone?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Extension?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableWithAggregatesFilter, {
    nullable: true
  })
  Photo?: BytesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  Notes?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  ReportsTo?: IntNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  PhotoPath?: StringNullableWithAggregatesFilter | undefined;
}
