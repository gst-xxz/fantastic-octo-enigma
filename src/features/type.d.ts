export enum FeatureEnums {
  Enterprise = "enterprise",
  Community = "community",
  Premium = "premium",
}

export interface IFeature {
  code: {
    description: string;
    enabled: boolean;

    pull: {
      description: string;
      enabled: boolean;
    };
  };
}
