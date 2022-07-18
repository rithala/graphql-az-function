import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CustomerDemographicsMinAggregate", {
  isAbstract: true
})
export class CustomerDemographicsMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CustomerTypeID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CustomerDesc!: string | null;
}
