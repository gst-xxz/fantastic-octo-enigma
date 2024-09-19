import { IFeature } from "../type";

export const premiumFeatures: IFeature = {
  code: {
    description: "Code",
    enabled: true,
    pull: {
      description: "Pull Code",
      enabled: false,
    },
  },
};
