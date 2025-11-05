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
import { FSIcon, Space } from 'fish-ui-pro';

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

属性说明如下： <API/>

<!-- More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo -->
