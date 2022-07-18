import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_DetailsCreateManyOrdersInputEnvelope } from "../inputs/Order_DetailsCreateManyOrdersInputEnvelope";
import { Order_DetailsCreateOrConnectWithoutOrdersInput } from "../inputs/Order_DetailsCreateOrConnectWithoutOrdersInput";
import { Order_DetailsCreateWithoutOrdersInput } from "../inputs/Order_DetailsCreateWithoutOrdersInput";
import { Order_DetailsWhereUniqueInput } from "../inputs/Order_DetailsWhereUniqueInput";

@TypeGraphQL.InputType("Order_DetailsCreateNestedManyWithoutOrdersInput", {
  isAbstract: true
})
export class Order_DetailsCreateNestedManyWithoutOrdersInput {
  @TypeGraphQL.Field(_type => [Order_DetailsCreateWithoutOrdersInput], {
    nullable: true
  })
  create?: Order_DetailsCreateWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsCreateOrConnectWithoutOrdersInput], {
    nullable: true
  })
  connectOrCreate?: Order_DetailsCreateOrConnectWithoutOrdersInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_DetailsCreateManyOrdersInputEnvelope, {
    nullable: true
  })
  createMany?: Order_DetailsCreateManyOrdersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Order_DetailsWhereUniqueInput], {
    nullable: true
  })
  connect?: Order_DetailsWhereUniqueInput[] | undefined;
}
