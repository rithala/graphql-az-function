import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CategoriesMinAggregate", {
  isAbstract: true
})
export class CategoriesMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  CategoryID!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  CategoryName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Description!: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  Picture!: Buffer | null;
}
