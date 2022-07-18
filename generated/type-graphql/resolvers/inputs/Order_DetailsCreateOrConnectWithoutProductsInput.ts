import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsCreateWithoutProductsInput } from "../inputs/Order_DetailsCreateWithoutProductsInput";
import { Order_DetailsWhereUniqueInput } from "../inputs/Order_DetailsWhereUniqueInput";

@TypeGraphQL.InputType("Order_DetailsCreateOrConnectWithoutProductsInput", {
  isAbstract: true
})
export class Order_DetailsCreateOrConnectWithoutProductsInput {
  @TypeGraphQL.Field(_type => Order_DetailsWhereUniqueInput, {
    nullable: false
  })
  where!: Order_DetailsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_DetailsCreateWithoutProductsInput, {
    nullable: false
  })
  create!: Order_DetailsCreateWithoutProductsInput;
}
