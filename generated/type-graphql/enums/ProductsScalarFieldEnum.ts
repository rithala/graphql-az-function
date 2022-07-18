import * as TypeGraphQL from "type-graphql";

export enum ProductsScalarFieldEnum {
  ProductID = "ProductID",
  ProductName = "ProductName",
  SupplierID = "SupplierID",
  CategoryID = "CategoryID",
  QuantityPerUnit = "QuantityPerUnit",
  UnitPrice = "UnitPrice",
  UnitsInStock = "UnitsInStock",
  UnitsOnOrder = "UnitsOnOrder",
  ReorderLevel = "ReorderLevel",
  Discontinued = "Discontinued"
}
TypeGraphQL.registerEnumType(ProductsScalarFieldEnum, {
  name: "ProductsScalarFieldEnum",
  description: undefined,
});
