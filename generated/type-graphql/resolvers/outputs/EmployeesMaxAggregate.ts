import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("EmployeesMaxAggregate", {
  isAbstract: true
})
export class EmployeesMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  EmployeeID!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  LastName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FirstName!: string | null;

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
}
