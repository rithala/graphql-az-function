import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateManySuppliersInputEnvelope } from "../inputs/ProductsCreateManySuppliersInputEnvelope";
import { ProductsCreateOrConnectWithoutSuppliersInput } from "../inputs/ProductsCreateOrConnectWithoutSuppliersInput";
import { ProductsCreateWithoutSuppliersInput } from "../inputs/ProductsCreateWithoutSuppliersInput";
import { ProductsScalarWhereInput } from "../inputs/ProductsScalarWhereInput";
import { ProductsUpdateManyWithWhereWithoutSuppliersInput } from "../inputs/ProductsUpdateManyWithWhereWithoutSuppliersInput";
import { ProductsUpdateWithWhereUniqueWithoutSuppliersInput } from "../inputs/ProductsUpdateWithWhereUniqueWithoutSuppliersInput";
import { ProductsUpsertWithWhereUniqueWithoutSuppliersInput } from "../inputs/ProductsUpsertWithWhereUniqueWithoutSuppliersInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateManyWithoutSuppliersNestedInput", {
  isAbstract: true
})
export class ProductsUpdateManyWithoutSuppliersNestedInput {
  @TypeGraphQL.Field(_type => [ProductsCreateWithoutSuppliersInput], {
    nullable: true
  })
  create?: ProductsCreateWithoutSuppliersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsCreateOrConnectWithoutSuppliersInput], {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutSuppliersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsUpsertWithWhereUniqueWithoutSuppliersInput], {
    nullable: true
  })
  upsert?: ProductsUpsertWithWhereUniqueWithoutSuppliersInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateManySuppliersInputEnvelope, {
    nullable: true
  })
  createMany?: ProductsCreateManySuppliersInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [ProductsUpdateWithWhereUniqueWithoutSuppliersInput], {
    nullable: true
  })
  update?: ProductsUpdateWithWhereUniqueWithoutSuppliersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsUpdateManyWithWhereWithoutSuppliersInput], {
    nullable: true
  })
  updateMany?: ProductsUpdateManyWithWhereWithoutSuppliersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductsScalarWhereInput[] | undefined;
}
