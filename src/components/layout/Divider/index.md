---
title: Divider

group:
  path: /components
---

## Divider

### 水平分割线

```tsx
import React from 'react';
import { Divider } from 'fish-ui-pro';

export default () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
  </>
);
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo

## 代码演示

```tsx
import React from 'react';
import { Divider } from 'fish-ui-pro';
export default () => (
  <>
    <Divider dashed />
    <Divider>Text</Divider>
    <Divider plain>Text</Divider>
    <Divider orientation="left" plain>
      Left Text
    </Divider>
    <Divider orientation="right" plain>
      Right Text
    </Divider>
    <Divider orientation="left" orientationMargin="0">
      Left Text with 0 orientationMargin
    </Divider>
    <Divider orientation="right" orientationMargin={50}>
      Right Text with 50px orientationMargin
    </Divider>
    Text
    <Divider type="vertical" />
    <a href="#">Link</a>
    <Divider type="vertical" />
    <a href="#">Link</a>
  </>
);
```

<API></API>
