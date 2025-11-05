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
// 使用默认字体库配置
export default () => (
  <Space>
    <FSIcon name="EyeOutlined" />
    <FSIcon name="FormOutlined" color="#1980ff" />
    <FSIcon name="StepBackwardOutlined" color="#1980ff" />
    <FSIcon name="StepForwardOutlined" color="#1980ff" />
    <FSIcon name="FastBackwardOutlined" color="#1980ff" />
    <FSIcon name="FastForwardOutlined" color="#1980ff" />
    <FSIcon name="DownOutlined" />
    <FSIcon name="UpOutlined" />
    <FSIcon name="LeftOutlined" />
    <FSIcon name="RightOutlined" />
    <FSIcon name="CaretUpOutlined" />
    <FSIcon name="CaretDownOutlined" />
    <FSIcon name="CaretLeftOutlined" />
    <FSIcon name="CaretRightOutlined" />
    <FSIcon name="SmileOutlined" color="#faad14" />
    <FSIcon name="SearchOutlined" />
    <FSIcon name="LoadingOutlined" />
    <FSIcon name="SyncOutlined" color="#52cd1a" />
    <FSIcon name="SettingFilled" color="#1980ff" />
    <FSIcon name="RobotOutlined" color="#1980ff" />
    <FSIcon name="GiftOutlined" color="#ff4d4f" />
    <FSIcon name="GiftOutlined" color="#ff4d4f" rotate={90} />
  </Space>
);
```

支持使用 Iconfont 图标:

```tsx
import React from 'react';
import { FSIcon, Space, iconConfig } from 'fish-ui-pro';

// 在应用初始化时配置全局 iconfont，使用自定义字体库配置
iconConfig.setIconfontConfig({
  scriptUrl: [
    '//at.alicdn.com/t/c/font_1379935_voy8wl7xryr.js', // 阿里巴巴矢量图标库项目地址
    '//at.alicdn.com/t/c/font_1307587_7fdqa1zvwos.js',
  ],
  extraCommonProps: {
    style: {
      verticalAlign: '-0.125em',
    },
  },
});
export default () => (
  <Space>
    <FSIcon name="icon-shiwu" source="iconfont" />
    <FSIcon name="icon-jinkouchongdiaoyinpin" source="iconfont" />
    <FSIcon name="icon-search" source="iconfont" />
    <FSIcon name="icon-dingwei" source="iconfont" />
    <FSIcon name="icon-chaoshi" source="iconfont" />
    <FSIcon name="icon-meishi" source="iconfont" />
    <FSIcon name="icon-shuiguo" source="iconfont" />
    <FSIcon name="icon-pao" source="iconfont" />
    <FSIcon name="icon-jintieshenqing-01" source="iconfont" />
  </Space>
);
```

```tsx
import React from 'react';
import { FSIcon, Space, iconConfig } from 'fish-ui-pro';

// 在应用初始化时配置全局 iconfont
iconConfig.setIconfontConfig({
  scriptUrl: [
    '//at.alicdn.com/t/c/font_1379935_voy8wl7xryr.js', // 阿里巴巴矢量图标库项目地址
    '//at.alicdn.com/t/c/font_1307587_7fdqa1zvwos.js',
  ],
  extraCommonProps: {
    style: {
      verticalAlign: '-0.125em',
    },
  },
});
export default () => (
  <Space>
    <FSIcon name="el-icon-kf-ai53" source="iconfont" />
    <FSIcon name="el-icon-kf-daohangshouqi-" source="iconfont" />
    <FSIcon name="el-icon-kf-weibiaoti25" source="iconfont" />
    <FSIcon name="el-icon-kf-edit-square" source="iconfont" />
    <FSIcon name="el-icon-kf-wrong" source="iconfont" />
    <FSIcon name="el-icon-kf-right" source="iconfont" />
    <FSIcon name="el-icon-kf-adduser" source="iconfont" />
    <FSIcon name="el-icon-kf-piechart" source="iconfont" color="#faad14" />
    <FSIcon name="el-icon-kf-setting" source="iconfont" />
    <FSIcon name="el-icon-kf-photo" source="iconfont" color="#1980ff" />
    <FSIcon name="el-icon-kf-right2" source="iconfont" color="#52cd1a" />
    <FSIcon name="el-icon-kf-gantanhao" source="iconfont" color="#ff4d4f" />

    <FSIcon name="iconfire" source="iconfont" size={20} color="red" />
    <FSIcon name="iconzhuanli" source="iconfont" size={20} color="#1980ff" />
    <FSIcon name="iconfuhao-zhongwen" source="iconfont" size={20} />
    <FSIcon name="iconfuhao-yingwen" source="iconfont" size={20} />
  </Space>
);
```

属性说明如下： <API/>

<!-- More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo -->
