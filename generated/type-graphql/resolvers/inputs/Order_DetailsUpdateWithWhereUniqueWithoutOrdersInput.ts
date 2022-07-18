import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsUpdateWithoutOrdersInput } from "../inputs/Order_DetailsUpdateWithoutOrdersInput";
import { Order_DetailsWhereUniqueInput } from "../inputs/Order_DetailsWhereUniqueInput";

@TypeGraphQL.InputType("Order_DetailsUpdateWithWhereUniqueWithoutOrdersInput", {
  isAbstract: true
})
export class Order_DetailsUpdateWithWhereUniqueWithoutOrdersInput {
  @TypeGraphQL.Field(_type => Order_DetailsWhereUniqueInput, {
    nullable: false
  })
  where!: Order_DetailsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_DetailsUpdateWithoutOrdersInput, {
    nullable: false
  })
  data!: Order_DetailsUpdateWithoutOrdersInput;
}
