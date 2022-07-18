import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsCreateManyProductsInput } from "../inputs/Order_DetailsCreateManyProductsInput";

@TypeGraphQL.InputType("Order_DetailsCreateManyProductsInputEnvelope", {
  isAbstract: true
})
export class Order_DetailsCreateManyProductsInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_DetailsCreateManyProductsInput], {
    nullable: false
  })
  data!: Order_DetailsCreateManyProductsInput[];
}
