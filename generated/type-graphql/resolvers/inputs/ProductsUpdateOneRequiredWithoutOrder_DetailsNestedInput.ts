import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductsCreateOrConnectWithoutOrder_DetailsInput } from "../inputs/ProductsCreateOrConnectWithoutOrder_DetailsInput";
import { ProductsCreateWithoutOrder_DetailsInput } from "../inputs/ProductsCreateWithoutOrder_DetailsInput";
import { ProductsUpdateWithoutOrder_DetailsInput } from "../inputs/ProductsUpdateWithoutOrder_DetailsInput";
import { ProductsUpsertWithoutOrder_DetailsInput } from "../inputs/ProductsUpsertWithoutOrder_DetailsInput";
import { ProductsWhereUniqueInput } from "../inputs/ProductsWhereUniqueInput";

@TypeGraphQL.InputType("ProductsUpdateOneRequiredWithoutOrder_DetailsNestedInput", {
  isAbstract: true
})
export class ProductsUpdateOneRequiredWithoutOrder_DetailsNestedInput {
  @TypeGraphQL.Field(_type => ProductsCreateWithoutOrder_DetailsInput, {
    nullable: true
  })
  create?: ProductsCreateWithoutOrder_DetailsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsCreateOrConnectWithoutOrder_DetailsInput, {
    nullable: true
  })
  connectOrCreate?: ProductsCreateOrConnectWithoutOrder_DetailsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpsertWithoutOrder_DetailsInput, {
    nullable: true
  })
  upsert?: ProductsUpsertWithoutOrder_DetailsInput | undefined;

  @TypeGraphQL.Field(_type => ProductsWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProductsUpdateWithoutOrder_DetailsInput, {
    nullable: true
  })
  update?: ProductsUpdateWithoutOrder_DetailsInput | undefined;
}
