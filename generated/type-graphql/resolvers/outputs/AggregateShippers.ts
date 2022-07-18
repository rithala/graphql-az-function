import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ShippersAvgAggregate } from "../outputs/ShippersAvgAggregate";
import { ShippersCountAggregate } from "../outputs/ShippersCountAggregate";
import { ShippersMaxAggregate } from "../outputs/ShippersMaxAggregate";
import { ShippersMinAggregate } from "../outputs/ShippersMinAggregate";
import { ShippersSumAggregate } from "../outputs/ShippersSumAggregate";

@TypeGraphQL.ObjectType("AggregateShippers", {
  isAbstract: true
})
export class AggregateShippers {
  @TypeGraphQL.Field(_type => ShippersCountAggregate, {
    nullable: true
  })
  _count!: ShippersCountAggregate | null;

  @TypeGraphQL.Field(_type => ShippersAvgAggregate, {
    nullable: true
  })
  _avg!: ShippersAvgAggregate | null;

  @TypeGraphQL.Field(_type => ShippersSumAggregate, {
    nullable: true
  })
  _sum!: ShippersSumAggregate | null;

  @TypeGraphQL.Field(_type => ShippersMinAggregate, {
    nullable: true
  })
  _min!: ShippersMinAggregate | null;

  @TypeGraphQL.Field(_type => ShippersMaxAggregate, {
    nullable: true
  })
  _max!: ShippersMaxAggregate | null;
}
