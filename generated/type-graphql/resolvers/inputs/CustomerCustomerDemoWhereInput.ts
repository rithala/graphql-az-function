import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerDemographicsRelationFilter } from "../inputs/CustomerDemographicsRelationFilter";
import { CustomersRelationFilter } from "../inputs/CustomersRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CustomerCustomerDemoWhereInput", {
  isAbstract: true
})
export class CustomerCustomerDemoWhereInput {
  @TypeGraphQL.Field(_type => [CustomerCustomerDemoWhereInput], {
    nullable: true
  })
  AND?: CustomerCustomerDemoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoWhereInput], {
    nullable: true
  })
  OR?: CustomerCustomerDemoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoWhereInput], {
    nullable: true
  })
  NOT?: CustomerCustomerDemoWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  CustomerID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  CustomerTypeID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CustomersRelationFilter, {
    nullable: true
  })
  Customers?: CustomersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => CustomerDemographicsRelationFilter, {
    nullable: true
  })
  CustomerDemographics?: CustomerDemographicsRelationFilter | undefined;
}
