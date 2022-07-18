import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCustomerDemoCountAggregate } from "../outputs/CustomerCustomerDemoCountAggregate";
import { CustomerCustomerDemoMaxAggregate } from "../outputs/CustomerCustomerDemoMaxAggregate";
import { CustomerCustomerDemoMinAggregate } from "../outputs/CustomerCustomerDemoMinAggregate";

@TypeGraphQL.ObjectType("AggregateCustomerCustomerDemo", {
  isAbstract: true
})
export class AggregateCustomerCustomerDemo {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoCountAggregate, {
    nullable: true
  })
  _count!: CustomerCustomerDemoCountAggregate | null;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoMinAggregate, {
    nullable: true
  })
  _min!: CustomerCustomerDemoMinAggregate | null;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoMaxAggregate, {
    nullable: true
  })
  _max!: CustomerCustomerDemoMaxAggregate | null;
}
