import React, { createContext, useContext, useState } from "react";
import { IFeature } from "./type";
import { fetchFeature } from "../api";
import { featureManager } from ".";

export const FeaturesContext = createContext<IFeature>(featureManager.feature);

export const FeaturesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [innerFeature, setInnerFeature] = useState<IFeature>(
    featureManager.feature
  );

  React.useEffect(() => {
    // 从后端获取 feature, 合并前端定义的 feature
    fetchFeature().then((newFeature) =>
      setInnerFeature(featureManager.mergeFeature(newFeature))
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
