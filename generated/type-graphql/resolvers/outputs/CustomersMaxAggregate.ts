import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CustomersMaxAggregate", {
  isAbstract: true
})
export class CustomersMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CustomerID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CompanyName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ContactName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  ContactTitle!: string | null;

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
  Phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Fax!: string | null;
}
