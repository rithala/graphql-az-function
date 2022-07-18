import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ShippersOrderByWithAggregationInput } from "../../../inputs/ShippersOrderByWithAggregationInput";
import { ShippersScalarWhereWithAggregatesInput } from "../../../inputs/ShippersScalarWhereWithAggregatesInput";
import { ShippersWhereInput } from "../../../inputs/ShippersWhereInput";
import { ShippersScalarFieldEnum } from "../../../../enums/ShippersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByShippersArgs {
  @TypeGraphQL.Field(_type => ShippersWhereInput, {
    nullable: true
  })
  where?: ShippersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ShippersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ShippersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ShippersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"ShipperID" | "CompanyName" | "Phone">;

  @TypeGraphQL.Field(_type => ShippersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ShippersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
