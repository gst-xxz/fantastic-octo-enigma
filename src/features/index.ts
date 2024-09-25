import { community } from "./config/community";
import { enterprise } from "./config/enterprise";
import { premiumFeatures } from "./config/premium";
import { FeatureEnums, IFeature } from "./type.d";
import lodash from "lodash";

class FeatureManager {
  private get env() {
    console.log(process.env.FEATURE);
    return (process.env.FEATURE ?? FeatureEnums.Enterprise) as FeatureEnums;
  }

  get isEnterprise() {
    return this.env === FeatureEnums.Enterprise;
  }

  get isCommunity() {
    return this.env === FeatureEnums.Community;
  }

  get isPremium() {
    return this.env === FeatureEnums.Premium;
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

  private get localFeatures() {
    if (this.isCommunity) {
      return community;
    }
    if (this.isPremium) {
      return premiumFeatures;
    }

    return enterprise;
  }

  // 融合本地 feature 和后端 feature
  public feature: IFeature = this.localFeatures;

  public mergeFeature(feature: Partial<IFeature>) {
    // todo 还可以根据业务，处理不同 feature 的优先级
    this.feature = lodash.merge(this.localFeatures, feature);

    return this.feature;
  }
}

export const featureManager = new FeatureManager();
