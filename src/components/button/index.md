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
    <Button large>Button</Button>
  </Space>
);
```

### 按钮颜色

```tsx
import React from 'react';
import { Button, Space } from 'fish-ui';

export default () => (
  <Space>
    <Button color="white">Button</Button>
    <Button color="blue">Button</Button>
    <Button color="red">Button</Button>
    <Button color="yellow">Button</Button>
    <Button color="green">Button</Button>
    <Button>Button</Button>
  </Space>
);
```

<API></API>
