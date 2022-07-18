import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsCreateManyProductsInputEnvelope } from "../inputs/Order_DetailsCreateManyProductsInputEnvelope";
import { Order_DetailsCreateOrConnectWithoutProductsInput } from "../inputs/Order_DetailsCreateOrConnectWithoutProductsInput";
import { Order_DetailsCreateWithoutProductsInput } from "../inputs/Order_DetailsCreateWithoutProductsInput";
import { Order_DetailsWhereUniqueInput } from "../inputs/Order_DetailsWhereUniqueInput";

@TypeGraphQL.InputType("Order_DetailsCreateNestedManyWithoutProductsInput", {
  isAbstract: true
})
export class Order_DetailsCreateNestedManyWithoutProductsInput {
  @TypeGraphQL.Field(_type => [Order_DetailsCreateWithoutProductsInput], {
    nullable: true
  })
  create?: Order_DetailsCreateWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsCreateOrConnectWithoutProductsInput], {
    nullable: true
  })
  connectOrCreate?: Order_DetailsCreateOrConnectWithoutProductsInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsCreateManyProductsInputEnvelope, {
    nullable: true
  })
  createMany?: Order_DetailsCreateManyProductsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_DetailsWhereUniqueInput[] | undefined;
}
