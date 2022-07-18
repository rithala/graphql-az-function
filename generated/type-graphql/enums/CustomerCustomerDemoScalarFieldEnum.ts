import * as TypeGraphQL from "type-graphql";

export enum CustomerCustomerDemoScalarFieldEnum {
  CustomerID = "CustomerID",
  CustomerTypeID = "CustomerTypeID"
}
TypeGraphQL.registerEnumType(CustomerCustomerDemoScalarFieldEnum, {
  name: "CustomerCustomerDemoScalarFieldEnum",
  description: undefined,
});
