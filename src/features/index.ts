import { community } from "./config/community";
import { enterprise } from "./config/enterprise";
import { premiumFeatures } from "./config/premium";
import { Feature } from "./type.d";

class FeatureHelper {
  get env() {
    console.log(process.env.FEATURE);
    return (process.env.FEATURE ?? Feature.Enterprise) as Feature;
  }
  get isEnterprise() {
    return this.env === Feature.Enterprise;
  }

  get isCommunity() {
    return this.env === Feature.Community;
  }
  get isPremium() {
    return this.env === Feature.Premium;
  }

  get name() {
    if (this.isCommunity) {
      return "Community";
    }

    if (this.isPremium) {
      return "Premium";
    }
    return "Enterprise";
  }

  get feature() {
    if (this.isCommunity) {
      return community;
    }
    if (this.isPremium) {
      return premiumFeatures;
    }

    return enterprise;
  }
}

export const featureHelper = new FeatureHelper();
