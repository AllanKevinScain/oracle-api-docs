import { DataOfCaracteristicFeatureInterface } from "../types";

export const orderData: DataOfCaracteristicFeatureInterface[] = [
  {
    displayName: "submitQuotedOrder",
    requestParameters: [
      {
        id: "orderId",
        type: "string",
        required: true,
        description: "Order Id of the quoted Order",
      },
      {
        id: "payments",
        type: "array",
        required: true,
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
            type: "number",
            required: false,
            description:
              "Amount to be authorized from the gift card. Payment type:invoice,card, physicalGiftCard, paypalCheckout, payUWebLatamCheckout.",
          },
          {
            id: "cardTypeName",
            type: "string",
            required: false,
            description:
              "Credit/Debit card type name. e.g. Visa. Payment type:card.",
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
            required: false,
            description:
              "Payment type. e.g. paypalCheckout, payUWebLatamCheckout.",
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
              "Payment Group Id of the gift card payment group. Payment type:physicalGiftCard.",
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
          {
            id: "billingAddress",
            type: "object",
            required: false,
            description: "The billing address details.",
            internalPropperties: [
              {
                id: "lastName",
                type: "string",
                required: false,
                description: "Last name.",
              },
              {
                id: "address3",
                type: "string",
                required: false,
                description: "Address snippet.",
              },
              {
                id: "address2",
                type: "string",
                required: false,
                description: "Address snippet.",
              },
              {
                id: "city",
                type: "string",
                required: false,
                description: "City.",
              },
              {
                id: "prefix",
                type: "string",
                required: false,
                description: "Name prefix.",
              },
              {
                id: "address1",
                type: "string",
                required: false,
                description: "Address snippet.",
              },
              {
                id: "postalCode",
                type: "string",
                required: false,
                description: "Postal code.",
              },
              {
                id: "jobTitle",
                type: "string",
                required: false,
                description: "Job title.",
              },
              {
                id: "companyName",
                type: "string",
                required: false,
                description: "Company name.",
              },
              {
                id: "suffix",
                type: "string",
                required: false,
                description: "Name suffix.",
              },
              {
                id: "country",
                type: "string",
                required: false,
                description: "Country code.",
              },
              {
                id: "firstName",
                type: "string",
                required: false,
                description: "First name.",
              },
              {
                id: "phoneNumber",
                type: "string",
                required: false,
                description: "Phone number.",
              },
              {
                id: "faxNumber",
                type: "string",
                required: false,
                description: "Fax number.",
              },
              {
                id: "alias",
                type: "string",
                required: false,
                description: "Address alias.",
              },
              {
                id: "middleName",
                type: "string",
                required: false,
                description: "Middle name.",
              },
              {
                id: "state",
                type: "string",
                required: false,
                description: "State code.",
              },
              {
                id: "email",
                type: "string",
                required: false,
                description: "Email address.",
              },
            ],
          },
        ],
      },
    ],
    example: {
      orderId: "o30411",
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
      ],
    },
  },
  {
    displayName: "getOrderCustomProperties",
    requestParameters: [],
    example: {},
  },
  {
    displayName: "getOrder",
    requestParameters: [
      {
        id: "orderId",
        type: "string",
        required: true,
        description: "The ID of the order to retrieve.",
      },
    ],
    example: { orderId: "o10007" },
  },
  {
    displayName: "cancelOrder",
    requestParameters: [
      {
        id: "orderId",
        type: "string",
        required: true,
        description: "The ID of the order to cancel.",
      },
      {
        id: "reason",
        type: "string",
        required: true,
        description: "The cancel reason of the orde",
      },
    ],
    example: { orderId: "o10007", reason: "betterCompetitorPrice" },
  },
  {
    displayName: "getOrderConfirmation",
    requestParameters: [
      {
        id: "uuid",
        type: "string",
        required: true,
        description: "The uuid of the order to retrieve.",
      },
    ],
    example: { uuid: "acc8c10c-b4f1-4082-8ac9-fd506436ba08" },
  },
  {
    displayName: "initiateCancelOrder",
    requestParameters: [
      {
        id: "orderId",
        type: "string",
        required: true,
        description: "The ID of the order to cancel.",
      },
      {
        id: "cancelReason",
        type: "string",
        required: true,
        description:
          "The reason for cancelling the order. The reasons are a pre-defined set of choices received from the getReturnReasons endpoint.",
      },
    ],
    example: { orderId: "o10007", cancelReason: "betterCompetitorPrice" },
  },
  {
    displayName: "submitCancelOrder",
    requestParameters: [
      {
        id: "orderId",
        type: "string",
        required: true,
        description:
          "The ID of the cancel order object that is to be submitted.",
      },
    ],
    example: { orderId: "o10007" },
  },
  {
    displayName: "copyOrder",
    requestParameters: [
      {
        id: "orderId",
        type: "string",
        required: true,
        description: "The ID of the order to be duplicated.",
      },
      {
        id: "incompleteOrderId ",
        type: "string",
        required: false,
        description: "The ID of the incomplete order to merge.",
      },
      {
        id: "exclude",
        type: "object",
        required: true,
        description:
          "The properties to exclude when the order is copied. The key is the item descriptor name. The value is an array of the properties to exclude.",
        internalPropperties: [
          {
            id: "commerceItems",
            type: "array",
            required: false,
            description: "The item descriptor name.",
          },
          {
            id: "order",
            type: "array",
            required: false,
            description: "The item descriptor name.",
          },
        ],
      },
    ],
    example: {
      orderId: "o10007",
      exclude: {
        commerceItem: ["priceInfo", "externalPriceDetails"],
        order: [
          "approverMessages",
          "quoteInfo",
          "approverIds",
          "submittedDate",
          "originOfOrder",
          "createdByOrderId",
          "priceInfo",
          "externalOrderPriceDetails",
          "cancelReason",
          "shippingGroups",
          "relationships",
          "paymentGroups",
        ],
      },
    },
  },
  {
    displayName: "getPaymentInitiatedOrder",
    requestParameters: [
      {
        id: "type",
        type: "string",
        required: false,
        description: "The payment method type. 'generic' or 'paypalCheckout'.",
      },
      {
        id: "customProperties",
        type: "object",
        required: false,
        description: "List of properties given by the payment gateway.",
      },
    ],
    example: {
      type: "generic",
      customProperties: { orderId: "o40411", param2: "value2" },
    },
  },
  {
    displayName: "approveOrder",
    requestParameters: [
      {
        id: "orderId",
        type: "string",
        required: true,
        description: "The order id of the order which requires approval.",
      },
      {
        id: "approverMessage",
        type: "object",
        required: false,
        description:
          "the message given by approver when he is approving order.",
      },
      {
        id: "ignorePriceWarnings",
        type: "boolean",
        required: true,
        description:
          "This flag decides whether approver is allowing order to be repriced as part of approval or not.",
      },
    ],
    example: {
      orderId: "o10007",
      ignorePriceWarnings: true,
      approverMessage: "Approving order",
    },
  },
  {
    displayName: "rejectOrder",
    requestParameters: [
      {
        id: "orderId",
        type: "string",
        required: true,
        description: "The order id of the order which is rejected.",
      },
      {
        id: "approverMessage",
        type: "string",
        required: false,
        description:
          "the message given by approver when he is rejecting order.",
      },
    ],
    example: { orderId: "o10007", approverMessage: "Rejecting order" },
  },
  {
    displayName: "convertCartToScheduledOrder",
    requestParameters: [
      {
        id: "schedule",
        type: "object",
        required: true,
        description: "The schedule of the scheduled order.",
        internalPropperties: [
          {
            id: "selectedDates",
            type: "array",
            required: false,
            description:
              "The selected dates in a month for the scheduled order.",
          },
          {
            id: "weeksInMonth",
            type: "array",
            required: false,
            description: "The weeks in a month of the scheduled order.",
          },
          {
            id: "interval",
            type: "integer",
            required: false,
            description:
              "The interval in terms of number of days of the scheduled order.",
          },
          {
            id: "monthsInYear",
            type: "array",
            required: false,
            description: "The months in a year of the scheduled order.",
          },
          {
            id: "daysOfWeek",
            type: "array",
            required: false,
            description: "The days of week of the scheduled order.",
          },
          {
            id: "occurenceInDay",
            type: "integer",
            required: false,
            description: "The occurence in a day on the scheduled order.",
          },
          {
            id: "period",
            type: "integer",
            required: false,
            description:
              "The period of repeating of the periodic scheduled order in milliseconds.",
          },
          {
            id: "delay",
            type: "integer",
            required: false,
            description:
              "The delay of the first scheduled run after start date of the periodic scheduled order in milliseconds.",
          },
        ],
      },
      {
        id: "scheduleType",
        type: "string",
        required: true,
        description: "The schedule type of the scheduled order.",
      },
      {
        id: "endDate",
        type: "string",
        required: false,
        description: "The end date of the scheduled order.",
      },
      {
        id: "name",
        type: "string",
        required: true,
        description: "The name of the scheduled order.",
      },
      {
        id: "startDate",
        type: "string",
        required: true,
        description: "The start date of the scheduled order.",
      },
    ],
    example: {
      schedule: {
        selectedDates: [],
        weeksInMonth: [1, 2, 3],
        monthsInYear: [1, 2],
        daysOfWeek: [1, 2, 3],
      },
      scheduleType: "calendar",
      endDate: "2021-04-01T00:00:00.000Z",
      name: "testScheduleOrder",
      startDate: "2020-04-01T00:00:00.000Z",
    },
  },
  {
    displayName: "checkOrderRequiresApproval",
    requestParameters: [
      {
        id: "orderId",
        type: "string",
        required: true,
        description: "The order id of the order which requires approval.",
      },
    ],
    example: { orderId: "o10007" },
  },
  {
    displayName: "createScheduledOrder",
    requestParameters: [
      {
        id: "schedule",
        type: "object",
        required: true,
        description: "The schedule of the scheduled order.",
        internalPropperties: [
          {
            id: "selectedDates",
            type: "array",
            required: false,
            description:
              "The selected dates in a month for the scheduled order.",
          },
          {
            id: "weeksInMonth",
            type: "array",
            required: false,
            description: "The weeks in a month of the scheduled order.",
          },
          {
            id: "interval",
            type: "integer",
            required: false,
            description:
              "The interval in terms of number of days of the scheduled order.",
          },
          {
            id: "monthsInYear",
            type: "array",
            required: false,
            description: "The months in a year of the scheduled order.",
          },
          {
            id: "daysOfWeek",
            type: "array",
            required: false,
            description: "The days of week of the scheduled order.",
          },
          {
            id: "occurenceInDay",
            type: "integer",
            required: false,
            description: "The occurence in a day on the scheduled order.",
          },
          {
            id: "period",
            type: "integer",
            required: false,
            description:
              "The period of repeating of the periodic scheduled order in milliseconds.",
          },
          {
            id: "delay",
            type: "integer",
            required: false,
            description:
              "The delay of the first scheduled run after start date of the periodic scheduled order in milliseconds.",
          },
        ],
      },
      {
        id: "templateOrderId ",
        type: "string",
        required: true,
        description: "The template order id of the scheduled order.",
      },
      {
        id: "scheduleType",
        type: "string",
        required: true,
        description: "The schedule type of the scheduled order.",
      },
      {
        id: "endDate",
        type: "string",
        required: false,
        description: "The end date of the scheduled order.",
      },
      {
        id: "name",
        type: "string",
        required: true,
        description: "The name of the scheduled order.",
      },
      {
        id: "startDate",
        type: "string",
        required: true,
        description: "The start date of the scheduled order.",
      },
    ],
    example: {
      schedule: {
        selectedDates: [],
        weeksInMonth: [1, 2, 3],
        monthsInYear: [1, 2],
        daysOfWeek: [1, 2, 3],
      },
      templateOrderId: "o0001",
      scheduleType: "calendar",
      endDate: "2021-04-01T00:00:00.000Z",
      name: "testScheduleOrder",
      startDate: "2020-04-01T00:00:00.000Z",
    },
  },
  {
    displayName: "deleteScheduledOrder",
    requestParameters: [
      {
        id: "scheduledOrderId",
        type: "string",
        required: true,
        description: "The ID of the scheduled order.",
      },
    ],
    example: { scheduledOrderId: "sco10001" },
  },
  {
    displayName: "getScheduledOrder",
    requestParameters: [
      {
        id: "scheduledOrderId",
        type: "string",
        required: true,
        description: "The ID of the scheduled order.",
      },
      {
        id: "orderDetails",
        type: "boolean",
        required: false,
        description:
          "Details of the templete order will be reurned if it is true.",
      },
    ],
    example: { scheduledOrderId: "sco10001", orderDetails: true },
  },
  {
    displayName: "listExecutionStatusForScheduledOrder",
    requestParameters: [
      {
        id: "scheduledOrderId",
        type: "string",
        required: true,
        description: "The ID of the scheduled order.",
      },
      {
        id: "offset",
        type: "int",
        required: false,
        description: "Starting index.",
      },
      {
        id: "limit",
        type: "int",
        required: false,
        description:
          "Specifies the number of execution status to be retrieved starting from offset. In case this is not present, the complete list of execution status for the scheduled order is returned.",
      },
      {
        id: "q",
        type: "string",
        required: false,
        description:
          "This field specifies the query used to filter the execution status returned. Defaults to RQL. To use SCIM use the queryFormat parameter.",
      },
    ],
    example: '{"scheduledOrderId": "sco10001","offset": 0,"limit": 5}',
  },
  {
    displayName: "listScheduledOrders",
    requestParameters: [
      {
        id: "query",
        type: "string",
        required: false,
        description:
          "This field specifies the query used to filter the scheduled orders returned. Defaults to RQL. To use SCIM use the queryFormat parameter.",
      },
      {
        id: "offset",
        type: "int",
        required: false,
        description: "Starting index.",
      },
      {
        id: "limit",
        type: "int",
        required: false,
        description:
          "Specifies the number of execution status to be retrieved starting from offset. In case this is not present, the complete list of execution status for the scheduled order is returned.",
      },
    ],
    example: { query: "state eq 'NO_PENDING_ACTION'", offset: 0, limit: 2 },
  },
];
