import { DataOfCaracteristicFeatureInterface } from "../types";

export const productsData: DataOfCaracteristicFeatureInterface[] = [
  {
    displayName: "getProductionRecommendations",
    requestParameters: [
      {
        id: "expiryDate",
        type: "string",
        required: false,
        description: "The date on which the notification should expire.",
      },
    ],
    example: "",
  },
  {
    displayName: "addProductNotification",
    requestParameters: [
      {
        id: "expiryDate",
        type: "string",
        required: false,
        description: "The date on which the notification should expire.",
      },
      {
        id: "productId",
        type: "string",
        required: true,
        description:
          "The ID of the product the notification is being created for.",
      },
      {
        id: "profileId",
        type: "string",
        required: false,
        description: "The profile ID for the user to be notified.",
      },
      {
        id: "siteId",
        type: "string",
        required: true,
        description: "The ID of the site the notification is being sent from.",
      },
      {
        id: "locale ",
        type: "string",
        required: true,
        description: "The user's locale.",
      },
      {
        id: "skuId",
        type: "string",
        required: true,
        description: "The ID of the SKU the notification is being created for.",
      },
      {
        id: "email",
        type: "string",
        required: true,
        description: "The email address to send the notification to.",
      },
    ],
    example: {
      productId: "product1",
      skuId: "sku1",
      siteId: "site1",
      email: "sally@example.com",
      locale: "en",
    },
  },
  {
    displayName: "getProductType",
    requestParameters: [
      {
        id: "typeId ",
        type: "string",
        required: true,
        description: "The ID of the product type to retrieve.",
      },
    ],
    example: { typeId: "productTypeId" },
  },
  {
    displayName: "getProductsPrices",
    requestParameters: [
      {
        id: "productIds",
        type: "array",
        required: true,
        description: "The product IDs.",
      },
    ],
    example: { productIds: ["product1", "product2"] },
  },
  {
    displayName: "listProducts",
    requestParameters: [
      {
        id: "categoryId",
        type: "string",
        required: false,
        description: "The category ID.",
      },
      {
        id: "search",
        type: "string",
        required: false,
        description:
          "A SCIM filter string for selecting a subset of all products. See https://tools.ietf.org/html/draft-ietf-scim-api-12#section-3.2.2section 3.2.2.2 of the SCIM specification for details on the SCIM filter format. Examples: Get all products whose displayName contains shirt: displayName co “shirt” Get all products with an orderLimit between 5 and 10: orderLimit gt 5 and orderLimit lt 10 Text, date and time values appearing in SCIM filters should be quoted, with date and time values using ISO-8601 format. Numeric and boolean values should not be quoted. The following base product properties can be used in a query: * CountryOfOrigin * active * avgCustRating * brand * childSKUs * defaultProductListingSku * description * displayName * height * id * length * longDescription * notForIndividualSale * orderLimit * parentCategories * relatedArticles * relatedMediaContent * type * unitOfMeasure * weight * width Additionally, custom product properties may also be used in a query.",
      },
      {
        id: "priceListGroupId",
        type: "string",
        required: false,
        description:
          "The price list group id for which product prices are to be returned.",
      },
      {
        id: "offset",
        type: "int",
        required: false,
        description: "StartingIndex the index of the first record to load.",
      },
      {
        id: "limit",
        type: "int",
        required: false,
        description: "The maximum number of items to retrieve.",
      },
      {
        id: "useCurrentPageForCollectionId",
        type: "boolean",
        required: false,
        description:
          "Set to true this overrides the categoryID and uses the id associated with the current page.",
      },
      {
        id: "totalResults",
        type: "boolean",
        required: false,
        description:
          "Flag to include count of total products without expansion.",
      },
      {
        id: "productIds",
        type: "array string",
        required: false,
        description: "The list of product IDs.",
      },
      {
        id: "includeChildren",
        type: "boolean",
        required: false,
        description: "Flag to include children of categories or not.",
      },
      {
        id: "sort",
        type: "string",
        required: false,
        description: "Sort Option id: Sort order.",
      },
      {
        id: "totalExpandedResults",
        type: "boolean",
        required: false,
        description:
          "Flag to include count of total products with listing variant expansion.",
      },
      {
        id: "includeChildSKUListingIds",
        type: "boolean",
        required: false,
        description:
          "If this flag is true then listingVariant repository id will be included in each of the childSKU of style based product",
      },
    ],
    example: {
      categoryId: "categoryId",
      search: "orderLimit gt 5 and orderLimit lt 10",
      includeChildren: true,
      offset: 0,
      limit: 12,
      totalResults: true,
    },
  },
  {
    displayName: "moreProducts",
    requestParameters: [
      {
        id: "pageId",
        type: "string",
        required: true,
        description:
          "The id of the page that should be updated with the retrieved products.",
      },
      {
        id: "search",
        type: "string",
        required: false,
        description:
          "A SCIM filter string for selecting a subset of all products. See https://tools.ietf.org/html/draft-ietf-scim-api-12#section-3.2.2section 3.2.2.2 of the SCIM specification for details on the SCIM filter format. Examples: Get all products whose displayName contains shirt: displayName co “shirt” Get all products with an orderLimit between 5 and 10: orderLimit gt 5 and orderLimit lt 10 Text, date and time values appearing in SCIM filters should be quoted, with date and time values using ISO-8601 format. Numeric and boolean values should not be quoted. The following base product properties can be used in a query: * CountryOfOrigin * active * avgCustRating * brand * childSKUs * defaultProductListingSku * description * displayName * height * id * length * longDescription * notForIndividualSale * orderLimit * parentCategories * relatedArticles * relatedMediaContent * type * unitOfMeasure * weight * width Additionally, custom product properties may also be used in a query.",
      },
      {
        id: "priceListGroupId",
        type: "string",
        required: false,
        description:
          "The price list group id for which product prices are to be returned.",
      },
      {
        id: "offset",
        type: "int",
        required: false,
        description: "StartingIndex the index of the first record to load.",
      },
      {
        id: "limit",
        type: "int",
        required: false,
        description: "The maximum number of items to retrieve.",
      },
      {
        id: "categoryId",
        type: "string",
        required: false,
        description:
          "The category ID. Set this or the useCurrentPageForCollectionId property.",
      },
      {
        id: "useCurrentPageForCollectionId",
        type: "boolean",
        required: false,
        description:
          "Set to true this overrides the categoryID and uses the id associated with the current page.",
      },
      {
        id: "totalResults",
        type: "boolean",
        required: false,
        description:
          "Flag to include count of total products without expansion.",
      },
      {
        id: "productIds",
        type: "array string",
        required: false,
        description: "The list of product IDs.",
      },
      {
        id: "includeChildren",
        type: "boolean",
        required: false,
        description: "Flag to include children of categories or not.",
      },
      {
        id: "sort",
        type: "string",
        required: false,
        description: "Sort Option id: Sort order.",
      },
      {
        id: "totalExpandedResults",
        type: "boolean",
        required: false,
        description:
          "Flag to include count of total products with listing variant expansion.",
      },
      {
        id: "includeChildSKUListingIds",
        type: "boolean",
        required: false,
        description:
          "If this flag is true then listingVariant repository id will be included in each of the childSKU of style based product",
      },
    ],
    example: {
      useCurrentPageForCollectionId: true,
      pageId: "current page id",
      search: "orderLimit gt 5 and orderLimit lt 10",
      includeChildren: true,
      offset: 0,
      limit: 12,
      totalResults: true,
    },
  },
  {
    displayName: "getProduct",
    requestParameters: [
      {
        id: "productId",
        type: "string",
        required: true,
        description: "The ID of the product to retrieve.",
      },
      {
        id: "catalogId",
        type: "string",
        required: false,
        description: "The catalog ID.",
      },
      {
        id: "storePriceListGroupId",
        type: "string",
        required: false,
        description:
          "The price list group id for which product prices are to be returned.",
      },
    ],
    example: { productId: "product1" },
  },
  {
    displayName: "addProductNotification",
    requestParameters: [
      {
        id: "expiryDate",
        type: "string",
        required: false,
        description: "The date on which the notification should expire.",
      },
      {
        id: "productId",
        type: "string",
        required: true,
        description:
          "The ID of the product the notification is being created for.",
      },
      {
        id: "profileId",
        type: "string",
        required: false,
        description: "The profile ID for the user to be notified.",
      },
      {
        id: "siteId",
        type: "string",
        required: true,
        description: "The ID of the site the notification is being sent from.",
      },
      {
        id: "locale ",
        type: "string",
        required: true,
        description: "The user's locale.",
      },
      {
        id: "skuId",
        type: "string",
        required: true,
        description: "The ID of the SKU the notification is being created for.",
      },
      {
        id: "email",
        type: "string",
        required: true,
        description: "The email address to send the notification to.",
      },
    ],
    example: {
      productId: "product1",
      skuId: "sku1",
      siteId: "site1",
      email: "sally@example.com",
      locale: "en",
    },
  },
  {
    displayName: "getProductType",
    requestParameters: [
      {
        id: "typeId ",
        type: "string",
        required: true,
        description: "The ID of the product type to retrieve.",
      },
    ],
    example: { typeId: "productTypeId" },
  },
  {
    displayName: "getProductsPrices",
    requestParameters: [
      {
        id: "productIds",
        type: "array",
        required: true,
        description: "The product IDs.",
      },
    ],
    example: { productIds: ["product1", "product2"] },
  },
  {
    displayName: "listProducts",
    requestParameters: [
      {
        id: "categoryId",
        type: "string",
        required: false,
        description: "The category ID.",
      },
      {
        id: "search",
        type: "string",
        required: false,
        description:
          "A SCIM filter string for selecting a subset of all products. See https://tools.ietf.org/html/draft-ietf-scim-api-12#section-3.2.2section 3.2.2.2 of the SCIM specification for details on the SCIM filter format. Examples: Get all products whose displayName contains shirt: displayName co “shirt” Get all products with an orderLimit between 5 and 10: orderLimit gt 5 and orderLimit lt 10 Text, date and time values appearing in SCIM filters should be quoted, with date and time values using ISO-8601 format. Numeric and boolean values should not be quoted. The following base product properties can be used in a query: * CountryOfOrigin * active * avgCustRating * brand * childSKUs * defaultProductListingSku * description * displayName * height * id * length * longDescription * notForIndividualSale * orderLimit * parentCategories * relatedArticles * relatedMediaContent * type * unitOfMeasure * weight * width Additionally, custom product properties may also be used in a query.",
      },
      {
        id: "priceListGroupId",
        type: "string",
        required: false,
        description:
          "The price list group id for which product prices are to be returned.",
      },
      {
        id: "offset",
        type: "int",
        required: false,
        description: "StartingIndex the index of the first record to load.",
      },
      {
        id: "limit",
        type: "int",
        required: false,
        description: "The maximum number of items to retrieve.",
      },
      {
        id: "useCurrentPageForCollectionId",
        type: "boolean",
        required: false,
        description:
          "Set to true this overrides the categoryID and uses the id associated with the current page.",
      },
      {
        id: "totalResults",
        type: "boolean",
        required: false,
        description:
          "Flag to include count of total products without expansion.",
      },
      {
        id: "productIds",
        type: "array string",
        required: false,
        description: "The list of product IDs.",
      },
      {
        id: "includeChildren",
        type: "boolean",
        required: false,
        description: "Flag to include children of categories or not.",
      },
      {
        id: "sort",
        type: "string",
        required: false,
        description: "Sort Option id: Sort order.",
      },
      {
        id: "totalExpandedResults",
        type: "boolean",
        required: false,
        description:
          "Flag to include count of total products with listing variant expansion.",
      },
      {
        id: "includeChildSKUListingIds",
        type: "boolean",
        required: false,
        description:
          "If this flag is true then listingVariant repository id will be included in each of the childSKU of style based product",
      },
    ],
    example: {
      categoryId: "categoryId",
      search: "orderLimit gt 5 and orderLimit lt 10",
      includeChildren: true,
      offset: 0,
      limit: 12,
      totalResults: true,
    },
  },
  {
    displayName: "moreProducts",
    requestParameters: [
      {
        id: "pageId",
        type: "string",
        required: true,
        description:
          "The id of the page that should be updated with the retrieved products.",
      },
      {
        id: "search",
        type: "string",
        required: false,
        description:
          "A SCIM filter string for selecting a subset of all products. See https://tools.ietf.org/html/draft-ietf-scim-api-12#section-3.2.2section 3.2.2.2 of the SCIM specification for details on the SCIM filter format. Examples: Get all products whose displayName contains shirt: displayName co “shirt” Get all products with an orderLimit between 5 and 10: orderLimit gt 5 and orderLimit lt 10 Text, date and time values appearing in SCIM filters should be quoted, with date and time values using ISO-8601 format. Numeric and boolean values should not be quoted. The following base product properties can be used in a query: * CountryOfOrigin * active * avgCustRating * brand * childSKUs * defaultProductListingSku * description * displayName * height * id * length * longDescription * notForIndividualSale * orderLimit * parentCategories * relatedArticles * relatedMediaContent * type * unitOfMeasure * weight * width Additionally, custom product properties may also be used in a query.",
      },
      {
        id: "priceListGroupId",
        type: "string",
        required: false,
        description:
          "The price list group id for which product prices are to be returned.",
      },
      {
        id: "offset",
        type: "int",
        required: false,
        description: "StartingIndex the index of the first record to load.",
      },
      {
        id: "limit",
        type: "int",
        required: false,
        description: "The maximum number of items to retrieve.",
      },
      {
        id: "categoryId",
        type: "string",
        required: false,
        description:
          "The category ID. Set this or the useCurrentPageForCollectionId property.",
      },
      {
        id: "useCurrentPageForCollectionId",
        type: "boolean",
        required: false,
        description:
          "Set to true this overrides the categoryID and uses the id associated with the current page.",
      },
      {
        id: "totalResults",
        type: "boolean",
        required: false,
        description:
          "Flag to include count of total products without expansion.",
      },
      {
        id: "productIds",
        type: "array string",
        required: false,
        description: "The list of product IDs.",
      },
      {
        id: "includeChildren",
        type: "boolean",
        required: false,
        description: "Flag to include children of categories or not.",
      },
      {
        id: "sort",
        type: "string",
        required: false,
        description: "Sort Option id: Sort order.",
      },
      {
        id: "totalExpandedResults",
        type: "boolean",
        required: false,
        description:
          "Flag to include count of total products with listing variant expansion.",
      },
      {
        id: "includeChildSKUListingIds",
        type: "boolean",
        required: false,
        description:
          "If this flag is true then listingVariant repository id will be included in each of the childSKU of style based product",
      },
    ],
    example: {
      useCurrentPageForCollectionId: true,
      pageId: "current page id",
      search: "orderLimit gt 5 and orderLimit lt 10",
      includeChildren: true,
      offset: 0,
      limit: 12,
      totalResults: true,
    },
  },
  {
    displayName: "getProduct",
    requestParameters: [
      {
        id: "productId",
        type: "string",
        required: true,
        description: "The ID of the product to retrieve.",
      },
      {
        id: "catalogId",
        type: "string",
        required: false,
        description: "The catalog ID.",
      },
      {
        id: "storePriceListGroupId",
        type: "string",
        required: false,
        description:
          "The price list group id for which product prices are to be returned.",
      },
    ],
    example: { productId: "product1" },
  },
];
