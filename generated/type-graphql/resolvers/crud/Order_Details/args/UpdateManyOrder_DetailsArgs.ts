import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_DetailsUpdateManyMutationInput } from "../../../inputs/Order_DetailsUpdateManyMutationInput";
import { Order_DetailsWhereInput } from "../../../inputs/Order_DetailsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrder_DetailsArgs {
  @TypeGraphQL.Field(_type => Order_DetailsUpdateManyMutationInput, {
    nullable: false
  })
  data!: Order_DetailsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Order_DetailsWhereInput, {
    nullable: true
  })
  where?: Order_DetailsWhereInput | undefined;
}
