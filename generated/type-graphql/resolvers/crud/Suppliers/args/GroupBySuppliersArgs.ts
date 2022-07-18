import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuppliersOrderByWithAggregationInput } from "../../../inputs/SuppliersOrderByWithAggregationInput";
import { SuppliersScalarWhereWithAggregatesInput } from "../../../inputs/SuppliersScalarWhereWithAggregatesInput";
import { SuppliersWhereInput } from "../../../inputs/SuppliersWhereInput";
import { SuppliersScalarFieldEnum } from "../../../../enums/SuppliersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySuppliersArgs {
  @TypeGraphQL.Field(_type => SuppliersWhereInput, {
    nullable: true
  })
  where?: SuppliersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SuppliersOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SuppliersOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SuppliersScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"SupplierID" | "CompanyName" | "ContactName" | "ContactTitle" | "Address" | "City" | "Region" | "PostalCode" | "Country" | "Phone" | "Fax" | "HomePage">;

  @TypeGraphQL.Field(_type => SuppliersScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SuppliersScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
