import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsWhereInput } from "../inputs/Order_DetailsWhereInput";

@TypeGraphQL.InputType("Order_DetailsListRelationFilter", {
  isAbstract: true
})
export class Order_DetailsListRelationFilter {
  @TypeGraphQL.Field(_type => Order_DetailsWhereInput, {
    nullable: true
  })
  every?: Order_DetailsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsWhereInput, {
    nullable: true
  })
  some?: Order_DetailsWhereInput | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsWhereInput, {
    nullable: true
  })
  none?: Order_DetailsWhereInput | undefined;
}
