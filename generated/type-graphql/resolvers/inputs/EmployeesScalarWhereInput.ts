import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("EmployeesScalarWhereInput", {
  isAbstract: true
})
export class EmployeesScalarWhereInput {
  @TypeGraphQL.Field(_type => [EmployeesScalarWhereInput], {
    nullable: true
  })
  AND?: EmployeesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeesScalarWhereInput], {
    nullable: true
  })
  OR?: EmployeesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EmployeesScalarWhereInput], {
    nullable: true
  })
  NOT?: EmployeesScalarWhereInput[] | undefined;

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
}
