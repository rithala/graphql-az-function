import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { EmployeeTerritories } from "../models/EmployeeTerritories";
import { Orders } from "../models/Orders";
import { EmployeesCount } from "../resolvers/outputs/EmployeesCount";

@TypeGraphQL.ObjectType("Employees", {
  isAbstract: true
})
export class Employees {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  EmployeeID!: number;

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
  Title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TitleOfCourtesy?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  BirthDate?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  HireDate?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Address?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  City?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Region?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PostalCode?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Country?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HomePhone?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Extension?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  Photo?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Notes?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ReportsTo?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PhotoPath?: string | null;

  Employees?: Employees | null;

  other_Employees?: Employees[];

  EmployeeTerritories?: EmployeeTerritories[];

  Orders?: Orders[];

  @TypeGraphQL.Field(_type => EmployeesCount, {
    nullable: true
  })
  _count?: EmployeesCount | null;
}
