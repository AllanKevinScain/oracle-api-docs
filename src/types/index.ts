export interface SomeChildrenInterface {
  children: React.ReactNode;
}

export interface RequestParametersInterface {
  id: string;
  type: string;
  required: boolean;
  description: string;
  internalPropperties?: RequestParametersInterface[];
}

export interface DataOfCaracteristicFeatureInterface {
  displayName: string;
  requestParameters: RequestParametersInterface[];
  example: unknown;
}

export interface DataFeaturesInterface {
  displayName: string;
}

export interface FeaturesInterface {
  displayName: string;
  data: DataFeaturesInterface[];
}

export interface CustomButtonInterface extends SomeChildrenInterface {
  showButton: boolean;
  onHandle: () => void;
}

export interface CustomAccordionItemInterface extends SomeChildrenInterface {
  content: string;
}

export interface HeaderMenuItemInterface extends SomeChildrenInterface {
  to: string;
}
