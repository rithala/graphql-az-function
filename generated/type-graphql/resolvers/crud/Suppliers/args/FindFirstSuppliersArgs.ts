import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SuppliersOrderByWithRelationInput } from "../../../inputs/SuppliersOrderByWithRelationInput";
import { SuppliersWhereInput } from "../../../inputs/SuppliersWhereInput";
import { SuppliersWhereUniqueInput } from "../../../inputs/SuppliersWhereUniqueInput";
import { SuppliersScalarFieldEnum } from "../../../../enums/SuppliersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSuppliersArgs {
  @TypeGraphQL.Field(_type => SuppliersWhereInput, {
    nullable: true
  })
  where?: SuppliersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SuppliersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SuppliersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SuppliersWhereUniqueInput, {
    nullable: true
  })
  cursor?: SuppliersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SuppliersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"SupplierID" | "CompanyName" | "ContactName" | "ContactTitle" | "Address" | "City" | "Region" | "PostalCode" | "Country" | "Phone" | "Fax" | "HomePage"> | undefined;
}
