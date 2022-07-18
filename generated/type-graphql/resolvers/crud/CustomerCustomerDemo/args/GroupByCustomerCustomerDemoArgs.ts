import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerCustomerDemoOrderByWithAggregationInput } from "../../../inputs/CustomerCustomerDemoOrderByWithAggregationInput";
import { CustomerCustomerDemoScalarWhereWithAggregatesInput } from "../../../inputs/CustomerCustomerDemoScalarWhereWithAggregatesInput";
import { CustomerCustomerDemoWhereInput } from "../../../inputs/CustomerCustomerDemoWhereInput";
import { CustomerCustomerDemoScalarFieldEnum } from "../../../../enums/CustomerCustomerDemoScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomerCustomerDemoArgs {
  @TypeGraphQL.Field(_type => CustomerCustomerDemoWhereInput, {
    nullable: true
  })
  where?: CustomerCustomerDemoWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CustomerCustomerDemoOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"CustomerID" | "CustomerTypeID">;

  @TypeGraphQL.Field(_type => CustomerCustomerDemoScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CustomerCustomerDemoScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
