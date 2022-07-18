import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrdersOrderByWithRelationInput } from "../../../inputs/OrdersOrderByWithRelationInput";
import { OrdersWhereInput } from "../../../inputs/OrdersWhereInput";
import { OrdersWhereUniqueInput } from "../../../inputs/OrdersWhereUniqueInput";
import { OrdersScalarFieldEnum } from "../../../../enums/OrdersScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstOrdersArgs {
  @TypeGraphQL.Field(_type => OrdersWhereInput, {
    nullable: true
  })
  where?: OrdersWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrdersOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OrdersOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OrdersWhereUniqueInput, {
    nullable: true
  })
  cursor?: OrdersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OrdersScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"OrderID" | "CustomerID" | "EmployeeID" | "OrderDate" | "RequiredDate" | "ShippedDate" | "ShipVia" | "Freight" | "ShipName" | "ShipAddress" | "ShipCity" | "ShipRegion" | "ShipPostalCode" | "ShipCountry"> | undefined;
}
