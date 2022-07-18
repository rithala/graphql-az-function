import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsUpdateWithoutProductsInput } from "../inputs/Order_DetailsUpdateWithoutProductsInput";
import { Order_DetailsWhereUniqueInput } from "../inputs/Order_DetailsWhereUniqueInput";

@TypeGraphQL.InputType("Order_DetailsUpdateWithWhereUniqueWithoutProductsInput", {
  isAbstract: true
})
export class Order_DetailsUpdateWithWhereUniqueWithoutProductsInput {
  @TypeGraphQL.Field(_type => Order_DetailsWhereUniqueInput, {
    nullable: false
  })
  where!: Order_DetailsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_DetailsUpdateWithoutProductsInput, {
    nullable: false
  })
  data!: Order_DetailsUpdateWithoutProductsInput;
}
