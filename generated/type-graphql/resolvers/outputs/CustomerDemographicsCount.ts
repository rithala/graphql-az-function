import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CustomerDemographicsCount", {
  isAbstract: true
})
export class CustomerDemographicsCount {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  CustomerCustomerDemo!: number;
}
