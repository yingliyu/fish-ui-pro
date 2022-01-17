---
title: Button

group:
  path: /components
  order: 1
---

## Button 按钮

响应用户点击行为，触发相应的业务逻辑。

代码演示

```tsx
import React from 'react';
import { Button, Space } from 'fish-ui';

export default () => (
  <Space>
    <Button>Button</Button>
    <Button danger>Button</Button>
  </Space>
);
```

### 按钮颜色

```tsx
import React from 'react';
import { Button, Space } from 'fish-ui';

export default () => (
  <Space>
    <Button>Button</Button>
    <Button color="white">Button</Button>
    <Button color="blue">Button</Button>
    <Button color="red">Button</Button>
    <Button color="yellow">Button</Button>
    <Button color="green">Button</Button>
  </Space>
);
```

### API

| 属性   | 说明         | 类型    | 默认值 |
| :----- | :----------- | :------ | :----- |
| danger | 设置危险按钮 | boolean | false  |
