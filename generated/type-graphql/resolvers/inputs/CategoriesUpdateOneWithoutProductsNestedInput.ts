import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoriesCreateOrConnectWithoutProductsInput } from "../inputs/CategoriesCreateOrConnectWithoutProductsInput";
import { CategoriesCreateWithoutProductsInput } from "../inputs/CategoriesCreateWithoutProductsInput";
import { CategoriesUpdateWithoutProductsInput } from "../inputs/CategoriesUpdateWithoutProductsInput";
import { CategoriesUpsertWithoutProductsInput } from "../inputs/CategoriesUpsertWithoutProductsInput";
import { CategoriesWhereUniqueInput } from "../inputs/CategoriesWhereUniqueInput";

@TypeGraphQL.InputType("CategoriesUpdateOneWithoutProductsNestedInput", {
  isAbstract: true
})
export class CategoriesUpdateOneWithoutProductsNestedInput {
  @TypeGraphQL.Field(_type => CategoriesCreateWithoutProductsInput, {
    nullable: true
  })
  create?: CategoriesCreateWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesCreateOrConnectWithoutProductsInput, {
    nullable: true
  })
  connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesUpsertWithoutProductsInput, {
    nullable: true
  })
  upsert?: CategoriesUpsertWithoutProductsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CategoriesWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoriesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoriesUpdateWithoutProductsInput, {
    nullable: true
  })
  update?: CategoriesUpdateWithoutProductsInput | undefined;
}
