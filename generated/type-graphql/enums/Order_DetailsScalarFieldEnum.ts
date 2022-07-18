import * as TypeGraphQL from "type-graphql";

export enum Order_DetailsScalarFieldEnum {
  OrderID = "OrderID",
  ProductID = "ProductID",
  UnitPrice = "UnitPrice",
  Quantity = "Quantity",
  Discount = "Discount"
}
TypeGraphQL.registerEnumType(Order_DetailsScalarFieldEnum, {
  name: "Order_DetailsScalarFieldEnum",
  description: undefined,
});
