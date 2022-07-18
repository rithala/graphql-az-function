import * as TypeGraphQL from "type-graphql";
import { CustomerCustomerDemo } from "../../../models/CustomerCustomerDemo";
import { CustomerDemographics } from "../../../models/CustomerDemographics";
import { CustomerDemographicsCustomerCustomerDemoArgs } from "./args/CustomerDemographicsCustomerCustomerDemoArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CustomerDemographics)
export class CustomerDemographicsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CustomerCustomerDemo], {
    nullable: false
  })
  async CustomerCustomerDemo(@TypeGraphQL.Root() customerDemographics: CustomerDemographics, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CustomerDemographicsCustomerCustomerDemoArgs): Promise<CustomerCustomerDemo[]> {
    return getPrismaFromContext(ctx).customerDemographics.findUnique({
      where: {
        CustomerTypeID: customerDemographics.CustomerTypeID,
      },
    }).CustomerCustomerDemo(args);
  }
}
