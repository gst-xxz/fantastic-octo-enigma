# 一份代码，部署于不同客户环境

## 需求

在同一份代码上开发，完美部署到不同客户环境。

## 例如

- 企业版
- 专业版
- 社区版

## 实现

### 简单判断区分

版本之间差异

```
featureManager.isEnterprise && doSomething();
featureManager.isPremium && doSomething();
featureManager.isCommunity && doSomething();
```

### 文件名区分

不同版本使用不同后缀的文件

```
// 专业版
x.premium.tsx

// 企业版
x.enterprise.tsx

// 社区版
x.community.tsx


// 使用端
// 根据不同环境，import不同的文件
import x from "./x";
```

### 功能开关

- 细粒度控制
- 根据后端接口动态控制

```
// 函数组件
const Feature1 = () => {
  const feature = useFeature();
  return <div>{feature.code.enabled}</div>;
};

// 其他ts，js文件
import { featureManager } from "./features";

featureManager.feature.code.enabled && doSomething();

// 类组件
import { FeaturesContext } from "./features/FeaturesProvider";
class Feature2 extends React.Component {
  contextType = FeaturesContext;

  render() {
    return <div>{this.context.code.enabled}</div>;
  }
}
```

## DEMO

**代码**
![image](./docs/code.png)

**企业版**
![image](./docs/enterprise.png)

**专业版**
![image](./docs/premium.png)

**社区版**
![image](./docs/community.png)
