import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuppliersAvgAggregate } from "../outputs/SuppliersAvgAggregate";
import { SuppliersCountAggregate } from "../outputs/SuppliersCountAggregate";
import { SuppliersMaxAggregate } from "../outputs/SuppliersMaxAggregate";
import { SuppliersMinAggregate } from "../outputs/SuppliersMinAggregate";
import { SuppliersSumAggregate } from "../outputs/SuppliersSumAggregate";

@TypeGraphQL.ObjectType("SuppliersGroupBy", {
  isAbstract: true
})
export class SuppliersGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  SupplierID!: number;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  HomePage!: string | null;

  @TypeGraphQL.Field(_type => SuppliersCountAggregate, {
    nullable: true
  })
  _count!: SuppliersCountAggregate | null;

  @TypeGraphQL.Field(_type => SuppliersAvgAggregate, {
    nullable: true
  })
  _avg!: SuppliersAvgAggregate | null;

  @TypeGraphQL.Field(_type => SuppliersSumAggregate, {
    nullable: true
  })
  _sum!: SuppliersSumAggregate | null;

  @TypeGraphQL.Field(_type => SuppliersMinAggregate, {
    nullable: true
  })
  _min!: SuppliersMinAggregate | null;

  @TypeGraphQL.Field(_type => SuppliersMaxAggregate, {
    nullable: true
  })
  _max!: SuppliersMaxAggregate | null;
}
