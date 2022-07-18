import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsOrderIDProductIDCompoundUniqueInput } from "../inputs/Order_DetailsOrderIDProductIDCompoundUniqueInput";

@TypeGraphQL.InputType("Order_DetailsWhereUniqueInput", {
  isAbstract: true
})
export class Order_DetailsWhereUniqueInput {
  @TypeGraphQL.Field(_type => Order_DetailsOrderIDProductIDCompoundUniqueInput, {
    nullable: true
  })
  OrderID_ProductID?: Order_DetailsOrderIDProductIDCompoundUniqueInput | undefined;
}
