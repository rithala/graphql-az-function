import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateManyCategoriesInputEnvelope } from "../inputs/ProductsCreateManyCategoriesInputEnvelope";
import { ProductsCreateOrConnectWithoutCategoriesInput } from "../inputs/ProductsCreateOrConnectWithoutCategoriesInput";
import { ProductsCreateWithoutCategoriesInput } from "../inputs/ProductsCreateWithoutCategoriesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedManyWithoutCategoriesInput", {
  isAbstract: true
})
export class ProductsCreateNestedManyWithoutCategoriesInput {
  @TypeGraphQL.Field(_type => [ProductsCreateWithoutCategoriesInput], {
    nullable: true
  })
  create?: ProductsCreateWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsCreateOrConnectWithoutCategoriesInput], {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateManyCategoriesInputEnvelope, {
    nullable: true
  })
  createMany?: ProductsCreateManyCategoriesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput[] | undefined;
}
