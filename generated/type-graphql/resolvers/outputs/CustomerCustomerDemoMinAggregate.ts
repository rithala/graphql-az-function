import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CustomerCustomerDemoMinAggregate", {
  isAbstract: true
})
export class CustomerCustomerDemoMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CustomerID!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CustomerTypeID!: string | null;
}
