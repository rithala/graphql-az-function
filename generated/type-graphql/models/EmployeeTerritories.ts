import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Employees } from "../models/Employees";
import { Territories } from "../models/Territories";

@TypeGraphQL.ObjectType("EmployeeTerritories", {
  isAbstract: true
})
export class EmployeeTerritories {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  EmployeeID!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  TerritoryID!: string;

  Employees?: Employees;

  Territories?: Territories;
}
