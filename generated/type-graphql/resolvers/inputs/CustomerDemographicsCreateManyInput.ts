import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CustomerDemographicsCreateManyInput", {
  isAbstract: true
})
export class CustomerDemographicsCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CustomerTypeID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CustomerDesc?: string | undefined;
}
