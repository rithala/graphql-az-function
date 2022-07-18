import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_DetailsCreateInput } from "../../../inputs/Order_DetailsCreateInput";
import { Order_DetailsUpdateInput } from "../../../inputs/Order_DetailsUpdateInput";
import { Order_DetailsWhereUniqueInput } from "../../../inputs/Order_DetailsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneOrder_DetailsArgs {
  @TypeGraphQL.Field(_type => Order_DetailsWhereUniqueInput, {
    nullable: false
  })
  where!: Order_DetailsWhereUniqueInput;

  @TypeGraphQL.Field(_type => Order_DetailsCreateInput, {
    nullable: false
  })
  create!: Order_DetailsCreateInput;

  @TypeGraphQL.Field(_type => Order_DetailsUpdateInput, {
    nullable: false
  })
  update!: Order_DetailsUpdateInput;
}
