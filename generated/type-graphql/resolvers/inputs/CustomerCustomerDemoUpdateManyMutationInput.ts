import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("CustomerCustomerDemoUpdateManyMutationInput", {
  isAbstract: true
})
export class CustomerCustomerDemoUpdateManyMutationInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  DoNotUseThisInputType!: string;
}
