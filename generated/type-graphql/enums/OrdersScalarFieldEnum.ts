import * as TypeGraphQL from "type-graphql";

export enum OrdersScalarFieldEnum {
  OrderID = "OrderID",
  CustomerID = "CustomerID",
  EmployeeID = "EmployeeID",
  OrderDate = "OrderDate",
  RequiredDate = "RequiredDate",
  ShippedDate = "ShippedDate",
  ShipVia = "ShipVia",
  Freight = "Freight",
  ShipName = "ShipName",
  ShipAddress = "ShipAddress",
  ShipCity = "ShipCity",
  ShipRegion = "ShipRegion",
  ShipPostalCode = "ShipPostalCode",
  ShipCountry = "ShipCountry"
}
TypeGraphQL.registerEnumType(OrdersScalarFieldEnum, {
  name: "OrdersScalarFieldEnum",
  description: undefined,
});
