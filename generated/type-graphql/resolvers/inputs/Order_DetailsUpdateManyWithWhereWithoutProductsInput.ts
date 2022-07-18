import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsScalarWhereInput } from "../inputs/Order_DetailsScalarWhereInput";
import { Order_DetailsUpdateManyMutationInput } from "../inputs/Order_DetailsUpdateManyMutationInput";

@TypeGraphQL.InputType("Order_DetailsUpdateManyWithWhereWithoutProductsInput", {
  isAbstract: true
})
export class Order_DetailsUpdateManyWithWhereWithoutProductsInput {
  @TypeGraphQL.Field(_type => Order_DetailsScalarWhereInput, {
    nullable: false
  })
  where!: Order_DetailsScalarWhereInput;

  @TypeGraphQL.Field(_type => Order_DetailsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_DetailsUpdateManyMutationInput;
}
