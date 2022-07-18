import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CustomerCustomerDemoScalarWhereInput", {
  isAbstract: true
})
export class CustomerCustomerDemoScalarWhereInput {
  @TypeGraphQL.Field(_type => [CustomerCustomerDemoScalarWhereInput], {
    nullable: true
  })
  AND?: CustomerCustomerDemoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoScalarWhereInput], {
    nullable: true
  })
  OR?: CustomerCustomerDemoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerCustomerDemoScalarWhereInput], {
    nullable: true
  })
  NOT?: CustomerCustomerDemoScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  CustomerID?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  CustomerTypeID?: StringFilter | undefined;
}
