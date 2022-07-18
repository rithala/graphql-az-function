import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateManyCategoriesInputEnvelope } from "../inputs/ProductsCreateManyCategoriesInputEnvelope";
import { ProductsCreateOrConnectWithoutCategoriesInput } from "../inputs/ProductsCreateOrConnectWithoutCategoriesInput";
import { ProductsCreateWithoutCategoriesInput } from "../inputs/ProductsCreateWithoutCategoriesInput";
import { ProductsScalarWhereInput } from "../inputs/ProductsScalarWhereInput";
import { ProductsUpdateManyWithWhereWithoutCategoriesInput } from "../inputs/ProductsUpdateManyWithWhereWithoutCategoriesInput";
import { ProductsUpdateWithWhereUniqueWithoutCategoriesInput } from "../inputs/ProductsUpdateWithWhereUniqueWithoutCategoriesInput";
import { ProductsUpsertWithWhereUniqueWithoutCategoriesInput } from "../inputs/ProductsUpsertWithWhereUniqueWithoutCategoriesInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateManyWithoutCategoriesNestedInput", {
  isAbstract: true
})
export class ProductsUpdateManyWithoutCategoriesNestedInput {
  @TypeGraphQL.Field(_type => [ProductsCreateWithoutCategoriesInput], {
    nullable: true
  })
  create?: ProductsCreateWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsCreateOrConnectWithoutCategoriesInput], {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsUpsertWithWhereUniqueWithoutCategoriesInput], {
    nullable: true
  })
  upsert?: ProductsUpsertWithWhereUniqueWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateManyCategoriesInputEnvelope, {
    nullable: true
  })
  createMany?: ProductsCreateManyCategoriesInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereUniqueInput], {
    nullable: true
  })
  set?: ProductsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProductsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereUniqueInput], {
    nullable: true
  })
  delete?: ProductsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsUpdateWithWhereUniqueWithoutCategoriesInput], {
    nullable: true
  })
  update?: ProductsUpdateWithWhereUniqueWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsUpdateManyWithWhereWithoutCategoriesInput], {
    nullable: true
  })
  updateMany?: ProductsUpdateManyWithWhereWithoutCategoriesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductsScalarWhereInput[] | undefined;
}
