import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsAvgAggregate } from "../outputs/Order_DetailsAvgAggregate";
import { Order_DetailsCountAggregate } from "../outputs/Order_DetailsCountAggregate";
import { Order_DetailsMaxAggregate } from "../outputs/Order_DetailsMaxAggregate";
import { Order_DetailsMinAggregate } from "../outputs/Order_DetailsMinAggregate";
import { Order_DetailsSumAggregate } from "../outputs/Order_DetailsSumAggregate";

@TypeGraphQL.ObjectType("AggregateOrder_Details", {
  isAbstract: true
})
export class AggregateOrder_Details {
  @TypeGraphQL.Field(_type => Order_DetailsCountAggregate, {
    nullable: true
  })
  _count!: Order_DetailsCountAggregate | null;

  @TypeGraphQL.Field(_type => Order_DetailsAvgAggregate, {
    nullable: true
  })
  _avg!: Order_DetailsAvgAggregate | null;

  @TypeGraphQL.Field(_type => Order_DetailsSumAggregate, {
    nullable: true
  })
  _sum!: Order_DetailsSumAggregate | null;

  @TypeGraphQL.Field(_type => Order_DetailsMinAggregate, {
    nullable: true
  })
  _min!: Order_DetailsMinAggregate | null;

  @TypeGraphQL.Field(_type => Order_DetailsMaxAggregate, {
    nullable: true
  })
  _max!: Order_DetailsMaxAggregate | null;
}
