import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CustomerDemographicsCreateWithoutCustomerCustomerDemoInput", {
  isAbstract: true
})
export class CustomerDemographicsCreateWithoutCustomerCustomerDemoInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  CustomerTypeID!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CustomerDesc?: string | undefined;
}
