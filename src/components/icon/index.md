---
title: Icon 图标

group:
  path: /components
---

## Icon 图标

使用[antd@4.x 图标](https://4x.ant.design/components/icon/#API) :

```tsx
import React from 'react';
import { FSIcon, Space } from 'fish-ui-pro';

export default () => (
  <Space>
    <FSIcon name="EyeOutlined" />
    <FSIcon name="FormOutlined" />
    <FSIcon name="StepBackwardOutlined" />
    <FSIcon name="StepForwardOutlined" />
    <FSIcon name="FastBackwardOutlined" />
    <FSIcon name="FastForwardOutlined" />
    <FSIcon name="DownOutlined" />
    <FSIcon name="UpOutlined" />
    <FSIcon name="LeftOutlined" />
    <FSIcon name="RightOutlined" />
    <FSIcon name="CaretUpOutlined" />
    <FSIcon name="CaretDownOutlined" />
    <FSIcon name="CaretLeftOutlined" />
    <FSIcon name="CaretRightOutlined" />
    <FSIcon name="SmileOutlined" />
    <FSIcon name="SearchOutlined" />
    <FSIcon name="LoadingOutlined" />
    <FSIcon name="SyncOutlined" />
    <FSIcon name="SettingFilled" />
    <FSIcon name="RobotOutlined" />
    <FSIcon name="GiftOutlined" />
  </Space>
);
```

支持使用 Iconfont 图标:

```tsx
import React from 'react';
import { FSIcon, Space, iconConfig } from 'fish-ui-pro';

// 在应用初始化时配置全局 iconfont
iconConfig.setIconfontConfig({
  scriptUrl: [
    '//at.alicdn.com/t/c/font_1379935_voy8wl7xryr.js', // 阿里巴巴矢量图标库项目地址
  ],
  extraCommonProps: {
    style: {
      verticalAlign: '-0.125em',
    },
  },
});
export default () => (
  <Space>
    {/* <FSIcon name="icon-shiwu" source="iconfont" />
    <FSIcon name="icon-jinkouchongdiaoyinpin" source="iconfont" />
    <FSIcon name="icon-search" source="iconfont" />
    <FSIcon name="icon-dingwei" source="iconfont" />
    <FSIcon name="icon-chaoshi" source="iconfont" />
    <FSIcon name="icon-meishi" source="iconfont" />
    <FSIcon name="icon-shuiguo" source="iconfont" />
    <FSIcon name="icon-pao" source="iconfont" />
    <FSIcon name="icon-jintieshenqing-01" source="iconfont" /> */}
    <FSIcon name="el-icon-kf-ai53" source="iconfont" />
    <FSIcon name="el-icon-kf-daohangshouqi-" source="iconfont" />
    <FSIcon name="el-icon-kf-weibiaoti25" source="iconfont" />
    <FSIcon name="el-icon-kf-edit-square" source="iconfont" />
    <FSIcon name="el-icon-kf-wrong" source="iconfont" />
    <FSIcon name="el-icon-kf-right" source="iconfont" />
    <FSIcon name="el-icon-kf-adduser" source="iconfont" />
    <FSIcon name="el-icon-kf-piechart" source="iconfont" />
    <FSIcon name="el-icon-kf-setting" source="iconfont" />
    <FSIcon name="el-icon-kf-photo" source="iconfont" />
    <FSIcon name="el-icon-kf-right2" source="iconfont" />
    <FSIcon name="el-icon-kf-gantanhao" source="iconfont" />
  </Space>
);
```

属性说明如下： <API/>

<!-- More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo -->
