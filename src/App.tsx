import "./App.css";
import { featureHelper } from "./features";
import Feature1 from "./components/Feature1";
import { useFeature } from "./features/FeaturesProvider";

function App() {
  const feature = useFeature();
  return (
    <>
      <h1>当前是 {featureHelper.name}</h1>

      <h2>根据环境变量判断</h2>
      <p>适用场景：版本区分</p>
      {featureHelper.isEnterprise && <div>企业版专属</div>}
      {featureHelper.isCommunity && <div>社区版专属</div>}
      {featureHelper.isPremium && <div>专业版专属</div>}

      <h2>根据文件名判断</h2>
      <p>适用场景：版本区分，使用不同的文件</p>
      <Feature1 />

      <h2>根据 Feature 判断</h2>
      <p>适用场景：功能细粒度控制，根据后端接口动态控制</p>
      {feature.code.enabled && <div>代码模块</div>}
      {feature.code.pull.enabled && <div>拉取模块</div>}
    </>
  );
}

export default App;
