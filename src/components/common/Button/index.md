---
title: Button

group:
  path: /components
  order: 1
---

## Button 按钮

响应用户点击行为，触发相应的业务逻辑。

Demo:

```tsx
import React from 'react';
import { Button } from 'fish-ui';

export default () => (
  <>
    <Button>Button</Button>
    <Button danger>Button</Button>
  </>
);
```

### 按钮尺寸

### 按钮状态

### 按钮组合

### API

| 属性   | 说明         | 类型    | 默认值 |
| :----- | :----------- | :------ | :----- |
| danger | 设置危险按钮 | boolean | false  |
