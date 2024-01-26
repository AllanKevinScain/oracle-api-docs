import { DataOfCaracteristicFeatureInterface } from "../types";

export const cartCheckoutData: DataOfCaracteristicFeatureInterface[] = [
  {
    displayName: "applyCouponsToCart",
    requestParameters: [
      {
        id: "coupons",
        type: "array string",
        required: false,
        description: "array of coupon codes to be applied",
      },
    ],
    example: { coupons: ["SAVE2ON20", "FREESHIPPING"] },
  },
  {
    displayName: "getCart",
    requestParameters: [],
    example: "",
  },
  {
    displayName: "priceCart",
    requestParameters: [
      {
        id: "pricingOperation",
        type: "string",
        required: false,
        description:
          "The pricing operation to be done on current order. Pricing operation can be ORDER_TOTAL or ORDER_SUBTOTAL",
      },
    ],
    example: { pricingOperation: "ORDER_SUBTOTAL" },
  },
  {
    displayName: "removeCouponsFromCart",
    requestParameters: [
      {
        id: "coupons",
        type: "array string",
        required: false,
        description: "array of coupon codes to be removed",
      },
    ],
    example: { coupons: ["SAVE2ON20", "FREESHIPPING"] },
  },
  {
    displayName: "updateCart",
    requestParameters: [
      {
        id: "cartName",
        type: "string",
        required: false,
        description: "Cart name for this order.",
      },
      {
        id: "combineLineItems",
        type: "string",
        required: false,
        description:
          "Value to determine if line items are to be combined. Can be yes or no.",
      },
      {
        id: "shippingGroups",
        type: "string",
        required: false,
        description: "The shipping groups for the order.",
      },
      {
        id: "id",
        type: "string",
        required: false,
        description: "Updates the order corresponding to the passed orderId.",
      },
    ],
    example: {
      shoppingCart: {
        items: [
          {
            quantity: 3,
            productId: "Product_36Exy",
            catRefId: "Sku_36Fxy",
            id: "ci101000413",
            shopperInput: {},
          },
          { quantity: 1, productId: "Product_36Exy", catRefId: "Sku_36Fxy" },
        ],
      },
    },
  },
  {
    displayName: "checkoutCart",
    requestParameters: [
      {
        id: "payments",
        type: "array",
        required: false,
        description:
          "[Schema Incomplete]Payment details for the order, including additional properties specific to the payment type.",
        internalPropperties: [
          {
            id: "PONumber",
            type: "string",
            required: false,
            description: "Purchase order number. Pament type:invoice",
          },
          {
            id: "PayerID",
            type: "string",
            required: false,
            description:
              "Payer ID relevant to paypal checkout type. Payment type:paypalCheckout.",
          },
          {
            id: "amount",
            type: "int",
            required: false,
            description:
              "Credit/Debit card type name. e.g. Visa. Payment type:card.",
          },
          {
            id: "cardTypeName",
            type: "string",
            required: false,
            description:
              "Amount to be authorized. Payment type:invoice,card, physicalGiftCard, paypalCheckout, payUWebLatamCheckout, loyaltyPoints",
          },
          {
            id: "cardType",
            type: "string",
            required: false,
            description:
              "Credit/Debit card type. e.g. visa. Payment type:card.",
          },
          {
            id: "type",
            type: "string",
            required: true,
            description:
              "Payment type. e.g. paypalCheckout, payUWebLatamCheckout, loyaltyPoints.",
          },
          {
            id: "endYear",
            type: "string",
            required: false,
            description: "Credit/Debit card expiry year. Payment type:card.",
          },
          {
            id: "cardCVV",
            type: "string",
            required: false,
            description: "Credit/Debit card secret pin. Payment type:card.",
          },
          {
            id: "paymentGroupId",
            type: "string",
            required: false,
            description:
              "Payment Group Id of the payment group. Payment type:physicalGiftCard, loyaltyPoints",
          },
          {
            id: "nameOnCard",
            type: "string",
            required: false,
            description: "Name on the credit/debit card. Payment type:card.",
          },
          {
            id: "giftCardNumber",
            type: "string",
            required: false,
            description:
              "Gift card number used for payment. Payment type:physicalGiftCard.",
          },
          {
            id: "paymentId",
            type: "string",
            required: false,
            description:
              "Payment ID relevant to the payment type. Payment type:paypalCheckout, payUWebLatamCheckout.",
          },
          {
            id: "giftCardPin",
            type: "string",
            required: false,
            description: "Gift card pin. Payment type:physicalGiftCard.",
          },
          {
            id: "endMonth",
            type: "string",
            required: false,
            description: "Credit/Debit card expiry month. Payment type:card.",
          },
          {
            id: "cardNumber",
            type: "string",
            required: false,
            description:
              "Credit/Debit card number used for payment. Payment type:card.",
          },
        ],
      },
    ],
    example: {
      payments: [
        {
          paymentGroupId: "pg120442",
          amount: "30",
          paymentMethodType: "paypalCheckout",
          type: "paypalCheckout",
          useDefaultBillingAddress: false,
          isDefaultAddressValid: true,
          paymentId: "PAYID-LUFFHFA923465405H3234916",
          token: "EC-1DS593928C162981G",
          PayerID: "X9C9GB43WQ398",
        },
        {
          type: "card",
          amount: "12.79",
          nameOnCard: "Test Shopper",
          cardType: "visa",
          cardNumber: "4111111111111111",
          cardCVV: "111",
          expiryMonth: "01",
          expiryYear: "2022",
          endMonth: "01",
          endYear: "2022",
          billingAddress: {
            alias: "Address",
            prefix: "",
            firstName: "Test",
            middleName: "",
            lastName: "Shopper",
            suffix: "",
            postalCode: "33034",
            address1: "76 E Palm Dr",
            address2: "",
            address3: "",
            city: "Florida City",
            county: "",
            phoneNumber: "",
            jobTitle: "",
            companyName: "",
            faxNumber: "",
            type: "",
            isDefaultBillingAddress: false,
            isDefaultShippingAddress: false,
            country: "US",
            state: "FL",
            isDefaultAddress: true,
            email: null,
          },
        },
        { paymentGroupId: "pg120423", amount: "100", type: "loyaltyPoints" },
      ],
    },
  },
  {
    displayName: "listShippingMethodsForCart",
    requestParameters: [
      {
        id: "shippingGroupIds",
        type: "false array (string)",
        required: false,
        description:
          "Comma seperated list of shipping group ids contained in the cart. Used to provide a subset of the carts shipping groups",
      },
    ],
    example: { shippingGroupIds: "sg40412,sg40413" },
  },
  {
    displayName: "deleteCart",
    requestParameters: [
      {
        id: "orderId",
        type: "string",
        required: false,
        description: "The ID of the incomplete order to delete.",
      },
    ],
    example: { orderId: "o10007" },
  },
  {
    displayName: "listCarts",
    requestParameters: [
      {
        id: "query",
        type: "string",
        required: false,
        description:
          "This field specifies the query used to limit the orders returns. Defaults to RQL. To use SCIM use the queryFormat parameter",
      },
      {
        id: "offset",
        type: "int",
        required: false,
        description: "Starting index.",
      },
      {
        id: "countOnly",
        type: "boolean",
        required: false,
        description: "Only return the count of orders for the current profile.",
      },
      {
        id: "limit",
        type: "int",
        required: false,
        description:
          "Specifies the number of orders to be retrieved starting from offset. In case this is not present, the complete list of orders for the profile is returned.",
      },
    ],
    example: { query: "state eq 'NO_PENDING_ACTION'", offset: 0, limit: 2 },
  },
  {
    displayName: "saveCart",
    requestParameters: [
      {
        id: "cartName",
        type: "string",
        required: true,
        description: "Cart name for current order.",
      },
    ],
    example: { cartName: "cart123" },
  },
  {
    displayName: "switchCart",
    requestParameters: [
      {
        id: "orderId",
        type: "string",
        required: false,
        description: "orderId of the order to switch",
      },
    ],
    example: { orderId: "o30545" },
  },
  {
    displayName: "addGiftWithPurchaseItemToCart",
    requestParameters: [
      {
        id: "quantity",
        type: "int",
        required: false,
        description: "The quantity of the item to be selected as gift.",
      },
      {
        id: "giftWithPurchaseIdentifier",
        type: "int",
        required: false,
        description:
          "The identifier that links this gift with purchase to the giftWithPurchaseInfo.",
      },
      {
        id: "productId",
        type: "string",
        required: false,
        description: "ID of the product to be selected as gift",
      },
      {
        id: "catRefId",
        type: "string",
        required: false,
        description:
          "The product variant Id. Include this Id when you are wishing to mark this as a gift with purchase selection you wish to change out",
      },
      {
        id: "promotionId",
        type: "string",
        required: false,
        description: "The promotion id.",
      },
    ],
    example: {
      quantity: 1,
      giftWithPurchaseIdentifier: -1275480226,
      productId: "camera_1",
      catRefId: "camerasku_1_12",
      promotionId: "promo10001",
    },
  },
  {
    displayName: "changeGiftWithPurchaseItemInCart",
    requestParameters: [
      {
        id: "quantity",
        type: "int",
        required: false,
        description: "The quantity of the item to be selected as gift.",
      },
      {
        id: "giftWithPurchaseIdentifier",
        type: "int",
        required: false,
        description:
          "The identifier that links this gift with purchase to the giftWithPurchaseInfo.",
      },
      {
        id: "productId",
        type: "string",
        required: false,
        description: "ID of the product to be selected as gift",
      },
      {
        id: "catRefId",
        type: "string",
        required: false,
        description:
          "The product variant Id. Include this Id when you are wishing to mark this as a gift with purchase selection you wish to change out",
      },
      {
        id: "promotionId",
        type: "string",
        required: false,
        description: "The promotion id.",
      },
      {
        id: "changeExistingGiftItemId",
        type: "string",
        required: true,
        description: "CommerceItemID of the product to be removed from gift",
      },
    ],
    example: {
      quantity: 1,
      giftWithPurchaseIdentifier: -1275480226,
      productId: "camera_1",
      catRefId: "camerasku_1_12",
      promotionId: "promo10001",
      changeExistingGiftItemId: "ci3000546",
    },
  },
  {
    displayName: "removeAllGiftWithPurchasePromotionsFromCart",
    requestParameters: [],
    example: "",
  },
  {
    displayName: "removeGiftWithPurchasePromotionFromCart",
    requestParameters: [
      {
        id: "quantity",
        type: "int",
        required: false,
        description: "The quantity of the item to be selected as gift.",
      },
      {
        id: "giftWithPurchaseIdentifier",
        type: "int",
        required: false,
        description:
          "The identifier that links this gift with purchase to the giftWithPurchaseInfo.",
      },
      {
        id: "promotionId",
        type: "string",
        required: false,
        description: "The promotion id.",
      },
    ],
    example: {
      quantity: 1,
      giftWithPurchaseIdentifier: -1275480226,
      promotionId: "promo10001",
    },
  },
  {
    displayName: "getGiftWithPurchaseItemChoicesForCart",
    requestParameters: [
      {
        id: "giftWithPurchaseDetail",
        type: "string",
        required: true,
        description: "The product id which is to be gift.",
      },
      {
        id: "giftWithPurchaseType",
        type: "string",
        required: true,
        description: "The type of gift with purchase item.",
      },
    ],
    example: {
      giftWithPurchaseDetail: "camera_1",
      giftWithPurchaseType: "product",
    },
  },
  {
    displayName: "addItemsToCart",
    requestParameters: [
      {
        id: "combineLineItems",
        type: "string",
        required: false,
        description:
          "The property to determine whether to combine same line items in cart",
      },
      {
        id: "items",
        type: "array",
        required: false,
        description: "The array of items to add to the shopping cart.",
        internalPropperties: [
          {
            id: "commerceItemId",
            type: "string",
            required: false,
            description:
              "The unique line item ID distinguisher. This field becomes required for split shipping when combineLineItems is set to no.",
          },
          {
            id: "originalCommerceItemId",
            type: "string",
            required: false,
            description:
              "The Commerce Item ID associated with the original item from which item in cancel order is created.",
          },
          {
            id: "quantity",
            type: "int",
            required: true,
            description: "The quantity of the product in the cart.",
          },
          {
            id: "productId",
            type: "string",
            required: true,
            description: "ID of the product in the cart.",
          },
          {
            id: "catRefId",
            type: "string",
            required: true,
            description: "The product variant Id.",
          },
          {
            id: "shippingGroupId",
            type: "string",
            required: false,
            description:
              "The shipping group to assign the quantity of new items to.",
          },
          {
            id: "externalPriceQuantity",
            type: "int",
            required: false,
            description:
              "The maximum quantity of this line item which may be purchased at the external price (this quantity will be verified to ensure it is allowable).",
          },
          {
            id: "externalPrice",
            type: "int",
            required: false,
            description:
              "A price for a quantity of 1 of this line item which will be used in place of the standard catalog price (this price will be verified to ensure it is allowable)",
          },
        ],
      },
    ],
    example: {
      combineLineItems: "yes",
      items: [
        {
          productId: "camcorder_1",
          quantity: 3,
          catRefId: "camcordersku_1_3",
          shippingGroupId: "sg12344",
          shopperInput: { initials: "M.C.K", color: "neon", font: "courier" },
          externalPriceQuantity: 1,
          externalPrice: 175,
          dynamicProperties: [
            { id: "dynamicPropertyMode", label: "Mode", value: "pickup" },
          ],
        },
      ],
    },
  },
  {
    displayName: "deleteItemFromCart",
    requestParameters: [
      {
        id: "commerceItemId",
        type: "string",
        required: true,
        description: "Commerce Item id to be deleted",
      },
    ],
    example: { commerceItemId: "ci3000441" },
  },
  {
    displayName: "deleteItemsFromCart",
    requestParameters: [
      {
        id: "commerceItemIds",
        type: "array string",
        required: true,
        description: "List of commerce item IDs to be deleted",
      },
    ],
    example: { commerceItemIds: ["ci3000441"] },
  },
  {
    displayName: "getCartItem",
    requestParameters: [
      {
        id: "commerceItemId",
        type: "string",
        required: true,
        description: "Commerce Item id to be fetched",
      },
    ],
    example: { commerceItemId: "ci3000441" },
  },
  {
    displayName: "getCartItems",
    requestParameters: [],
    example: "",
  },
  {
    displayName: "updateCartItem",
    requestParameters: [
      {
        id: "commerceItemId",
        type: "string",
        required: true,
        description:
          "The unique line item ID distinguisher. This field becomes required for split shipping when combineLineItems is set to no",
      },
      {
        id: "quantity",
        type: "int",
        required: false,
        description: "The quantity of the product in the cart.",
      },
      {
        id: "externalPriceQuantity",
        type: "int",
        required: false,
        description:
          "The maximum quantity of this line item which may be purchased at the external price (this quantity will be verified to ensure it is allowable).",
      },
      {
        id: "externalPrice",
        type: "int",
        required: false,
        description:
          "A price for a quantity of 1 of this line item which will be used in place of the standard catalog price (this price will be verified to ensure it is allowable).",
      },
    ],
    example: {
      externalPrice: 19.99,
      commerceItemId: "ci94000419",
      quantity: 2,
      externalPriceQuantity: 1,
      shopperInput: { initials: "a.k" },
      dynamicPropertyKey: "dynamicPropertyValue",
    },
  },
  {
    displayName: "updateCartItems",
    requestParameters: [
      {
        id: "items",
        type: "array",
        required: false,
        description: "The array of items to add to the shopping cart.",
        internalPropperties: [
          {
            id: "quantity",
            type: "int",
            required: false,
            description:
              "The unique line item ID distinguisher. This field becomes required for split shipping when combineLineItems is set to no.",
          },
          {
            id: "id",
            type: "string",
            required: false,
            description: "The quantity of the product in the cart.",
          },
          {
            id: "externalPriceQuantity",
            type: "int",
            required: false,
            description:
              "The maximum quantity of this line item which may be purchased at the external price (this quantity will be verified to ensure it is allowable).",
          },
          {
            id: "externalPrice",
            type: "int",
            required: false,
            description:
              "A price for a quantity of 1 of this line item which will be used in place of the standard catalog price (this price will be verified to ensure it is allowable).",
          },
        ],
      },
    ],
    example: {
      externalPrice: 19.99,
      commerceItemId: "ci94000419",
      quantity: 2,
      externalPriceQuantity: 1,
      shopperInput: { initials: "a.k" },
      dynamicPropertyKey: "dynamicPropertyValue",
    },
  },
  {
    displayName: "addShippingGroupsToCart",
    requestParameters: [
      {
        id: "items",
        type: "array",
        required: false,
        description: "The shipping group details to be added to the order.",
        internalPropperties: [
          {
            id: "type",
            type: "string",
            required: true,
            description: "The type of shipping group to be added.",
          },
          {
            id: "shippingAddress",
            type: "object",
            required: true,
            description: "The shipping address",
            internalPropperties: [
              {
                id: "lastName",
                type: "string",
                required: false,
                description: "The last name in the shipping address.",
              },
              {
                id: "country",
                type: "string",
                required: false,
                description: "The country in the shipping address.",
              },
              {
                id: "address2",
                type: "string",
                required: false,
                description: "The address2 in the shipping address,",
              },
              {
                id: "city",
                type: "string",
                required: false,
                description: "The city in the shipping address.",
              },
              {
                id: "address1",
                type: "string",
                required: false,
                description: "The address1 in the shipping address.",
              },
              {
                id: "postalCode",
                type: "string",
                required: false,
                description: "The postal code in the shipping address.",
              },
              {
                id: "county",
                type: "string",
                required: false,
                description: "The county in the shipping address.",
              },
              {
                id: "firstName",
                type: "string",
                required: false,
                description: "The first name in the shipping address.",
              },
              {
                id: "state",
                type: "string",
                required: false,
                description: "The state in the shipping address.",
              },
              {
                id: "email",
                type: "string",
                required: false,
                description: "The email id in the shipping address.",
              },
              {
                id: "phoneNumber",
                type: "string",
                required: false,
                description: "The phone number in the shipping address.",
              },
            ],
          },
        ],
      },
    ],
    example: {
      items: [
        {
          type: "hardgoodShippingGroup",
          shippingAddress: {
            firstName: "Andrew",
            lastName: "W",
            address1: "onemainst",
            city: "cambridge",
            state: "MA",
            country: "US",
            postalCode: "01887",
          },
        },
      ],
    },
  },
  {
    displayName: "deleteShippingGroupFromCart",
    requestParameters: [
      {
        id: "shippingGroupId",
        type: "string",
        required: true,
        description: "shipping group id to be deleted",
      },
    ],
    example: { shippingGroupId: "sg40417" },
  },
  {
    displayName: "deleteShippingGroupsFromCart",
    requestParameters: [
      {
        id: "shippingGroupsIds",
        type: "array string",
        required: true,
        description: "list of shipping group ids to be deleted",
      },
    ],
    example: { shippingGroupsIds: ["sg40421", "sg40422"] },
  },
  {
    displayName: "getCartShippingGroup",
    requestParameters: [
      {
        id: "id",
        type: "string",
        required: false,
        description: "shipping group id to be fetched",
      },
    ],
    example: { shippingGroupId: "sg40417" },
  },
  {
    displayName: "relateShippingGroupsToCartItems",
    requestParameters: [
      {
        id: "relationships",
        type: "object",
        required: false,
        description: "",
        internalPropperties: [
          {
            id: "commerceItemId",
            type: "string",
            required: false,
            description: "Commerce Item Id",
          },
          {
            id: "shippingGroupId",
            type: "string",
            required: false,
            description: "Shipping Group Id",
          },
          {
            id: "quantity",
            type: "integer",
            required: false,
            description: "Relationship quantity",
          },
        ],
      },
    ],
    example: { shippingGroupId: "sg40417" },
  },
  {
    displayName: "updateCartShippingGroup",
    requestParameters: [
      {
        id: "type",
        type: "string",
        required: false,
        description: "The type of shipping group to be added.",
      },
      {
        id: "shippingGroupId",
        type: "string",
        required: true,
        description: "Shipping group id",
      },
      {
        id: "shippingAddress",
        type: "object",
        required: false,
        description: "The shipping address",
        internalPropperties: [
          {
            id: "lastName",
            type: "string",
            required: false,
            description: "The last name in the shipping address.",
          },
          {
            id: "country",
            type: "string",
            required: false,
            description: "The country in the shipping address.",
          },
          {
            id: "address2",
            type: "string",
            required: false,
            description: "The address2 in the shipping address,",
          },
          {
            id: "city",
            type: "string",
            required: false,
            description: "The city in the shipping address.",
          },
          {
            id: "address1",
            type: "string",
            required: false,
            description: "The address1 in the shipping address.",
          },
          {
            id: "postalCode",
            type: "string",
            required: false,
            description: "The postal code in the shipping address.",
          },
          {
            id: "county",
            type: "string",
            required: false,
            description: "The county in the shipping address.",
          },
          {
            id: "firstName",
            type: "string",
            required: false,
            description: "The first name in the shipping address.",
          },
          {
            id: "state",
            type: "string",
            required: false,
            description: "The state in the shipping address.",
          },
          {
            id: "email",
            type: "string",
            required: false,
            description: "The email id in the shipping address.",
          },
          {
            id: "phoneNumber",
            type: "string",
            required: false,
            description: "The phone number in the shipping address.",
          },
        ],
      },
    ],
    example: {
      shippingGroupId: "sg1234",
      type: "hardgoodShippingGroup",
      shippingAddress: {
        firstName: "Andrew",
        lastName: "W",
        address1: "onemainst",
        city: "cambridge",
        state: "MA",
        country: "US",
        postalCode: "01887",
      },
    },
  },
  {
    displayName: "updateCartShippingGroups",
    requestParameters: [
      {
        id: "items",
        type: "array",
        required: false,
        description: "The shipping group details to be added to the order.",
        internalPropperties: [
          {
            id: "type",
            type: "string",
            required: false,
            description: "The type of shipping group to be added.",
          },
          {
            id: "shippingAddress ",
            type: "object",
            required: false,
            description: "The shipping address.",
            internalPropperties: [
              {
                id: "lastName",
                type: "string",
                required: false,
                description: "The last name in the shipping address.",
              },
              {
                id: "country",
                type: "string",
                required: false,
                description: "The country in the shipping address.",
              },
              {
                id: "address2",
                type: "string",
                required: false,
                description: "The address2 in the shipping address,",
              },
              {
                id: "city",
                type: "string",
                required: false,
                description: "The city in the shipping address.",
              },
              {
                id: "address1",
                type: "string",
                required: false,
                description: "The address1 in the shipping address.",
              },
              {
                id: "postalCode",
                type: "string",
                required: false,
                description: "The postal code in the shipping address.",
              },
              {
                id: "county",
                type: "string",
                required: false,
                description: "The county in the shipping address.",
              },
              {
                id: "firstName",
                type: "string",
                required: false,
                description: "The first name in the shipping address.",
              },
              {
                id: "state",
                type: "string",
                required: false,
                description: "The state in the shipping address.",
              },
              {
                id: "email",
                type: "string",
                required: false,
                description: "The email id in the shipping address.",
              },
              {
                id: "phoneNumber",
                type: "string",
                required: false,
                description: "The phone number in the shipping address.",
              },
            ],
          },
        ],
      },
    ],
    example: {
      items: [
        {
          type: "hardgoodShippingGroup",
          shippingAddress: {
            firstName: "Andrew",
            lastName: "W",
            address1: "onemainst",
            city: "cambridge",
            state: "MA",
            country: "US",
            postalCode: "01887",
          },
        },
      ],
    },
  },
  {
    displayName: "getCartItemCustomProperties",
    requestParameters: [],
    example: "",
  },
  {
    displayName: "addQuickOrderItemsToCart",
    requestParameters: [
      {
        id: "combineLineItems",
        type: "string",
        required: false,
        description:
          "The property to determine whether to combine same line items in cart.",
      },
      {
        id: "items",
        type: "array",
        required: false,
        description: "The array of items to add to the shopping cart.",
        internalPropperties: [
          {
            id: "commerceItemId",
            type: "string",
            required: false,
            description:
              "The unique line item ID distinguisher. This field becomes required for split shipping when combineLineItems is set to no.",
          },
          {
            id: "originalCommerceItemId",
            type: "string",
            required: false,
            description:
              "The Commerce Item ID associated with the original item from which item in cancel order is created.",
          },
          {
            id: "quantity",
            type: "integer",
            required: true,
            description: "The quantity of the product in the cart.",
          },
          {
            id: "productId",
            type: "string",
            required: true,
            description: "ID of the product in the cart.",
          },
          {
            id: "catRefId",
            type: "string",
            required: true,
            description: "The product variant Id.",
          },
          {
            id: "shippingGroupId",
            type: "string",
            required: false,
            description:
              "The shipping group to assign the quantity of new items to.",
          },
          {
            id: "externalPriceQuantity",
            type: "integer",
            required: false,
            description:
              "The maximum quantity of this line item which may be purchased at the external price (this quantity will be verified to ensure it is allowable).",
          },
          {
            id: "externalPrice",
            type: "number",
            required: false,
            description:
              "A price for a quantity of 1 of this line item which will be used in place of the standard catalog price (this price will be verified to ensure it is allowable).",
          },
        ],
      },
    ],
    example: {
      combineLineItems: "yes",
      items: [
        {
          productId: "camcorder_1",
          quantity: 3,
          catRefId: "camcordersku_1_3",
          shippingGroupId: "sg12344",
          shopperInput: { initials: "M.C.K", color: "neon", font: "courier" },
          externalPriceQuantity: 1,
          externalPrice: 175,
          dynamicProperties: [
            { id: "dynamicPropertyMode", label: "Mode", value: "pickup" },
          ],
        },
      ],
    },
  },
];
