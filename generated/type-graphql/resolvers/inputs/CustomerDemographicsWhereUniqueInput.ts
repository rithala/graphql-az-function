import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CustomerDemographicsWhereUniqueInput", {
  isAbstract: true
})
export class CustomerDemographicsWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CustomerTypeID?: string | undefined;
}
