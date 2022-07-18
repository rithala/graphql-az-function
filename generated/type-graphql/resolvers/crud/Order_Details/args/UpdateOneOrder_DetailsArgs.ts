import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_DetailsUpdateInput } from "../../../inputs/Order_DetailsUpdateInput";
import { Order_DetailsWhereUniqueInput } from "../../../inputs/Order_DetailsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneOrder_DetailsArgs {
  @TypeGraphQL.Field(_type => Order_DetailsUpdateInput, {
    nullable: false
  })
  data!: Order_DetailsUpdateInput;

  @TypeGraphQL.Field(_type => Order_DetailsWhereUniqueInput, {
    nullable: false
  })
  where!: Order_DetailsWhereUniqueInput;
}
