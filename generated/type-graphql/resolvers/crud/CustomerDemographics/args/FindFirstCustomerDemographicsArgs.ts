import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerDemographicsOrderByWithRelationInput } from "../../../inputs/CustomerDemographicsOrderByWithRelationInput";
import { CustomerDemographicsWhereInput } from "../../../inputs/CustomerDemographicsWhereInput";
import { CustomerDemographicsWhereUniqueInput } from "../../../inputs/CustomerDemographicsWhereUniqueInput";
import { CustomerDemographicsScalarFieldEnum } from "../../../../enums/CustomerDemographicsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCustomerDemographicsArgs {
  @TypeGraphQL.Field(_type => CustomerDemographicsWhereInput, {
    nullable: true
  })
  where?: CustomerDemographicsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerDemographicsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CustomerDemographicsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerDemographicsWhereUniqueInput, {
    nullable: true
  })
  cursor?: CustomerDemographicsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CustomerDemographicsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"CustomerTypeID" | "CustomerDesc"> | undefined;
}
