import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesCreateOrConnectWithoutProductsInput } from "../inputs/CategoriesCreateOrConnectWithoutProductsInput";
import { CategoriesCreateWithoutProductsInput } from "../inputs/CategoriesCreateWithoutProductsInput";
import { CategoriesWhereUniqueInput } from "../inputs/CategoriesWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesCreateNestedOneWithoutProductsInput", {
  isAbstract: true
})
export class CategoriesCreateNestedOneWithoutProductsInput {
  @TypeGraphQL.Field(_type => CategoriesCreateWithoutProductsInput, {
    nullable: true
  })
  create?: CategoriesCreateWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesCreateOrConnectWithoutProductsInput, {
    nullable: true
  })
  connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoriesWhereUniqueInput | undefined;
}
