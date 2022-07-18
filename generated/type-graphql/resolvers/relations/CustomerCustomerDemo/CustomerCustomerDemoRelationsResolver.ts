import * as TypeGraphQL from "type-graphql";
import { CustomerCustomerDemo } from "../../../models/CustomerCustomerDemo";
import { CustomerDemographics } from "../../../models/CustomerDemographics";
import { Customers } from "../../../models/Customers";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerCustomerDemo)
export class CustomerCustomerDemoRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Customers, {
    nullable: false
  })
  async Customers(@TypeGraphQL.Root() customerCustomerDemo: CustomerCustomerDemo, @TypeGraphQL.Ctx() ctx: any): Promise<Customers> {
    return getPrismaFromContext(ctx).customerCustomerDemo.findUnique({
      where: {
        CustomerID_CustomerTypeID: {
          CustomerID: customerCustomerDemo.CustomerID,
          CustomerTypeID: customerCustomerDemo.CustomerTypeID,
        },
      },
    }).Customers({});
  }

  @TypeGraphQL.FieldResolver(_type => CustomerDemographics, {
    nullable: false
  })
  async CustomerDemographics(@TypeGraphQL.Root() customerCustomerDemo: CustomerCustomerDemo, @TypeGraphQL.Ctx() ctx: any): Promise<CustomerDemographics> {
    return getPrismaFromContext(ctx).customerCustomerDemo.findUnique({
      where: {
        CustomerID_CustomerTypeID: {
          CustomerID: customerCustomerDemo.CustomerID,
          CustomerTypeID: customerCustomerDemo.CustomerTypeID,
        },
      },
    }).CustomerDemographics({});
  }
}
