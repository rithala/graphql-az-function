import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomersCountAggregate } from "../outputs/CustomersCountAggregate";
import { CustomersMaxAggregate } from "../outputs/CustomersMaxAggregate";
import { CustomersMinAggregate } from "../outputs/CustomersMinAggregate";

@TypeGraphQL.ObjectType("CustomersGroupBy", {
  isAbstract: true
})
export class CustomersGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CustomerID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CompanyName!: string;

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

  @TypeGraphQL.Field(_type => CustomersCountAggregate, {
    nullable: true
  })
  _count!: CustomersCountAggregate | null;

  @TypeGraphQL.Field(_type => CustomersMinAggregate, {
    nullable: true
  })
  _min!: CustomersMinAggregate | null;

  @TypeGraphQL.Field(_type => CustomersMaxAggregate, {
    nullable: true
  })
  _max!: CustomersMaxAggregate | null;
}
