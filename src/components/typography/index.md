---
title: Typography 排版

group:
  path: /components
---

## Typography 排版

- 需要处理文本标题、段落、文章列表内容的基本格式时使用它。
- 包括：拷贝、省略、可编辑功能。

**代码演示**

```tsx
import React from 'react';
import { Space, Card, Divider } from 'antd';
import { FSTypography } from 'fish-ui-pro';
const { Paragraph, Title, Link, Text } = FSTypography;
const blockContent = `AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。`;

export default () => {
  return (
    <FSTypography>
      <Title>Introduction</Title>
      <Paragraph>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved,{' '}
        <Text strong>
          which might cause designers and developers difficulties and duplication and reduce the
          efficiency of development.
        </Text>
      </Paragraph>
      <Divider />
      <Title>介绍</Title>
      <Paragraph>
        随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。一个服务于企业级产品的设计体系
        Ant Design，基于<Text mark>『确定』和『自然』</Text>
        的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于
        <Text strong>更好的用户体验</Text>。
      </Paragraph>
      <Title level={2}>设计资源</Title>
      <Paragraph>
        <Text code>ant design</Text>）帮助业务快速设计出高质量的产品原型。
      </Paragraph>
      <Paragraph>
        <ul>
          <li>
            <Link href="#">设计原则</Link>
          </li>
          <li>
            <Link href="#">设计模式</Link>
          </li>
          <li>
            <Link href="#">设计资源</Link>
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        <blockquote>{blockContent}</blockquote>
        <pre>{blockContent}</pre>
      </Paragraph>
    </FSTypography>
  );
};
```

## Typography.Text

```tsx
import React from 'react';
import { Space, Card, Divider } from 'antd';
import { FSTypography } from 'fish-ui-pro';
const { Paragraph, Title, Link, Text } = FSTypography;
export default () => {
  return (
    <>
      <Space direction="vertical" size="middle">
        <Space wrap>
          <Text>默认文本</Text>
          <Text type="secondary">次要文本</Text>
          <Text type="success">成功文本</Text>
          <Text type="warning">警告文本</Text>
          <Text type="danger">危险文本</Text>
        </Space>

        <Space wrap>
          <Text size="xs">超小文本</Text>
          <Text size="sm">小文本</Text>
          <Text size="md">中文本</Text>
          <Text size="lg">大文本</Text>
          <Text size="xl">超大文本</Text>
        </Space>

        <Space wrap>
          <Text weight="normal">正常字重</Text>
          <Text weight="medium">中等字重</Text>
          <Text weight="semibold">半粗体</Text>
          <Text weight="bold">粗体</Text>
        </Space>

        <Space wrap>
          <Text code>代码样式</Text>
          <Text keyboard>键盘样式</Text>
          <Text underline>下划线</Text>
          <Text delete>删除线</Text>
          <Text mark>标记文本</Text>
          <Text strong>强调文本</Text>
          <Text italic>斜体文本</Text>
        </Space>

        <Text copyable ellipsis style={{ maxWidth: 200 }}>
          这是一段很长很长很长很长很长很长很长很长的可拷贝和省略文本
        </Text>
      </Space>
    </>
  );
};
```

## Typography.Title

```tsx
import React from 'react';
import { Space, Card, Divider } from 'antd';
import { FSTypography } from 'fish-ui-pro';
const { Paragraph, Title, Link, Text } = FSTypography;
export default () => {
  return (
    <>
      <Space direction="vertical" size="small">
        <Title level={1}>一级标题</Title>
        <Title level={2}>二级标题</Title>
        <Title level={3}>三级标题</Title>
        <Title level={4}>四级标题</Title>
        <Title level={5}>五级标题</Title>

        <Divider />

        <Title level={3} type="success" center>
          居中成功标题
        </Title>
        <Title level={4} bold type="warning">
          粗体警告标题
        </Title>
      </Space>
    </>
  );
};
```

## Typography.Paragraph

```tsx
import React from 'react';
import { Space, Divider } from 'antd';
import { FSTypography } from 'fish-ui-pro';
const { Paragraph } = FSTypography;
export default () => {
  return (
    <>
      <Space direction="vertical" size="middle">
        <Paragraph>这是一个普通的段落文本，用于展示段落组件的基本用法。</Paragraph>

        <Paragraph size="lg" weight="medium">
          这是一个大号中等字重的段落文本。
        </Paragraph>

        <Paragraph type="secondary" center>
          这是一个居中的次要段落文本，通常用于描述性内容。
        </Paragraph>

        <Paragraph bold italic>
          这是一个粗体斜体的段落文本，用于强调内容。
        </Paragraph>

        <Paragraph
          copyable
          ellipsis={{ rows: 2, expandable: true, symbol: '展开' }}
          style={{ maxWidth: 300 }}
        >
          这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的可拷贝和省略文本
        </Paragraph>
      </Space>
    </>
  );
};
```

## Link 组件

```tsx
import React from 'react';
import { Space, Card, Divider } from 'antd';
import { FSTypography } from 'fish-ui-pro';
const { Paragraph, Title, Link, Text } = FSTypography;
export default () => {
  return (
    <>
      <Space direction="vertical" size="middle">
        <Space wrap>
          <Link href="https://ant.design">默认链接</Link>
          <Link href="https://ant.design" type="success">
            成功链接
          </Link>
          <Link href="https://ant.design" type="warning">
            警告链接
          </Link>
          <Link href="https://ant.design" type="danger">
            危险链接
          </Link>
        </Space>

        <Space wrap>
          <Link href="https://ant.design" target="_blank" underline>
            带下划线链接（新窗口）
          </Link>
          <Link href="https://ant.design" underline={false}>
            无下划线链接
          </Link>
        </Space>

        <Space wrap>
          <Link disabled>禁用链接</Link>
          <Link href="https://ant.design" onClick={() => console.log('clicked')}>
            可点击链接
          </Link>
        </Space>

        <Link copyable ellipsis style={{ maxWidth: 200 }} href="https://ant.design">
          这是一段很长很长很长很长很长很长很长很长的可拷贝和省略链接文本
        </Link>
      </Space>
    </>
  );
};
```

属性说明如下： <API/>
