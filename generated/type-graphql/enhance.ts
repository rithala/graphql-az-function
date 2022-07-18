import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Categories: crudResolvers.CategoriesCrudResolver,
  CustomerCustomerDemo: crudResolvers.CustomerCustomerDemoCrudResolver,
  CustomerDemographics: crudResolvers.CustomerDemographicsCrudResolver,
  Customers: crudResolvers.CustomersCrudResolver,
  Employees: crudResolvers.EmployeesCrudResolver,
  EmployeeTerritories: crudResolvers.EmployeeTerritoriesCrudResolver,
  Order_Details: crudResolvers.Order_DetailsCrudResolver,
  Orders: crudResolvers.OrdersCrudResolver,
  Products: crudResolvers.ProductsCrudResolver,
  Region: crudResolvers.RegionCrudResolver,
  Shippers: crudResolvers.ShippersCrudResolver,
  Suppliers: crudResolvers.SuppliersCrudResolver,
  Territories: crudResolvers.TerritoriesCrudResolver
};
const actionResolversMap = {
  Categories: {
    aggregateCategories: actionResolvers.AggregateCategoriesResolver,
    createManyCategories: actionResolvers.CreateManyCategoriesResolver,
    createOneCategories: actionResolvers.CreateOneCategoriesResolver,
    deleteManyCategories: actionResolvers.DeleteManyCategoriesResolver,
    deleteOneCategories: actionResolvers.DeleteOneCategoriesResolver,
    findFirstCategories: actionResolvers.FindFirstCategoriesResolver,
    findManyCategories: actionResolvers.FindManyCategoriesResolver,
    findUniqueCategories: actionResolvers.FindUniqueCategoriesResolver,
    groupByCategories: actionResolvers.GroupByCategoriesResolver,
    updateManyCategories: actionResolvers.UpdateManyCategoriesResolver,
    updateOneCategories: actionResolvers.UpdateOneCategoriesResolver,
    upsertOneCategories: actionResolvers.UpsertOneCategoriesResolver
  },
  CustomerCustomerDemo: {
    aggregateCustomerCustomerDemo: actionResolvers.AggregateCustomerCustomerDemoResolver,
    createManyCustomerCustomerDemo: actionResolvers.CreateManyCustomerCustomerDemoResolver,
    createOneCustomerCustomerDemo: actionResolvers.CreateOneCustomerCustomerDemoResolver,
    deleteManyCustomerCustomerDemo: actionResolvers.DeleteManyCustomerCustomerDemoResolver,
    deleteOneCustomerCustomerDemo: actionResolvers.DeleteOneCustomerCustomerDemoResolver,
    findFirstCustomerCustomerDemo: actionResolvers.FindFirstCustomerCustomerDemoResolver,
    customerCustomerDemos: actionResolvers.FindManyCustomerCustomerDemoResolver,
    customerCustomerDemo: actionResolvers.FindUniqueCustomerCustomerDemoResolver,
    groupByCustomerCustomerDemo: actionResolvers.GroupByCustomerCustomerDemoResolver,
    updateManyCustomerCustomerDemo: actionResolvers.UpdateManyCustomerCustomerDemoResolver,
    updateOneCustomerCustomerDemo: actionResolvers.UpdateOneCustomerCustomerDemoResolver,
    upsertOneCustomerCustomerDemo: actionResolvers.UpsertOneCustomerCustomerDemoResolver
  },
  CustomerDemographics: {
    aggregateCustomerDemographics: actionResolvers.AggregateCustomerDemographicsResolver,
    createManyCustomerDemographics: actionResolvers.CreateManyCustomerDemographicsResolver,
    createOneCustomerDemographics: actionResolvers.CreateOneCustomerDemographicsResolver,
    deleteManyCustomerDemographics: actionResolvers.DeleteManyCustomerDemographicsResolver,
    deleteOneCustomerDemographics: actionResolvers.DeleteOneCustomerDemographicsResolver,
    findFirstCustomerDemographics: actionResolvers.FindFirstCustomerDemographicsResolver,
    findManyCustomerDemographics: actionResolvers.FindManyCustomerDemographicsResolver,
    findUniqueCustomerDemographics: actionResolvers.FindUniqueCustomerDemographicsResolver,
    groupByCustomerDemographics: actionResolvers.GroupByCustomerDemographicsResolver,
    updateManyCustomerDemographics: actionResolvers.UpdateManyCustomerDemographicsResolver,
    updateOneCustomerDemographics: actionResolvers.UpdateOneCustomerDemographicsResolver,
    upsertOneCustomerDemographics: actionResolvers.UpsertOneCustomerDemographicsResolver
  },
  Customers: {
    aggregateCustomers: actionResolvers.AggregateCustomersResolver,
    createManyCustomers: actionResolvers.CreateManyCustomersResolver,
    createOneCustomers: actionResolvers.CreateOneCustomersResolver,
    deleteManyCustomers: actionResolvers.DeleteManyCustomersResolver,
    deleteOneCustomers: actionResolvers.DeleteOneCustomersResolver,
    findFirstCustomers: actionResolvers.FindFirstCustomersResolver,
    findManyCustomers: actionResolvers.FindManyCustomersResolver,
    findUniqueCustomers: actionResolvers.FindUniqueCustomersResolver,
    groupByCustomers: actionResolvers.GroupByCustomersResolver,
    updateManyCustomers: actionResolvers.UpdateManyCustomersResolver,
    updateOneCustomers: actionResolvers.UpdateOneCustomersResolver,
    upsertOneCustomers: actionResolvers.UpsertOneCustomersResolver
  },
  Employees: {
    aggregateEmployees: actionResolvers.AggregateEmployeesResolver,
    createManyEmployees: actionResolvers.CreateManyEmployeesResolver,
    createOneEmployees: actionResolvers.CreateOneEmployeesResolver,
    deleteManyEmployees: actionResolvers.DeleteManyEmployeesResolver,
    deleteOneEmployees: actionResolvers.DeleteOneEmployeesResolver,
    findFirstEmployees: actionResolvers.FindFirstEmployeesResolver,
    findManyEmployees: actionResolvers.FindManyEmployeesResolver,
    findUniqueEmployees: actionResolvers.FindUniqueEmployeesResolver,
    groupByEmployees: actionResolvers.GroupByEmployeesResolver,
    updateManyEmployees: actionResolvers.UpdateManyEmployeesResolver,
    updateOneEmployees: actionResolvers.UpdateOneEmployeesResolver,
    upsertOneEmployees: actionResolvers.UpsertOneEmployeesResolver
  },
  EmployeeTerritories: {
    aggregateEmployeeTerritories: actionResolvers.AggregateEmployeeTerritoriesResolver,
    createManyEmployeeTerritories: actionResolvers.CreateManyEmployeeTerritoriesResolver,
    createOneEmployeeTerritories: actionResolvers.CreateOneEmployeeTerritoriesResolver,
    deleteManyEmployeeTerritories: actionResolvers.DeleteManyEmployeeTerritoriesResolver,
    deleteOneEmployeeTerritories: actionResolvers.DeleteOneEmployeeTerritoriesResolver,
    findFirstEmployeeTerritories: actionResolvers.FindFirstEmployeeTerritoriesResolver,
    findManyEmployeeTerritories: actionResolvers.FindManyEmployeeTerritoriesResolver,
    findUniqueEmployeeTerritories: actionResolvers.FindUniqueEmployeeTerritoriesResolver,
    groupByEmployeeTerritories: actionResolvers.GroupByEmployeeTerritoriesResolver,
    updateManyEmployeeTerritories: actionResolvers.UpdateManyEmployeeTerritoriesResolver,
    updateOneEmployeeTerritories: actionResolvers.UpdateOneEmployeeTerritoriesResolver,
    upsertOneEmployeeTerritories: actionResolvers.UpsertOneEmployeeTerritoriesResolver
  },
  Order_Details: {
    aggregateOrder_Details: actionResolvers.AggregateOrder_DetailsResolver,
    createManyOrder_Details: actionResolvers.CreateManyOrder_DetailsResolver,
    createOneOrder_Details: actionResolvers.CreateOneOrder_DetailsResolver,
    deleteManyOrder_Details: actionResolvers.DeleteManyOrder_DetailsResolver,
    deleteOneOrder_Details: actionResolvers.DeleteOneOrder_DetailsResolver,
    findFirstOrder_Details: actionResolvers.FindFirstOrder_DetailsResolver,
    findManyOrder_Details: actionResolvers.FindManyOrder_DetailsResolver,
    findUniqueOrder_Details: actionResolvers.FindUniqueOrder_DetailsResolver,
    groupByOrder_Details: actionResolvers.GroupByOrder_DetailsResolver,
    updateManyOrder_Details: actionResolvers.UpdateManyOrder_DetailsResolver,
    updateOneOrder_Details: actionResolvers.UpdateOneOrder_DetailsResolver,
    upsertOneOrder_Details: actionResolvers.UpsertOneOrder_DetailsResolver
  },
  Orders: {
    aggregateOrders: actionResolvers.AggregateOrdersResolver,
    createManyOrders: actionResolvers.CreateManyOrdersResolver,
    createOneOrders: actionResolvers.CreateOneOrdersResolver,
    deleteManyOrders: actionResolvers.DeleteManyOrdersResolver,
    deleteOneOrders: actionResolvers.DeleteOneOrdersResolver,
    findFirstOrders: actionResolvers.FindFirstOrdersResolver,
    findManyOrders: actionResolvers.FindManyOrdersResolver,
    findUniqueOrders: actionResolvers.FindUniqueOrdersResolver,
    groupByOrders: actionResolvers.GroupByOrdersResolver,
    updateManyOrders: actionResolvers.UpdateManyOrdersResolver,
    updateOneOrders: actionResolvers.UpdateOneOrdersResolver,
    upsertOneOrders: actionResolvers.UpsertOneOrdersResolver
  },
  Products: {
    aggregateProducts: actionResolvers.AggregateProductsResolver,
    createManyProducts: actionResolvers.CreateManyProductsResolver,
    createOneProducts: actionResolvers.CreateOneProductsResolver,
    deleteManyProducts: actionResolvers.DeleteManyProductsResolver,
    deleteOneProducts: actionResolvers.DeleteOneProductsResolver,
    findFirstProducts: actionResolvers.FindFirstProductsResolver,
    findManyProducts: actionResolvers.FindManyProductsResolver,
    findUniqueProducts: actionResolvers.FindUniqueProductsResolver,
    groupByProducts: actionResolvers.GroupByProductsResolver,
    updateManyProducts: actionResolvers.UpdateManyProductsResolver,
    updateOneProducts: actionResolvers.UpdateOneProductsResolver,
    upsertOneProducts: actionResolvers.UpsertOneProductsResolver
  },
  Region: {
    aggregateRegion: actionResolvers.AggregateRegionResolver,
    createManyRegion: actionResolvers.CreateManyRegionResolver,
    createOneRegion: actionResolvers.CreateOneRegionResolver,
    deleteManyRegion: actionResolvers.DeleteManyRegionResolver,
    deleteOneRegion: actionResolvers.DeleteOneRegionResolver,
    findFirstRegion: actionResolvers.FindFirstRegionResolver,
    regions: actionResolvers.FindManyRegionResolver,
    region: actionResolvers.FindUniqueRegionResolver,
    groupByRegion: actionResolvers.GroupByRegionResolver,
    updateManyRegion: actionResolvers.UpdateManyRegionResolver,
    updateOneRegion: actionResolvers.UpdateOneRegionResolver,
    upsertOneRegion: actionResolvers.UpsertOneRegionResolver
  },
  Shippers: {
    aggregateShippers: actionResolvers.AggregateShippersResolver,
    createManyShippers: actionResolvers.CreateManyShippersResolver,
    createOneShippers: actionResolvers.CreateOneShippersResolver,
    deleteManyShippers: actionResolvers.DeleteManyShippersResolver,
    deleteOneShippers: actionResolvers.DeleteOneShippersResolver,
    findFirstShippers: actionResolvers.FindFirstShippersResolver,
    findManyShippers: actionResolvers.FindManyShippersResolver,
    findUniqueShippers: actionResolvers.FindUniqueShippersResolver,
    groupByShippers: actionResolvers.GroupByShippersResolver,
    updateManyShippers: actionResolvers.UpdateManyShippersResolver,
    updateOneShippers: actionResolvers.UpdateOneShippersResolver,
    upsertOneShippers: actionResolvers.UpsertOneShippersResolver
  },
  Suppliers: {
    aggregateSuppliers: actionResolvers.AggregateSuppliersResolver,
    createManySuppliers: actionResolvers.CreateManySuppliersResolver,
    createOneSuppliers: actionResolvers.CreateOneSuppliersResolver,
    deleteManySuppliers: actionResolvers.DeleteManySuppliersResolver,
    deleteOneSuppliers: actionResolvers.DeleteOneSuppliersResolver,
    findFirstSuppliers: actionResolvers.FindFirstSuppliersResolver,
    findManySuppliers: actionResolvers.FindManySuppliersResolver,
    findUniqueSuppliers: actionResolvers.FindUniqueSuppliersResolver,
    groupBySuppliers: actionResolvers.GroupBySuppliersResolver,
    updateManySuppliers: actionResolvers.UpdateManySuppliersResolver,
    updateOneSuppliers: actionResolvers.UpdateOneSuppliersResolver,
    upsertOneSuppliers: actionResolvers.UpsertOneSuppliersResolver
  },
  Territories: {
    aggregateTerritories: actionResolvers.AggregateTerritoriesResolver,
    createManyTerritories: actionResolvers.CreateManyTerritoriesResolver,
    createOneTerritories: actionResolvers.CreateOneTerritoriesResolver,
    deleteManyTerritories: actionResolvers.DeleteManyTerritoriesResolver,
    deleteOneTerritories: actionResolvers.DeleteOneTerritoriesResolver,
    findFirstTerritories: actionResolvers.FindFirstTerritoriesResolver,
    findManyTerritories: actionResolvers.FindManyTerritoriesResolver,
    findUniqueTerritories: actionResolvers.FindUniqueTerritoriesResolver,
    groupByTerritories: actionResolvers.GroupByTerritoriesResolver,
    updateManyTerritories: actionResolvers.UpdateManyTerritoriesResolver,
    updateOneTerritories: actionResolvers.UpdateOneTerritoriesResolver,
    upsertOneTerritories: actionResolvers.UpsertOneTerritoriesResolver
  }
};
const crudResolversInfo = {
  Categories: ["aggregateCategories", "createManyCategories", "createOneCategories", "deleteManyCategories", "deleteOneCategories", "findFirstCategories", "findManyCategories", "findUniqueCategories", "groupByCategories", "updateManyCategories", "updateOneCategories", "upsertOneCategories"],
  CustomerCustomerDemo: ["aggregateCustomerCustomerDemo", "createManyCustomerCustomerDemo", "createOneCustomerCustomerDemo", "deleteManyCustomerCustomerDemo", "deleteOneCustomerCustomerDemo", "findFirstCustomerCustomerDemo", "customerCustomerDemos", "customerCustomerDemo", "groupByCustomerCustomerDemo", "updateManyCustomerCustomerDemo", "updateOneCustomerCustomerDemo", "upsertOneCustomerCustomerDemo"],
  CustomerDemographics: ["aggregateCustomerDemographics", "createManyCustomerDemographics", "createOneCustomerDemographics", "deleteManyCustomerDemographics", "deleteOneCustomerDemographics", "findFirstCustomerDemographics", "findManyCustomerDemographics", "findUniqueCustomerDemographics", "groupByCustomerDemographics", "updateManyCustomerDemographics", "updateOneCustomerDemographics", "upsertOneCustomerDemographics"],
  Customers: ["aggregateCustomers", "createManyCustomers", "createOneCustomers", "deleteManyCustomers", "deleteOneCustomers", "findFirstCustomers", "findManyCustomers", "findUniqueCustomers", "groupByCustomers", "updateManyCustomers", "updateOneCustomers", "upsertOneCustomers"],
  Employees: ["aggregateEmployees", "createManyEmployees", "createOneEmployees", "deleteManyEmployees", "deleteOneEmployees", "findFirstEmployees", "findManyEmployees", "findUniqueEmployees", "groupByEmployees", "updateManyEmployees", "updateOneEmployees", "upsertOneEmployees"],
  EmployeeTerritories: ["aggregateEmployeeTerritories", "createManyEmployeeTerritories", "createOneEmployeeTerritories", "deleteManyEmployeeTerritories", "deleteOneEmployeeTerritories", "findFirstEmployeeTerritories", "findManyEmployeeTerritories", "findUniqueEmployeeTerritories", "groupByEmployeeTerritories", "updateManyEmployeeTerritories", "updateOneEmployeeTerritories", "upsertOneEmployeeTerritories"],
  Order_Details: ["aggregateOrder_Details", "createManyOrder_Details", "createOneOrder_Details", "deleteManyOrder_Details", "deleteOneOrder_Details", "findFirstOrder_Details", "findManyOrder_Details", "findUniqueOrder_Details", "groupByOrder_Details", "updateManyOrder_Details", "updateOneOrder_Details", "upsertOneOrder_Details"],
  Orders: ["aggregateOrders", "createManyOrders", "createOneOrders", "deleteManyOrders", "deleteOneOrders", "findFirstOrders", "findManyOrders", "findUniqueOrders", "groupByOrders", "updateManyOrders", "updateOneOrders", "upsertOneOrders"],
  Products: ["aggregateProducts", "createManyProducts", "createOneProducts", "deleteManyProducts", "deleteOneProducts", "findFirstProducts", "findManyProducts", "findUniqueProducts", "groupByProducts", "updateManyProducts", "updateOneProducts", "upsertOneProducts"],
  Region: ["aggregateRegion", "createManyRegion", "createOneRegion", "deleteManyRegion", "deleteOneRegion", "findFirstRegion", "regions", "region", "groupByRegion", "updateManyRegion", "updateOneRegion", "upsertOneRegion"],
  Shippers: ["aggregateShippers", "createManyShippers", "createOneShippers", "deleteManyShippers", "deleteOneShippers", "findFirstShippers", "findManyShippers", "findUniqueShippers", "groupByShippers", "updateManyShippers", "updateOneShippers", "upsertOneShippers"],
  Suppliers: ["aggregateSuppliers", "createManySuppliers", "createOneSuppliers", "deleteManySuppliers", "deleteOneSuppliers", "findFirstSuppliers", "findManySuppliers", "findUniqueSuppliers", "groupBySuppliers", "updateManySuppliers", "updateOneSuppliers", "upsertOneSuppliers"],
  Territories: ["aggregateTerritories", "createManyTerritories", "createOneTerritories", "deleteManyTerritories", "deleteOneTerritories", "findFirstTerritories", "findManyTerritories", "findUniqueTerritories", "groupByTerritories", "updateManyTerritories", "updateOneTerritories", "upsertOneTerritories"]
};
const argsInfo = {
  AggregateCategoriesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCategoriesArgs: ["data"],
  CreateOneCategoriesArgs: ["data"],
  DeleteManyCategoriesArgs: ["where"],
  DeleteOneCategoriesArgs: ["where"],
  FindFirstCategoriesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCategoriesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCategoriesArgs: ["where"],
  GroupByCategoriesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCategoriesArgs: ["data", "where"],
  UpdateOneCategoriesArgs: ["data", "where"],
  UpsertOneCategoriesArgs: ["where", "create", "update"],
  AggregateCustomerCustomerDemoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCustomerCustomerDemoArgs: ["data"],
  CreateOneCustomerCustomerDemoArgs: ["data"],
  DeleteManyCustomerCustomerDemoArgs: ["where"],
  DeleteOneCustomerCustomerDemoArgs: ["where"],
  FindFirstCustomerCustomerDemoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCustomerCustomerDemoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCustomerCustomerDemoArgs: ["where"],
  GroupByCustomerCustomerDemoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCustomerCustomerDemoArgs: ["data", "where"],
  UpdateOneCustomerCustomerDemoArgs: ["data", "where"],
  UpsertOneCustomerCustomerDemoArgs: ["where", "create", "update"],
  AggregateCustomerDemographicsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCustomerDemographicsArgs: ["data"],
  CreateOneCustomerDemographicsArgs: ["data"],
  DeleteManyCustomerDemographicsArgs: ["where"],
  DeleteOneCustomerDemographicsArgs: ["where"],
  FindFirstCustomerDemographicsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCustomerDemographicsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCustomerDemographicsArgs: ["where"],
  GroupByCustomerDemographicsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCustomerDemographicsArgs: ["data", "where"],
  UpdateOneCustomerDemographicsArgs: ["data", "where"],
  UpsertOneCustomerDemographicsArgs: ["where", "create", "update"],
  AggregateCustomersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCustomersArgs: ["data"],
  CreateOneCustomersArgs: ["data"],
  DeleteManyCustomersArgs: ["where"],
  DeleteOneCustomersArgs: ["where"],
  FindFirstCustomersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCustomersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCustomersArgs: ["where"],
  GroupByCustomersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCustomersArgs: ["data", "where"],
  UpdateOneCustomersArgs: ["data", "where"],
  UpsertOneCustomersArgs: ["where", "create", "update"],
  AggregateEmployeesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyEmployeesArgs: ["data"],
  CreateOneEmployeesArgs: ["data"],
  DeleteManyEmployeesArgs: ["where"],
  DeleteOneEmployeesArgs: ["where"],
  FindFirstEmployeesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEmployeesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEmployeesArgs: ["where"],
  GroupByEmployeesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEmployeesArgs: ["data", "where"],
  UpdateOneEmployeesArgs: ["data", "where"],
  UpsertOneEmployeesArgs: ["where", "create", "update"],
  AggregateEmployeeTerritoriesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyEmployeeTerritoriesArgs: ["data"],
  CreateOneEmployeeTerritoriesArgs: ["data"],
  DeleteManyEmployeeTerritoriesArgs: ["where"],
  DeleteOneEmployeeTerritoriesArgs: ["where"],
  FindFirstEmployeeTerritoriesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEmployeeTerritoriesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEmployeeTerritoriesArgs: ["where"],
  GroupByEmployeeTerritoriesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEmployeeTerritoriesArgs: ["data", "where"],
  UpdateOneEmployeeTerritoriesArgs: ["data", "where"],
  UpsertOneEmployeeTerritoriesArgs: ["where", "create", "update"],
  AggregateOrder_DetailsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyOrder_DetailsArgs: ["data"],
  CreateOneOrder_DetailsArgs: ["data"],
  DeleteManyOrder_DetailsArgs: ["where"],
  DeleteOneOrder_DetailsArgs: ["where"],
  FindFirstOrder_DetailsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrder_DetailsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueOrder_DetailsArgs: ["where"],
  GroupByOrder_DetailsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyOrder_DetailsArgs: ["data", "where"],
  UpdateOneOrder_DetailsArgs: ["data", "where"],
  UpsertOneOrder_DetailsArgs: ["where", "create", "update"],
  AggregateOrdersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyOrdersArgs: ["data"],
  CreateOneOrdersArgs: ["data"],
  DeleteManyOrdersArgs: ["where"],
  DeleteOneOrdersArgs: ["where"],
  FindFirstOrdersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrdersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueOrdersArgs: ["where"],
  GroupByOrdersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyOrdersArgs: ["data", "where"],
  UpdateOneOrdersArgs: ["data", "where"],
  UpsertOneOrdersArgs: ["where", "create", "update"],
  AggregateProductsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProductsArgs: ["data"],
  CreateOneProductsArgs: ["data"],
  DeleteManyProductsArgs: ["where"],
  DeleteOneProductsArgs: ["where"],
  FindFirstProductsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProductsArgs: ["where"],
  GroupByProductsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProductsArgs: ["data", "where"],
  UpdateOneProductsArgs: ["data", "where"],
  UpsertOneProductsArgs: ["where", "create", "update"],
  AggregateRegionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyRegionArgs: ["data"],
  CreateOneRegionArgs: ["data"],
  DeleteManyRegionArgs: ["where"],
  DeleteOneRegionArgs: ["where"],
  FindFirstRegionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyRegionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueRegionArgs: ["where"],
  GroupByRegionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyRegionArgs: ["data", "where"],
  UpdateOneRegionArgs: ["data", "where"],
  UpsertOneRegionArgs: ["where", "create", "update"],
  AggregateShippersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyShippersArgs: ["data"],
  CreateOneShippersArgs: ["data"],
  DeleteManyShippersArgs: ["where"],
  DeleteOneShippersArgs: ["where"],
  FindFirstShippersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyShippersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueShippersArgs: ["where"],
  GroupByShippersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyShippersArgs: ["data", "where"],
  UpdateOneShippersArgs: ["data", "where"],
  UpsertOneShippersArgs: ["where", "create", "update"],
  AggregateSuppliersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySuppliersArgs: ["data"],
  CreateOneSuppliersArgs: ["data"],
  DeleteManySuppliersArgs: ["where"],
  DeleteOneSuppliersArgs: ["where"],
  FindFirstSuppliersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySuppliersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSuppliersArgs: ["where"],
  GroupBySuppliersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySuppliersArgs: ["data", "where"],
  UpdateOneSuppliersArgs: ["data", "where"],
  UpsertOneSuppliersArgs: ["where", "create", "update"],
  AggregateTerritoriesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTerritoriesArgs: ["data"],
  CreateOneTerritoriesArgs: ["data"],
  DeleteManyTerritoriesArgs: ["where"],
  DeleteOneTerritoriesArgs: ["where"],
  FindFirstTerritoriesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTerritoriesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTerritoriesArgs: ["where"],
  GroupByTerritoriesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTerritoriesArgs: ["data", "where"],
  UpdateOneTerritoriesArgs: ["data", "where"],
  UpsertOneTerritoriesArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Categories: relationResolvers.CategoriesRelationsResolver,
  CustomerCustomerDemo: relationResolvers.CustomerCustomerDemoRelationsResolver,
  CustomerDemographics: relationResolvers.CustomerDemographicsRelationsResolver,
  Customers: relationResolvers.CustomersRelationsResolver,
  Employees: relationResolvers.EmployeesRelationsResolver,
  EmployeeTerritories: relationResolvers.EmployeeTerritoriesRelationsResolver,
  Order_Details: relationResolvers.Order_DetailsRelationsResolver,
  Orders: relationResolvers.OrdersRelationsResolver,
  Products: relationResolvers.ProductsRelationsResolver,
  Region: relationResolvers.RegionRelationsResolver,
  Shippers: relationResolvers.ShippersRelationsResolver,
  Suppliers: relationResolvers.SuppliersRelationsResolver,
  Territories: relationResolvers.TerritoriesRelationsResolver
};
const relationResolversInfo = {
  Categories: ["Products"],
  CustomerCustomerDemo: ["Customers", "CustomerDemographics"],
  CustomerDemographics: ["CustomerCustomerDemo"],
  Customers: ["CustomerCustomerDemo", "Orders"],
  Employees: ["Employees", "other_Employees", "EmployeeTerritories", "Orders"],
  EmployeeTerritories: ["Employees", "Territories"],
  Order_Details: ["Orders", "Products"],
  Orders: ["Customers", "Employees", "Shippers", "Order_Details"],
  Products: ["Categories", "Suppliers", "Order_Details"],
  Region: ["Territories"],
  Shippers: ["Orders"],
  Suppliers: ["Products"],
  Territories: ["Region", "EmployeeTerritories"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Categories: ["CategoryID", "CategoryName", "Description", "Picture"],
  CustomerCustomerDemo: ["CustomerID", "CustomerTypeID"],
  CustomerDemographics: ["CustomerTypeID", "CustomerDesc"],
  Customers: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax"],
  Employees: ["EmployeeID", "LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "ReportsTo", "PhotoPath"],
  EmployeeTerritories: ["EmployeeID", "TerritoryID"],
  Order_Details: ["OrderID", "ProductID", "UnitPrice", "Quantity", "Discount"],
  Orders: ["OrderID", "CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry"],
  Products: ["ProductID", "ProductName", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued"],
  Region: ["RegionID", "RegionDescription"],
  Shippers: ["ShipperID", "CompanyName", "Phone"],
  Suppliers: ["SupplierID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage"],
  Territories: ["TerritoryID", "TerritoryDescription", "RegionID"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateCategories: ["_count", "_avg", "_sum", "_min", "_max"],
  CategoriesGroupBy: ["CategoryID", "CategoryName", "Description", "Picture", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCustomerCustomerDemo: ["_count", "_min", "_max"],
  CustomerCustomerDemoGroupBy: ["CustomerID", "CustomerTypeID", "_count", "_min", "_max"],
  AggregateCustomerDemographics: ["_count", "_min", "_max"],
  CustomerDemographicsGroupBy: ["CustomerTypeID", "CustomerDesc", "_count", "_min", "_max"],
  AggregateCustomers: ["_count", "_min", "_max"],
  CustomersGroupBy: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "_count", "_min", "_max"],
  AggregateEmployees: ["_count", "_avg", "_sum", "_min", "_max"],
  EmployeesGroupBy: ["EmployeeID", "LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "ReportsTo", "PhotoPath", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateEmployeeTerritories: ["_count", "_avg", "_sum", "_min", "_max"],
  EmployeeTerritoriesGroupBy: ["EmployeeID", "TerritoryID", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOrder_Details: ["_count", "_avg", "_sum", "_min", "_max"],
  Order_DetailsGroupBy: ["OrderID", "ProductID", "UnitPrice", "Quantity", "Discount", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOrders: ["_count", "_avg", "_sum", "_min", "_max"],
  OrdersGroupBy: ["OrderID", "CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateProducts: ["_count", "_avg", "_sum", "_min", "_max"],
  ProductsGroupBy: ["ProductID", "ProductName", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateRegion: ["_count", "_avg", "_sum", "_min", "_max"],
  RegionGroupBy: ["RegionID", "RegionDescription", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateShippers: ["_count", "_avg", "_sum", "_min", "_max"],
  ShippersGroupBy: ["ShipperID", "CompanyName", "Phone", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSuppliers: ["_count", "_avg", "_sum", "_min", "_max"],
  SuppliersGroupBy: ["SupplierID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTerritories: ["_count", "_avg", "_sum", "_min", "_max"],
  TerritoriesGroupBy: ["TerritoryID", "TerritoryDescription", "RegionID", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  CategoriesCount: ["Products"],
  CategoriesCountAggregate: ["CategoryID", "CategoryName", "Description", "Picture", "_all"],
  CategoriesAvgAggregate: ["CategoryID"],
  CategoriesSumAggregate: ["CategoryID"],
  CategoriesMinAggregate: ["CategoryID", "CategoryName", "Description", "Picture"],
  CategoriesMaxAggregate: ["CategoryID", "CategoryName", "Description", "Picture"],
  CustomerCustomerDemoCountAggregate: ["CustomerID", "CustomerTypeID", "_all"],
  CustomerCustomerDemoMinAggregate: ["CustomerID", "CustomerTypeID"],
  CustomerCustomerDemoMaxAggregate: ["CustomerID", "CustomerTypeID"],
  CustomerDemographicsCount: ["CustomerCustomerDemo"],
  CustomerDemographicsCountAggregate: ["CustomerTypeID", "CustomerDesc", "_all"],
  CustomerDemographicsMinAggregate: ["CustomerTypeID", "CustomerDesc"],
  CustomerDemographicsMaxAggregate: ["CustomerTypeID", "CustomerDesc"],
  CustomersCount: ["CustomerCustomerDemo", "Orders"],
  CustomersCountAggregate: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "_all"],
  CustomersMinAggregate: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax"],
  CustomersMaxAggregate: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax"],
  EmployeesCount: ["other_Employees", "EmployeeTerritories", "Orders"],
  EmployeesCountAggregate: ["EmployeeID", "LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "ReportsTo", "PhotoPath", "_all"],
  EmployeesAvgAggregate: ["EmployeeID", "ReportsTo"],
  EmployeesSumAggregate: ["EmployeeID", "ReportsTo"],
  EmployeesMinAggregate: ["EmployeeID", "LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "ReportsTo", "PhotoPath"],
  EmployeesMaxAggregate: ["EmployeeID", "LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "ReportsTo", "PhotoPath"],
  EmployeeTerritoriesCountAggregate: ["EmployeeID", "TerritoryID", "_all"],
  EmployeeTerritoriesAvgAggregate: ["EmployeeID"],
  EmployeeTerritoriesSumAggregate: ["EmployeeID"],
  EmployeeTerritoriesMinAggregate: ["EmployeeID", "TerritoryID"],
  EmployeeTerritoriesMaxAggregate: ["EmployeeID", "TerritoryID"],
  Order_DetailsCountAggregate: ["OrderID", "ProductID", "UnitPrice", "Quantity", "Discount", "_all"],
  Order_DetailsAvgAggregate: ["OrderID", "ProductID", "UnitPrice", "Quantity", "Discount"],
  Order_DetailsSumAggregate: ["OrderID", "ProductID", "UnitPrice", "Quantity", "Discount"],
  Order_DetailsMinAggregate: ["OrderID", "ProductID", "UnitPrice", "Quantity", "Discount"],
  Order_DetailsMaxAggregate: ["OrderID", "ProductID", "UnitPrice", "Quantity", "Discount"],
  OrdersCount: ["Order_Details"],
  OrdersCountAggregate: ["OrderID", "CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "_all"],
  OrdersAvgAggregate: ["OrderID", "EmployeeID", "ShipVia", "Freight"],
  OrdersSumAggregate: ["OrderID", "EmployeeID", "ShipVia", "Freight"],
  OrdersMinAggregate: ["OrderID", "CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry"],
  OrdersMaxAggregate: ["OrderID", "CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry"],
  ProductsCount: ["Order_Details"],
  ProductsCountAggregate: ["ProductID", "ProductName", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued", "_all"],
  ProductsAvgAggregate: ["ProductID", "SupplierID", "CategoryID", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel"],
  ProductsSumAggregate: ["ProductID", "SupplierID", "CategoryID", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel"],
  ProductsMinAggregate: ["ProductID", "ProductName", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued"],
  ProductsMaxAggregate: ["ProductID", "ProductName", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued"],
  RegionCount: ["Territories"],
  RegionCountAggregate: ["RegionID", "RegionDescription", "_all"],
  RegionAvgAggregate: ["RegionID"],
  RegionSumAggregate: ["RegionID"],
  RegionMinAggregate: ["RegionID", "RegionDescription"],
  RegionMaxAggregate: ["RegionID", "RegionDescription"],
  ShippersCount: ["Orders"],
  ShippersCountAggregate: ["ShipperID", "CompanyName", "Phone", "_all"],
  ShippersAvgAggregate: ["ShipperID"],
  ShippersSumAggregate: ["ShipperID"],
  ShippersMinAggregate: ["ShipperID", "CompanyName", "Phone"],
  ShippersMaxAggregate: ["ShipperID", "CompanyName", "Phone"],
  SuppliersCount: ["Products"],
  SuppliersCountAggregate: ["SupplierID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage", "_all"],
  SuppliersAvgAggregate: ["SupplierID"],
  SuppliersSumAggregate: ["SupplierID"],
  SuppliersMinAggregate: ["SupplierID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage"],
  SuppliersMaxAggregate: ["SupplierID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage"],
  TerritoriesCount: ["EmployeeTerritories"],
  TerritoriesCountAggregate: ["TerritoryID", "TerritoryDescription", "RegionID", "_all"],
  TerritoriesAvgAggregate: ["RegionID"],
  TerritoriesSumAggregate: ["RegionID"],
  TerritoriesMinAggregate: ["TerritoryID", "TerritoryDescription", "RegionID"],
  TerritoriesMaxAggregate: ["TerritoryID", "TerritoryDescription", "RegionID"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  CategoriesWhereInput: ["AND", "OR", "NOT", "CategoryID", "CategoryName", "Description", "Picture", "Products"],
  CategoriesOrderByWithRelationInput: ["CategoryID", "CategoryName", "Description", "Picture", "Products"],
  CategoriesWhereUniqueInput: ["CategoryID"],
  CategoriesOrderByWithAggregationInput: ["CategoryID", "CategoryName", "Description", "Picture", "_count", "_avg", "_max", "_min", "_sum"],
  CategoriesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "CategoryID", "CategoryName", "Description", "Picture"],
  CustomerCustomerDemoWhereInput: ["AND", "OR", "NOT", "CustomerID", "CustomerTypeID", "Customers", "CustomerDemographics"],
  CustomerCustomerDemoOrderByWithRelationInput: ["CustomerID", "CustomerTypeID", "Customers", "CustomerDemographics"],
  CustomerCustomerDemoWhereUniqueInput: ["CustomerID_CustomerTypeID"],
  CustomerCustomerDemoOrderByWithAggregationInput: ["CustomerID", "CustomerTypeID", "_count", "_max", "_min"],
  CustomerCustomerDemoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "CustomerID", "CustomerTypeID"],
  CustomerDemographicsWhereInput: ["AND", "OR", "NOT", "CustomerTypeID", "CustomerDesc", "CustomerCustomerDemo"],
  CustomerDemographicsOrderByWithRelationInput: ["CustomerTypeID", "CustomerDesc", "CustomerCustomerDemo"],
  CustomerDemographicsWhereUniqueInput: ["CustomerTypeID"],
  CustomerDemographicsOrderByWithAggregationInput: ["CustomerTypeID", "CustomerDesc", "_count", "_max", "_min"],
  CustomerDemographicsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "CustomerTypeID", "CustomerDesc"],
  CustomersWhereInput: ["AND", "OR", "NOT", "CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "CustomerCustomerDemo", "Orders"],
  CustomersOrderByWithRelationInput: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "CustomerCustomerDemo", "Orders"],
  CustomersWhereUniqueInput: ["CustomerID"],
  CustomersOrderByWithAggregationInput: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "_count", "_max", "_min"],
  CustomersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax"],
  EmployeesWhereInput: ["AND", "OR", "NOT", "EmployeeID", "LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "ReportsTo", "PhotoPath", "Employees", "other_Employees", "EmployeeTerritories", "Orders"],
  EmployeesOrderByWithRelationInput: ["EmployeeID", "LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "ReportsTo", "PhotoPath", "Employees", "other_Employees", "EmployeeTerritories", "Orders"],
  EmployeesWhereUniqueInput: ["EmployeeID"],
  EmployeesOrderByWithAggregationInput: ["EmployeeID", "LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "ReportsTo", "PhotoPath", "_count", "_avg", "_max", "_min", "_sum"],
  EmployeesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "EmployeeID", "LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "ReportsTo", "PhotoPath"],
  EmployeeTerritoriesWhereInput: ["AND", "OR", "NOT", "EmployeeID", "TerritoryID", "Employees", "Territories"],
  EmployeeTerritoriesOrderByWithRelationInput: ["EmployeeID", "TerritoryID", "Employees", "Territories"],
  EmployeeTerritoriesWhereUniqueInput: ["EmployeeID_TerritoryID"],
  EmployeeTerritoriesOrderByWithAggregationInput: ["EmployeeID", "TerritoryID", "_count", "_avg", "_max", "_min", "_sum"],
  EmployeeTerritoriesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "EmployeeID", "TerritoryID"],
  Order_DetailsWhereInput: ["AND", "OR", "NOT", "OrderID", "ProductID", "UnitPrice", "Quantity", "Discount", "Orders", "Products"],
  Order_DetailsOrderByWithRelationInput: ["OrderID", "ProductID", "UnitPrice", "Quantity", "Discount", "Orders", "Products"],
  Order_DetailsWhereUniqueInput: ["OrderID_ProductID"],
  Order_DetailsOrderByWithAggregationInput: ["OrderID", "ProductID", "UnitPrice", "Quantity", "Discount", "_count", "_avg", "_max", "_min", "_sum"],
  Order_DetailsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "OrderID", "ProductID", "UnitPrice", "Quantity", "Discount"],
  OrdersWhereInput: ["AND", "OR", "NOT", "OrderID", "CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "Customers", "Employees", "Shippers", "Order_Details"],
  OrdersOrderByWithRelationInput: ["OrderID", "CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "Customers", "Employees", "Shippers", "Order_Details"],
  OrdersWhereUniqueInput: ["OrderID"],
  OrdersOrderByWithAggregationInput: ["OrderID", "CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "_count", "_avg", "_max", "_min", "_sum"],
  OrdersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "OrderID", "CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry"],
  ProductsWhereInput: ["AND", "OR", "NOT", "ProductID", "ProductName", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued", "Categories", "Suppliers", "Order_Details"],
  ProductsOrderByWithRelationInput: ["ProductID", "ProductName", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued", "Categories", "Suppliers", "Order_Details"],
  ProductsWhereUniqueInput: ["ProductID"],
  ProductsOrderByWithAggregationInput: ["ProductID", "ProductName", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued", "_count", "_avg", "_max", "_min", "_sum"],
  ProductsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "ProductID", "ProductName", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued"],
  RegionWhereInput: ["AND", "OR", "NOT", "RegionID", "RegionDescription", "Territories"],
  RegionOrderByWithRelationInput: ["RegionID", "RegionDescription", "Territories"],
  RegionWhereUniqueInput: ["RegionID"],
  RegionOrderByWithAggregationInput: ["RegionID", "RegionDescription", "_count", "_avg", "_max", "_min", "_sum"],
  RegionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "RegionID", "RegionDescription"],
  ShippersWhereInput: ["AND", "OR", "NOT", "ShipperID", "CompanyName", "Phone", "Orders"],
  ShippersOrderByWithRelationInput: ["ShipperID", "CompanyName", "Phone", "Orders"],
  ShippersWhereUniqueInput: ["ShipperID"],
  ShippersOrderByWithAggregationInput: ["ShipperID", "CompanyName", "Phone", "_count", "_avg", "_max", "_min", "_sum"],
  ShippersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "ShipperID", "CompanyName", "Phone"],
  SuppliersWhereInput: ["AND", "OR", "NOT", "SupplierID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage", "Products"],
  SuppliersOrderByWithRelationInput: ["SupplierID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage", "Products"],
  SuppliersWhereUniqueInput: ["SupplierID"],
  SuppliersOrderByWithAggregationInput: ["SupplierID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage", "_count", "_avg", "_max", "_min", "_sum"],
  SuppliersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "SupplierID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage"],
  TerritoriesWhereInput: ["AND", "OR", "NOT", "TerritoryID", "TerritoryDescription", "RegionID", "Region", "EmployeeTerritories"],
  TerritoriesOrderByWithRelationInput: ["TerritoryID", "TerritoryDescription", "RegionID", "Region", "EmployeeTerritories"],
  TerritoriesWhereUniqueInput: ["TerritoryID"],
  TerritoriesOrderByWithAggregationInput: ["TerritoryID", "TerritoryDescription", "RegionID", "_count", "_avg", "_max", "_min", "_sum"],
  TerritoriesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "TerritoryID", "TerritoryDescription", "RegionID"],
  CategoriesCreateInput: ["CategoryName", "Description", "Picture", "Products"],
  CategoriesUpdateInput: ["CategoryName", "Description", "Picture", "Products"],
  CategoriesCreateManyInput: ["CategoryName", "Description", "Picture"],
  CategoriesUpdateManyMutationInput: ["CategoryName", "Description", "Picture"],
  CustomerCustomerDemoCreateInput: ["Customers", "CustomerDemographics"],
  CustomerCustomerDemoUpdateInput: ["Customers", "CustomerDemographics"],
  CustomerCustomerDemoCreateManyInput: ["CustomerID", "CustomerTypeID"],
  CustomerCustomerDemoUpdateManyMutationInput: [],
  CustomerDemographicsCreateInput: ["CustomerTypeID", "CustomerDesc", "CustomerCustomerDemo"],
  CustomerDemographicsUpdateInput: ["CustomerTypeID", "CustomerDesc", "CustomerCustomerDemo"],
  CustomerDemographicsCreateManyInput: ["CustomerTypeID", "CustomerDesc"],
  CustomerDemographicsUpdateManyMutationInput: ["CustomerTypeID", "CustomerDesc"],
  CustomersCreateInput: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "CustomerCustomerDemo", "Orders"],
  CustomersUpdateInput: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "CustomerCustomerDemo", "Orders"],
  CustomersCreateManyInput: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax"],
  CustomersUpdateManyMutationInput: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax"],
  EmployeesCreateInput: ["LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "PhotoPath", "Employees", "other_Employees", "EmployeeTerritories", "Orders"],
  EmployeesUpdateInput: ["LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "PhotoPath", "Employees", "other_Employees", "EmployeeTerritories", "Orders"],
  EmployeesCreateManyInput: ["LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "ReportsTo", "PhotoPath"],
  EmployeesUpdateManyMutationInput: ["LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "PhotoPath"],
  EmployeeTerritoriesCreateInput: ["Employees", "Territories"],
  EmployeeTerritoriesUpdateInput: ["Employees", "Territories"],
  EmployeeTerritoriesCreateManyInput: ["EmployeeID", "TerritoryID"],
  EmployeeTerritoriesUpdateManyMutationInput: [],
  Order_DetailsCreateInput: ["UnitPrice", "Quantity", "Discount", "Orders", "Products"],
  Order_DetailsUpdateInput: ["UnitPrice", "Quantity", "Discount", "Orders", "Products"],
  Order_DetailsCreateManyInput: ["OrderID", "ProductID", "UnitPrice", "Quantity", "Discount"],
  Order_DetailsUpdateManyMutationInput: ["UnitPrice", "Quantity", "Discount"],
  OrdersCreateInput: ["OrderDate", "RequiredDate", "ShippedDate", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "Customers", "Employees", "Shippers", "Order_Details"],
  OrdersUpdateInput: ["OrderDate", "RequiredDate", "ShippedDate", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "Customers", "Employees", "Shippers", "Order_Details"],
  OrdersCreateManyInput: ["CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry"],
  OrdersUpdateManyMutationInput: ["OrderDate", "RequiredDate", "ShippedDate", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry"],
  ProductsCreateInput: ["ProductName", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued", "Categories", "Suppliers", "Order_Details"],
  ProductsUpdateInput: ["ProductName", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued", "Categories", "Suppliers", "Order_Details"],
  ProductsCreateManyInput: ["ProductName", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued"],
  ProductsUpdateManyMutationInput: ["ProductName", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued"],
  RegionCreateInput: ["RegionID", "RegionDescription", "Territories"],
  RegionUpdateInput: ["RegionID", "RegionDescription", "Territories"],
  RegionCreateManyInput: ["RegionID", "RegionDescription"],
  RegionUpdateManyMutationInput: ["RegionID", "RegionDescription"],
  ShippersCreateInput: ["CompanyName", "Phone", "Orders"],
  ShippersUpdateInput: ["CompanyName", "Phone", "Orders"],
  ShippersCreateManyInput: ["CompanyName", "Phone"],
  ShippersUpdateManyMutationInput: ["CompanyName", "Phone"],
  SuppliersCreateInput: ["CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage", "Products"],
  SuppliersUpdateInput: ["CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage", "Products"],
  SuppliersCreateManyInput: ["CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage"],
  SuppliersUpdateManyMutationInput: ["CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage"],
  TerritoriesCreateInput: ["TerritoryID", "TerritoryDescription", "Region", "EmployeeTerritories"],
  TerritoriesUpdateInput: ["TerritoryID", "TerritoryDescription", "Region", "EmployeeTerritories"],
  TerritoriesCreateManyInput: ["TerritoryID", "TerritoryDescription", "RegionID"],
  TerritoriesUpdateManyMutationInput: ["TerritoryID", "TerritoryDescription"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  BytesNullableFilter: ["equals", "in", "notIn", "not"],
  ProductsListRelationFilter: ["every", "some", "none"],
  ProductsOrderByRelationAggregateInput: ["_count"],
  CategoriesCountOrderByAggregateInput: ["CategoryID", "CategoryName", "Description", "Picture"],
  CategoriesAvgOrderByAggregateInput: ["CategoryID"],
  CategoriesMaxOrderByAggregateInput: ["CategoryID", "CategoryName", "Description", "Picture"],
  CategoriesMinOrderByAggregateInput: ["CategoryID", "CategoryName", "Description", "Picture"],
  CategoriesSumOrderByAggregateInput: ["CategoryID"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  BytesNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  CustomersRelationFilter: ["is", "isNot"],
  CustomerDemographicsRelationFilter: ["is", "isNot"],
  CustomerCustomerDemoCustomerIDCustomerTypeIDCompoundUniqueInput: ["CustomerID", "CustomerTypeID"],
  CustomerCustomerDemoCountOrderByAggregateInput: ["CustomerID", "CustomerTypeID"],
  CustomerCustomerDemoMaxOrderByAggregateInput: ["CustomerID", "CustomerTypeID"],
  CustomerCustomerDemoMinOrderByAggregateInput: ["CustomerID", "CustomerTypeID"],
  CustomerCustomerDemoListRelationFilter: ["every", "some", "none"],
  CustomerCustomerDemoOrderByRelationAggregateInput: ["_count"],
  CustomerDemographicsCountOrderByAggregateInput: ["CustomerTypeID", "CustomerDesc"],
  CustomerDemographicsMaxOrderByAggregateInput: ["CustomerTypeID", "CustomerDesc"],
  CustomerDemographicsMinOrderByAggregateInput: ["CustomerTypeID", "CustomerDesc"],
  OrdersListRelationFilter: ["every", "some", "none"],
  OrdersOrderByRelationAggregateInput: ["_count"],
  CustomersCountOrderByAggregateInput: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax"],
  CustomersMaxOrderByAggregateInput: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax"],
  CustomersMinOrderByAggregateInput: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EmployeesRelationFilter: ["is", "isNot"],
  EmployeesListRelationFilter: ["every", "some", "none"],
  EmployeeTerritoriesListRelationFilter: ["every", "some", "none"],
  EmployeesOrderByRelationAggregateInput: ["_count"],
  EmployeeTerritoriesOrderByRelationAggregateInput: ["_count"],
  EmployeesCountOrderByAggregateInput: ["EmployeeID", "LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "ReportsTo", "PhotoPath"],
  EmployeesAvgOrderByAggregateInput: ["EmployeeID", "ReportsTo"],
  EmployeesMaxOrderByAggregateInput: ["EmployeeID", "LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "ReportsTo", "PhotoPath"],
  EmployeesMinOrderByAggregateInput: ["EmployeeID", "LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "ReportsTo", "PhotoPath"],
  EmployeesSumOrderByAggregateInput: ["EmployeeID", "ReportsTo"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  TerritoriesRelationFilter: ["is", "isNot"],
  EmployeeTerritoriesEmployeeIDTerritoryIDCompoundUniqueInput: ["EmployeeID", "TerritoryID"],
  EmployeeTerritoriesCountOrderByAggregateInput: ["EmployeeID", "TerritoryID"],
  EmployeeTerritoriesAvgOrderByAggregateInput: ["EmployeeID"],
  EmployeeTerritoriesMaxOrderByAggregateInput: ["EmployeeID", "TerritoryID"],
  EmployeeTerritoriesMinOrderByAggregateInput: ["EmployeeID", "TerritoryID"],
  EmployeeTerritoriesSumOrderByAggregateInput: ["EmployeeID"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  OrdersRelationFilter: ["is", "isNot"],
  ProductsRelationFilter: ["is", "isNot"],
  Order_DetailsOrderIDProductIDCompoundUniqueInput: ["OrderID", "ProductID"],
  Order_DetailsCountOrderByAggregateInput: ["OrderID", "ProductID", "UnitPrice", "Quantity", "Discount"],
  Order_DetailsAvgOrderByAggregateInput: ["OrderID", "ProductID", "UnitPrice", "Quantity", "Discount"],
  Order_DetailsMaxOrderByAggregateInput: ["OrderID", "ProductID", "UnitPrice", "Quantity", "Discount"],
  Order_DetailsMinOrderByAggregateInput: ["OrderID", "ProductID", "UnitPrice", "Quantity", "Discount"],
  Order_DetailsSumOrderByAggregateInput: ["OrderID", "ProductID", "UnitPrice", "Quantity", "Discount"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  FloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ShippersRelationFilter: ["is", "isNot"],
  Order_DetailsListRelationFilter: ["every", "some", "none"],
  Order_DetailsOrderByRelationAggregateInput: ["_count"],
  OrdersCountOrderByAggregateInput: ["OrderID", "CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry"],
  OrdersAvgOrderByAggregateInput: ["OrderID", "EmployeeID", "ShipVia", "Freight"],
  OrdersMaxOrderByAggregateInput: ["OrderID", "CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry"],
  OrdersMinOrderByAggregateInput: ["OrderID", "CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry"],
  OrdersSumOrderByAggregateInput: ["OrderID", "EmployeeID", "ShipVia", "Freight"],
  FloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolFilter: ["equals", "not"],
  CategoriesRelationFilter: ["is", "isNot"],
  SuppliersRelationFilter: ["is", "isNot"],
  ProductsCountOrderByAggregateInput: ["ProductID", "ProductName", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued"],
  ProductsAvgOrderByAggregateInput: ["ProductID", "SupplierID", "CategoryID", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel"],
  ProductsMaxOrderByAggregateInput: ["ProductID", "ProductName", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued"],
  ProductsMinOrderByAggregateInput: ["ProductID", "ProductName", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued"],
  ProductsSumOrderByAggregateInput: ["ProductID", "SupplierID", "CategoryID", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  TerritoriesListRelationFilter: ["every", "some", "none"],
  TerritoriesOrderByRelationAggregateInput: ["_count"],
  RegionCountOrderByAggregateInput: ["RegionID", "RegionDescription"],
  RegionAvgOrderByAggregateInput: ["RegionID"],
  RegionMaxOrderByAggregateInput: ["RegionID", "RegionDescription"],
  RegionMinOrderByAggregateInput: ["RegionID", "RegionDescription"],
  RegionSumOrderByAggregateInput: ["RegionID"],
  ShippersCountOrderByAggregateInput: ["ShipperID", "CompanyName", "Phone"],
  ShippersAvgOrderByAggregateInput: ["ShipperID"],
  ShippersMaxOrderByAggregateInput: ["ShipperID", "CompanyName", "Phone"],
  ShippersMinOrderByAggregateInput: ["ShipperID", "CompanyName", "Phone"],
  ShippersSumOrderByAggregateInput: ["ShipperID"],
  SuppliersCountOrderByAggregateInput: ["SupplierID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage"],
  SuppliersAvgOrderByAggregateInput: ["SupplierID"],
  SuppliersMaxOrderByAggregateInput: ["SupplierID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage"],
  SuppliersMinOrderByAggregateInput: ["SupplierID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage"],
  SuppliersSumOrderByAggregateInput: ["SupplierID"],
  RegionRelationFilter: ["is", "isNot"],
  TerritoriesCountOrderByAggregateInput: ["TerritoryID", "TerritoryDescription", "RegionID"],
  TerritoriesAvgOrderByAggregateInput: ["RegionID"],
  TerritoriesMaxOrderByAggregateInput: ["TerritoryID", "TerritoryDescription", "RegionID"],
  TerritoriesMinOrderByAggregateInput: ["TerritoryID", "TerritoryDescription", "RegionID"],
  TerritoriesSumOrderByAggregateInput: ["RegionID"],
  ProductsCreateNestedManyWithoutCategoriesInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableBytesFieldUpdateOperationsInput: ["set"],
  ProductsUpdateManyWithoutCategoriesNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  CustomersCreateNestedOneWithoutCustomerCustomerDemoInput: ["create", "connectOrCreate", "connect"],
  CustomerDemographicsCreateNestedOneWithoutCustomerCustomerDemoInput: ["create", "connectOrCreate", "connect"],
  CustomersUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CustomerDemographicsUpdateOneRequiredWithoutCustomerCustomerDemoNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CustomerCustomerDemoCreateNestedManyWithoutCustomerDemographicsInput: ["create", "connectOrCreate", "createMany", "connect"],
  CustomerCustomerDemoUpdateManyWithoutCustomerDemographicsNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CustomerCustomerDemoCreateNestedManyWithoutCustomersInput: ["create", "connectOrCreate", "createMany", "connect"],
  OrdersCreateNestedManyWithoutCustomersInput: ["create", "connectOrCreate", "createMany", "connect"],
  CustomerCustomerDemoUpdateManyWithoutCustomersNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OrdersUpdateManyWithoutCustomersNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  EmployeesCreateNestedOneWithoutOther_EmployeesInput: ["create", "connectOrCreate", "connect"],
  EmployeesCreateNestedManyWithoutEmployeesInput: ["create", "connectOrCreate", "createMany", "connect"],
  EmployeeTerritoriesCreateNestedManyWithoutEmployeesInput: ["create", "connectOrCreate", "createMany", "connect"],
  OrdersCreateNestedManyWithoutEmployeesInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  EmployeesUpdateOneWithoutOther_EmployeesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  EmployeesUpdateManyWithoutEmployeesNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  EmployeeTerritoriesUpdateManyWithoutEmployeesNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OrdersUpdateManyWithoutEmployeesNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EmployeesCreateNestedOneWithoutEmployeeTerritoriesInput: ["create", "connectOrCreate", "connect"],
  TerritoriesCreateNestedOneWithoutEmployeeTerritoriesInput: ["create", "connectOrCreate", "connect"],
  EmployeesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TerritoriesUpdateOneRequiredWithoutEmployeeTerritoriesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  OrdersCreateNestedOneWithoutOrder_DetailsInput: ["create", "connectOrCreate", "connect"],
  ProductsCreateNestedOneWithoutOrder_DetailsInput: ["create", "connectOrCreate", "connect"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  OrdersUpdateOneRequiredWithoutOrder_DetailsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ProductsUpdateOneRequiredWithoutOrder_DetailsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CustomersCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
  EmployeesCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
  ShippersCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
  Order_DetailsCreateNestedManyWithoutOrdersInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableFloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  CustomersUpdateOneWithoutOrdersNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  EmployeesUpdateOneWithoutOrdersNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ShippersUpdateOneWithoutOrdersNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  Order_DetailsUpdateManyWithoutOrdersNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CategoriesCreateNestedOneWithoutProductsInput: ["create", "connectOrCreate", "connect"],
  SuppliersCreateNestedOneWithoutProductsInput: ["create", "connectOrCreate", "connect"],
  Order_DetailsCreateNestedManyWithoutProductsInput: ["create", "connectOrCreate", "createMany", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  CategoriesUpdateOneWithoutProductsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  SuppliersUpdateOneWithoutProductsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  Order_DetailsUpdateManyWithoutProductsNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TerritoriesCreateNestedManyWithoutRegionInput: ["create", "connectOrCreate", "createMany", "connect"],
  TerritoriesUpdateManyWithoutRegionNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  OrdersCreateNestedManyWithoutShippersInput: ["create", "connectOrCreate", "createMany", "connect"],
  OrdersUpdateManyWithoutShippersNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ProductsCreateNestedManyWithoutSuppliersInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProductsUpdateManyWithoutSuppliersNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  RegionCreateNestedOneWithoutTerritoriesInput: ["create", "connectOrCreate", "connect"],
  EmployeeTerritoriesCreateNestedManyWithoutTerritoriesInput: ["create", "connectOrCreate", "createMany", "connect"],
  RegionUpdateOneRequiredWithoutTerritoriesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EmployeeTerritoriesUpdateManyWithoutTerritoriesNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBytesNullableFilter: ["equals", "in", "notIn", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBytesNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  ProductsCreateWithoutCategoriesInput: ["ProductName", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued", "Suppliers", "Order_Details"],
  ProductsCreateOrConnectWithoutCategoriesInput: ["where", "create"],
  ProductsCreateManyCategoriesInputEnvelope: ["data"],
  ProductsUpsertWithWhereUniqueWithoutCategoriesInput: ["where", "update", "create"],
  ProductsUpdateWithWhereUniqueWithoutCategoriesInput: ["where", "data"],
  ProductsUpdateManyWithWhereWithoutCategoriesInput: ["where", "data"],
  ProductsScalarWhereInput: ["AND", "OR", "NOT", "ProductID", "ProductName", "SupplierID", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued"],
  CustomersCreateWithoutCustomerCustomerDemoInput: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "Orders"],
  CustomersCreateOrConnectWithoutCustomerCustomerDemoInput: ["where", "create"],
  CustomerDemographicsCreateWithoutCustomerCustomerDemoInput: ["CustomerTypeID", "CustomerDesc"],
  CustomerDemographicsCreateOrConnectWithoutCustomerCustomerDemoInput: ["where", "create"],
  CustomersUpsertWithoutCustomerCustomerDemoInput: ["update", "create"],
  CustomersUpdateWithoutCustomerCustomerDemoInput: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "Orders"],
  CustomerDemographicsUpsertWithoutCustomerCustomerDemoInput: ["update", "create"],
  CustomerDemographicsUpdateWithoutCustomerCustomerDemoInput: ["CustomerTypeID", "CustomerDesc"],
  CustomerCustomerDemoCreateWithoutCustomerDemographicsInput: ["Customers"],
  CustomerCustomerDemoCreateOrConnectWithoutCustomerDemographicsInput: ["where", "create"],
  CustomerCustomerDemoCreateManyCustomerDemographicsInputEnvelope: ["data"],
  CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomerDemographicsInput: ["where", "update", "create"],
  CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomerDemographicsInput: ["where", "data"],
  CustomerCustomerDemoUpdateManyWithWhereWithoutCustomerDemographicsInput: ["where", "data"],
  CustomerCustomerDemoScalarWhereInput: ["AND", "OR", "NOT", "CustomerID", "CustomerTypeID"],
  CustomerCustomerDemoCreateWithoutCustomersInput: ["CustomerDemographics"],
  CustomerCustomerDemoCreateOrConnectWithoutCustomersInput: ["where", "create"],
  CustomerCustomerDemoCreateManyCustomersInputEnvelope: ["data"],
  OrdersCreateWithoutCustomersInput: ["OrderDate", "RequiredDate", "ShippedDate", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "Employees", "Shippers", "Order_Details"],
  OrdersCreateOrConnectWithoutCustomersInput: ["where", "create"],
  OrdersCreateManyCustomersInputEnvelope: ["data"],
  CustomerCustomerDemoUpsertWithWhereUniqueWithoutCustomersInput: ["where", "update", "create"],
  CustomerCustomerDemoUpdateWithWhereUniqueWithoutCustomersInput: ["where", "data"],
  CustomerCustomerDemoUpdateManyWithWhereWithoutCustomersInput: ["where", "data"],
  OrdersUpsertWithWhereUniqueWithoutCustomersInput: ["where", "update", "create"],
  OrdersUpdateWithWhereUniqueWithoutCustomersInput: ["where", "data"],
  OrdersUpdateManyWithWhereWithoutCustomersInput: ["where", "data"],
  OrdersScalarWhereInput: ["AND", "OR", "NOT", "OrderID", "CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry"],
  EmployeesCreateWithoutOther_EmployeesInput: ["LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "PhotoPath", "Employees", "EmployeeTerritories", "Orders"],
  EmployeesCreateOrConnectWithoutOther_EmployeesInput: ["where", "create"],
  EmployeesCreateWithoutEmployeesInput: ["LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "PhotoPath", "other_Employees", "EmployeeTerritories", "Orders"],
  EmployeesCreateOrConnectWithoutEmployeesInput: ["where", "create"],
  EmployeesCreateManyEmployeesInputEnvelope: ["data"],
  EmployeeTerritoriesCreateWithoutEmployeesInput: ["Territories"],
  EmployeeTerritoriesCreateOrConnectWithoutEmployeesInput: ["where", "create"],
  EmployeeTerritoriesCreateManyEmployeesInputEnvelope: ["data"],
  OrdersCreateWithoutEmployeesInput: ["OrderDate", "RequiredDate", "ShippedDate", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "Customers", "Shippers", "Order_Details"],
  OrdersCreateOrConnectWithoutEmployeesInput: ["where", "create"],
  OrdersCreateManyEmployeesInputEnvelope: ["data"],
  EmployeesUpsertWithoutOther_EmployeesInput: ["update", "create"],
  EmployeesUpdateWithoutOther_EmployeesInput: ["LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "PhotoPath", "Employees", "EmployeeTerritories", "Orders"],
  EmployeesUpsertWithWhereUniqueWithoutEmployeesInput: ["where", "update", "create"],
  EmployeesUpdateWithWhereUniqueWithoutEmployeesInput: ["where", "data"],
  EmployeesUpdateManyWithWhereWithoutEmployeesInput: ["where", "data"],
  EmployeesScalarWhereInput: ["AND", "OR", "NOT", "EmployeeID", "LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "ReportsTo", "PhotoPath"],
  EmployeeTerritoriesUpsertWithWhereUniqueWithoutEmployeesInput: ["where", "update", "create"],
  EmployeeTerritoriesUpdateWithWhereUniqueWithoutEmployeesInput: ["where", "data"],
  EmployeeTerritoriesUpdateManyWithWhereWithoutEmployeesInput: ["where", "data"],
  EmployeeTerritoriesScalarWhereInput: ["AND", "OR", "NOT", "EmployeeID", "TerritoryID"],
  OrdersUpsertWithWhereUniqueWithoutEmployeesInput: ["where", "update", "create"],
  OrdersUpdateWithWhereUniqueWithoutEmployeesInput: ["where", "data"],
  OrdersUpdateManyWithWhereWithoutEmployeesInput: ["where", "data"],
  EmployeesCreateWithoutEmployeeTerritoriesInput: ["LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "PhotoPath", "Employees", "other_Employees", "Orders"],
  EmployeesCreateOrConnectWithoutEmployeeTerritoriesInput: ["where", "create"],
  TerritoriesCreateWithoutEmployeeTerritoriesInput: ["TerritoryID", "TerritoryDescription", "Region"],
  TerritoriesCreateOrConnectWithoutEmployeeTerritoriesInput: ["where", "create"],
  EmployeesUpsertWithoutEmployeeTerritoriesInput: ["update", "create"],
  EmployeesUpdateWithoutEmployeeTerritoriesInput: ["LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "PhotoPath", "Employees", "other_Employees", "Orders"],
  TerritoriesUpsertWithoutEmployeeTerritoriesInput: ["update", "create"],
  TerritoriesUpdateWithoutEmployeeTerritoriesInput: ["TerritoryID", "TerritoryDescription", "Region"],
  OrdersCreateWithoutOrder_DetailsInput: ["OrderDate", "RequiredDate", "ShippedDate", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "Customers", "Employees", "Shippers"],
  OrdersCreateOrConnectWithoutOrder_DetailsInput: ["where", "create"],
  ProductsCreateWithoutOrder_DetailsInput: ["ProductName", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued", "Categories", "Suppliers"],
  ProductsCreateOrConnectWithoutOrder_DetailsInput: ["where", "create"],
  OrdersUpsertWithoutOrder_DetailsInput: ["update", "create"],
  OrdersUpdateWithoutOrder_DetailsInput: ["OrderDate", "RequiredDate", "ShippedDate", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "Customers", "Employees", "Shippers"],
  ProductsUpsertWithoutOrder_DetailsInput: ["update", "create"],
  ProductsUpdateWithoutOrder_DetailsInput: ["ProductName", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued", "Categories", "Suppliers"],
  CustomersCreateWithoutOrdersInput: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "CustomerCustomerDemo"],
  CustomersCreateOrConnectWithoutOrdersInput: ["where", "create"],
  EmployeesCreateWithoutOrdersInput: ["LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "PhotoPath", "Employees", "other_Employees", "EmployeeTerritories"],
  EmployeesCreateOrConnectWithoutOrdersInput: ["where", "create"],
  ShippersCreateWithoutOrdersInput: ["CompanyName", "Phone"],
  ShippersCreateOrConnectWithoutOrdersInput: ["where", "create"],
  Order_DetailsCreateWithoutOrdersInput: ["UnitPrice", "Quantity", "Discount", "Products"],
  Order_DetailsCreateOrConnectWithoutOrdersInput: ["where", "create"],
  Order_DetailsCreateManyOrdersInputEnvelope: ["data"],
  CustomersUpsertWithoutOrdersInput: ["update", "create"],
  CustomersUpdateWithoutOrdersInput: ["CustomerID", "CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "CustomerCustomerDemo"],
  EmployeesUpsertWithoutOrdersInput: ["update", "create"],
  EmployeesUpdateWithoutOrdersInput: ["LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "PhotoPath", "Employees", "other_Employees", "EmployeeTerritories"],
  ShippersUpsertWithoutOrdersInput: ["update", "create"],
  ShippersUpdateWithoutOrdersInput: ["CompanyName", "Phone"],
  Order_DetailsUpsertWithWhereUniqueWithoutOrdersInput: ["where", "update", "create"],
  Order_DetailsUpdateWithWhereUniqueWithoutOrdersInput: ["where", "data"],
  Order_DetailsUpdateManyWithWhereWithoutOrdersInput: ["where", "data"],
  Order_DetailsScalarWhereInput: ["AND", "OR", "NOT", "OrderID", "ProductID", "UnitPrice", "Quantity", "Discount"],
  CategoriesCreateWithoutProductsInput: ["CategoryName", "Description", "Picture"],
  CategoriesCreateOrConnectWithoutProductsInput: ["where", "create"],
  SuppliersCreateWithoutProductsInput: ["CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage"],
  SuppliersCreateOrConnectWithoutProductsInput: ["where", "create"],
  Order_DetailsCreateWithoutProductsInput: ["UnitPrice", "Quantity", "Discount", "Orders"],
  Order_DetailsCreateOrConnectWithoutProductsInput: ["where", "create"],
  Order_DetailsCreateManyProductsInputEnvelope: ["data"],
  CategoriesUpsertWithoutProductsInput: ["update", "create"],
  CategoriesUpdateWithoutProductsInput: ["CategoryName", "Description", "Picture"],
  SuppliersUpsertWithoutProductsInput: ["update", "create"],
  SuppliersUpdateWithoutProductsInput: ["CompanyName", "ContactName", "ContactTitle", "Address", "City", "Region", "PostalCode", "Country", "Phone", "Fax", "HomePage"],
  Order_DetailsUpsertWithWhereUniqueWithoutProductsInput: ["where", "update", "create"],
  Order_DetailsUpdateWithWhereUniqueWithoutProductsInput: ["where", "data"],
  Order_DetailsUpdateManyWithWhereWithoutProductsInput: ["where", "data"],
  TerritoriesCreateWithoutRegionInput: ["TerritoryID", "TerritoryDescription", "EmployeeTerritories"],
  TerritoriesCreateOrConnectWithoutRegionInput: ["where", "create"],
  TerritoriesCreateManyRegionInputEnvelope: ["data"],
  TerritoriesUpsertWithWhereUniqueWithoutRegionInput: ["where", "update", "create"],
  TerritoriesUpdateWithWhereUniqueWithoutRegionInput: ["where", "data"],
  TerritoriesUpdateManyWithWhereWithoutRegionInput: ["where", "data"],
  TerritoriesScalarWhereInput: ["AND", "OR", "NOT", "TerritoryID", "TerritoryDescription", "RegionID"],
  OrdersCreateWithoutShippersInput: ["OrderDate", "RequiredDate", "ShippedDate", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "Customers", "Employees", "Order_Details"],
  OrdersCreateOrConnectWithoutShippersInput: ["where", "create"],
  OrdersCreateManyShippersInputEnvelope: ["data"],
  OrdersUpsertWithWhereUniqueWithoutShippersInput: ["where", "update", "create"],
  OrdersUpdateWithWhereUniqueWithoutShippersInput: ["where", "data"],
  OrdersUpdateManyWithWhereWithoutShippersInput: ["where", "data"],
  ProductsCreateWithoutSuppliersInput: ["ProductName", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued", "Categories", "Order_Details"],
  ProductsCreateOrConnectWithoutSuppliersInput: ["where", "create"],
  ProductsCreateManySuppliersInputEnvelope: ["data"],
  ProductsUpsertWithWhereUniqueWithoutSuppliersInput: ["where", "update", "create"],
  ProductsUpdateWithWhereUniqueWithoutSuppliersInput: ["where", "data"],
  ProductsUpdateManyWithWhereWithoutSuppliersInput: ["where", "data"],
  RegionCreateWithoutTerritoriesInput: ["RegionID", "RegionDescription"],
  RegionCreateOrConnectWithoutTerritoriesInput: ["where", "create"],
  EmployeeTerritoriesCreateWithoutTerritoriesInput: ["Employees"],
  EmployeeTerritoriesCreateOrConnectWithoutTerritoriesInput: ["where", "create"],
  EmployeeTerritoriesCreateManyTerritoriesInputEnvelope: ["data"],
  RegionUpsertWithoutTerritoriesInput: ["update", "create"],
  RegionUpdateWithoutTerritoriesInput: ["RegionID", "RegionDescription"],
  EmployeeTerritoriesUpsertWithWhereUniqueWithoutTerritoriesInput: ["where", "update", "create"],
  EmployeeTerritoriesUpdateWithWhereUniqueWithoutTerritoriesInput: ["where", "data"],
  EmployeeTerritoriesUpdateManyWithWhereWithoutTerritoriesInput: ["where", "data"],
  ProductsCreateManyCategoriesInput: ["ProductName", "SupplierID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued"],
  ProductsUpdateWithoutCategoriesInput: ["ProductName", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued", "Suppliers", "Order_Details"],
  CustomerCustomerDemoCreateManyCustomerDemographicsInput: ["CustomerID"],
  CustomerCustomerDemoUpdateWithoutCustomerDemographicsInput: ["Customers"],
  CustomerCustomerDemoCreateManyCustomersInput: ["CustomerTypeID"],
  OrdersCreateManyCustomersInput: ["EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry"],
  CustomerCustomerDemoUpdateWithoutCustomersInput: ["CustomerDemographics"],
  OrdersUpdateWithoutCustomersInput: ["OrderDate", "RequiredDate", "ShippedDate", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "Employees", "Shippers", "Order_Details"],
  EmployeesCreateManyEmployeesInput: ["LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "PhotoPath"],
  EmployeeTerritoriesCreateManyEmployeesInput: ["TerritoryID"],
  OrdersCreateManyEmployeesInput: ["CustomerID", "OrderDate", "RequiredDate", "ShippedDate", "ShipVia", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry"],
  EmployeesUpdateWithoutEmployeesInput: ["LastName", "FirstName", "Title", "TitleOfCourtesy", "BirthDate", "HireDate", "Address", "City", "Region", "PostalCode", "Country", "HomePhone", "Extension", "Photo", "Notes", "PhotoPath", "other_Employees", "EmployeeTerritories", "Orders"],
  EmployeeTerritoriesUpdateWithoutEmployeesInput: ["Territories"],
  OrdersUpdateWithoutEmployeesInput: ["OrderDate", "RequiredDate", "ShippedDate", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "Customers", "Shippers", "Order_Details"],
  Order_DetailsCreateManyOrdersInput: ["ProductID", "UnitPrice", "Quantity", "Discount"],
  Order_DetailsUpdateWithoutOrdersInput: ["UnitPrice", "Quantity", "Discount", "Products"],
  Order_DetailsCreateManyProductsInput: ["OrderID", "UnitPrice", "Quantity", "Discount"],
  Order_DetailsUpdateWithoutProductsInput: ["UnitPrice", "Quantity", "Discount", "Orders"],
  TerritoriesCreateManyRegionInput: ["TerritoryID", "TerritoryDescription"],
  TerritoriesUpdateWithoutRegionInput: ["TerritoryID", "TerritoryDescription", "EmployeeTerritories"],
  OrdersCreateManyShippersInput: ["CustomerID", "EmployeeID", "OrderDate", "RequiredDate", "ShippedDate", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry"],
  OrdersUpdateWithoutShippersInput: ["OrderDate", "RequiredDate", "ShippedDate", "Freight", "ShipName", "ShipAddress", "ShipCity", "ShipRegion", "ShipPostalCode", "ShipCountry", "Customers", "Employees", "Order_Details"],
  ProductsCreateManySuppliersInput: ["ProductName", "CategoryID", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued"],
  ProductsUpdateWithoutSuppliersInput: ["ProductName", "QuantityPerUnit", "UnitPrice", "UnitsInStock", "UnitsOnOrder", "ReorderLevel", "Discontinued", "Categories", "Order_Details"],
  EmployeeTerritoriesCreateManyTerritoriesInput: ["EmployeeID"],
  EmployeeTerritoriesUpdateWithoutTerritoriesInput: ["Employees"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

