import React, { createContext, useContext, useState } from "react";
import { IFeature } from "./type";
import { fetchFeature } from "../api";
import lodash from "lodash";
import { featureHelper } from ".";

export const FeaturesContext = createContext<IFeature>(featureHelper.feature);

export const FeaturesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [innerFeature, setInnerFeature] = useState<IFeature>(
    featureHelper.feature
  );

  React.useEffect(() => {
    // 从后端获取 feature, 合并前端定义的 feature
    fetchFeature().then((newFeature) =>
      setInnerFeature((prevFeature) => lodash.merge(prevFeature, newFeature))
    );
  }, []);

  return (
    <FeaturesContext.Provider value={innerFeature}>
      {children}
    </FeaturesContext.Provider>
  );
};

export const useFeature = () => {
  return useContext(FeaturesContext);
};
