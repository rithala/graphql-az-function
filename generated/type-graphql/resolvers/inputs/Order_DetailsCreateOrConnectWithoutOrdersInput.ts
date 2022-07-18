import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsCreateWithoutOrdersInput } from "../inputs/Order_DetailsCreateWithoutOrdersInput";
import { Order_DetailsWhereUniqueInput } from "../inputs/Order_DetailsWhereUniqueInput";

@TypeGraphQL.InputType("Order_DetailsCreateOrConnectWithoutOrdersInput", {
  isAbstract: true
})
export class Order_DetailsCreateOrConnectWithoutOrdersInput {
  @TypeGraphQL.Field(_type => Order_DetailsWhereUniqueInput, {
    nullable: false
  })
  where!: Order_DetailsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_DetailsCreateWithoutOrdersInput, {
    nullable: false
  })
  create!: Order_DetailsCreateWithoutOrdersInput;
}
