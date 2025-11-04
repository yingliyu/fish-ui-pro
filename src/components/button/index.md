---
title: Button 按钮

group:
  path: /components
  order: 1
---

# Button 按钮

响应用户点击行为，触发相应的业务逻辑。共五种类型按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。

- 默认按钮：用于没有主次之分的一组行动点。

- 虚线按钮：常用于添加操作。

- 文本按钮：用于最次级的行动点。

- 链接按钮：一般用于链接，即导航至某位置。

以及四种状态属性与上面配合使用。

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。

- 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。

- 禁用：行动点不可用的时候，一般需要文案解释。

- 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## 按钮类型

```tsx
import React from 'react';
import { FSButton, Space } from 'fish-ui-pro';

export default () => (
  <Space>
    <FSButton type="primary">主按钮</FSButton>
    <FSButton type="default">默认按钮</FSButton>
    <FSButton type="dashed">虚线按钮</FSButton>
    <FSButton type="text">文本按钮</FSButton>
    <FSButton type="link">链接按钮</FSButton>
  </Space>
);
```

## 按钮状态

```tsx
import React from 'react';
import { FSButton, Space } from 'fish-ui-pro';

export default () => (
  <Space>
    <FSButton danger>危险按钮</FSButton>
    <FSButton ghost>幽灵按钮</FSButton>
    <FSButton disabled>禁用按钮</FSButton>
    <FSButton loading>加载中按钮</FSButton>
  </Space>
);
```

## 按钮颜色

```tsx
import React from 'react';
import { FSButton, Space } from 'fish-ui-pro';

export default () => (
  <Space>
    <FSButton>Button</FSButton>
    <FSButton color="red">Button</FSButton>
    <FSButton color="yellow">Button</FSButton>
    <FSButton color="green">Button</FSButton>
    <FSButton color="white">Button</FSButton>
  </Space>
);
```

## 图标按钮

```tsx
import React from 'react';
import { FSButton, Space } from 'fish-ui-pro';
import { SearchOutlined } from '@ant-design/icons';

export default () => (
  <Space>
    <FSButton shape="circle" icon={<SearchOutlined />} />
    <FSButton type="dashed" shape="circle" icon={<SearchOutlined />} />
    <FSButton type="primary" shape="circle" icon={<SearchOutlined />} />
    <FSButton type="primary" icon={<SearchOutlined />}>
      Search
    </FSButton>
  </Space>
);
```

## Block 按钮

```tsx
import React from 'react';
import { FSButton, Space } from 'fish-ui-pro';
import { SearchOutlined } from '@ant-design/icons';
export default () => (
  <>
    <FSButton type="primary" large block>
      Primary
    </FSButton>
    <FSButton type="primary" block>
      Primary
    </FSButton>
    <FSButton block>Default</FSButton>
    <FSButton type="link" block>
      Link
    </FSButton>
    <FSButton type="dashed" block>
      Dashed
    </FSButton>
  </>
);
```

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：type -> shape -> size -> loading -> disabled。

按钮的属性说明如下： <API/>
