import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SuppliersAvgAggregate } from "../outputs/SuppliersAvgAggregate";
import { SuppliersCountAggregate } from "../outputs/SuppliersCountAggregate";
import { SuppliersMaxAggregate } from "../outputs/SuppliersMaxAggregate";
import { SuppliersMinAggregate } from "../outputs/SuppliersMinAggregate";
import { SuppliersSumAggregate } from "../outputs/SuppliersSumAggregate";

@TypeGraphQL.ObjectType("AggregateSuppliers", {
  isAbstract: true
})
export class AggregateSuppliers {
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
