import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EmployeesAvgAggregate } from "../outputs/EmployeesAvgAggregate";
import { EmployeesCountAggregate } from "../outputs/EmployeesCountAggregate";
import { EmployeesMaxAggregate } from "../outputs/EmployeesMaxAggregate";
import { EmployeesMinAggregate } from "../outputs/EmployeesMinAggregate";
import { EmployeesSumAggregate } from "../outputs/EmployeesSumAggregate";

@TypeGraphQL.ObjectType("EmployeesGroupBy", {
  isAbstract: true
})
export class EmployeesGroupBy {
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
  Title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  TitleOfCourtesy!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  BirthDate!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  HireDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Address!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  City!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Region!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PostalCode!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Country!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HomePhone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Extension!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  Photo!: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Notes!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  ReportsTo!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  PhotoPath!: string | null;

  @TypeGraphQL.Field(_type => EmployeesCountAggregate, {
    nullable: true
  })
  _count!: EmployeesCountAggregate | null;

  @TypeGraphQL.Field(_type => EmployeesAvgAggregate, {
    nullable: true
  })
  _avg!: EmployeesAvgAggregate | null;

  @TypeGraphQL.Field(_type => EmployeesSumAggregate, {
    nullable: true
  })
  _sum!: EmployeesSumAggregate | null;

  @TypeGraphQL.Field(_type => EmployeesMinAggregate, {
    nullable: true
  })
  _min!: EmployeesMinAggregate | null;

  @TypeGraphQL.Field(_type => EmployeesMaxAggregate, {
    nullable: true
  })
  _max!: EmployeesMaxAggregate | null;
}
