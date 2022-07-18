import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateManySuppliersInputEnvelope } from "../inputs/ProductsCreateManySuppliersInputEnvelope";
import { ProductsCreateOrConnectWithoutSuppliersInput } from "../inputs/ProductsCreateOrConnectWithoutSuppliersInput";
import { ProductsCreateWithoutSuppliersInput } from "../inputs/ProductsCreateWithoutSuppliersInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsCreateNestedManyWithoutSuppliersInput", {
  isAbstract: true
})
export class ProductsCreateNestedManyWithoutSuppliersInput {
  @TypeGraphQL.Field(_type => [ProductsCreateWithoutSuppliersInput], {
    nullable: true
  })
  create?: ProductsCreateWithoutSuppliersInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductsCreateOrConnectWithoutSuppliersInput], {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutSuppliersInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateManySuppliersInputEnvelope, {
    nullable: true
  })
  createMany?: ProductsCreateManySuppliersInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductsWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput[] | undefined;
}
