import * as TypeGraphQL from "type-graphql";
import { CustomerCustomerDemo } from "../../../models/CustomerCustomerDemo";
import { Customers } from "../../../models/Customers";
import { Orders } from "../../../models/Orders";
import { CustomersCustomerCustomerDemoArgs } from "./args/CustomersCustomerCustomerDemoArgs";
import { CustomersOrdersArgs } from "./args/CustomersOrdersArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Customers)
export class CustomersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CustomerCustomerDemo], {
    nullable: false
  })
  async CustomerCustomerDemo(@TypeGraphQL.Root() customers: Customers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomersCustomerCustomerDemoArgs): Promise<CustomerCustomerDemo[]> {
    return getPrismaFromContext(ctx).customers.findUnique({
      where: {
        CustomerID: customers.CustomerID,
      },
    }).CustomerCustomerDemo(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Orders], {
    nullable: false
  })
  async Orders(@TypeGraphQL.Root() customers: Customers, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomersOrdersArgs): Promise<Orders[]> {
    return getPrismaFromContext(ctx).customers.findUnique({
      where: {
        CustomerID: customers.CustomerID,
      },
    }).Orders(args);
  }
}
