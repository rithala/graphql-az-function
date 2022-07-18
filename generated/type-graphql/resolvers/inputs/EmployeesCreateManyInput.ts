import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("EmployeesCreateManyInput", {
  isAbstract: true
})
export class EmployeesCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  LastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FirstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TitleOfCourtesy?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  BirthDate?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  HireDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Address?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  City?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Region?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PostalCode?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Country?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HomePhone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Extension?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  Photo?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Notes?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ReportsTo?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PhotoPath?: string | undefined;
}
