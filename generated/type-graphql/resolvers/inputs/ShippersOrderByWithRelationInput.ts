import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrdersOrderByRelationAggregateInput } from "../inputs/OrdersOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ShippersOrderByWithRelationInput", {
  isAbstract: true
})
export class ShippersOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ShipperID?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  CompanyName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  Phone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OrdersOrderByRelationAggregateInput, {
    nullable: true
  })
  Orders?: OrdersOrderByRelationAggregateInput | undefined;
}
