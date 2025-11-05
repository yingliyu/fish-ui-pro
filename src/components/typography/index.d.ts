// src/components/Typography/types.ts
import type { TypographyProps as AntdTypographyProps } from 'antd';
import type { TextProps as AntdTextProps } from 'antd/es/typography/Text';
import type { TitleProps as AntdTitleProps } from 'antd/es/typography/Title';
import type { LinkProps as AntdLinkProps } from 'antd/es/typography/Link';
import type { ParagraphProps as AntdParagraphProps } from 'antd/es/typography/Paragraph';

// 通用类型定义
export type TypographyType = 'default' | 'secondary' | 'success' | 'warning' | 'danger';
export type TitleLevel = 1 | 2 | 3 | 4 | 5;
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// 尺寸映射
export const SIZE_MAP: Record<TextSize, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
};

// 字重映射
export const WEIGHT_MAP: Record<TextWeight, number> = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

// 基础 Props
export interface BaseTypographyProps {
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 文字类型 */
  type?: TypographyType;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否可拷贝 */
  copyable?: boolean | AntdTypographyProps['copyable'];
  /** 是否可编辑 */
  editable?: boolean | AntdTypographyProps['editable'];
  /** 是否省略 */
  ellipsis?: boolean | AntdTypographyProps['ellipsis'];
  /** 点击事件 */
  onClick?: React.MouseEventHandler;
  /** 子元素 */
  children?: React.ReactNode;
}

// Text 组件 Props
export interface TextProps extends BaseTypographyProps {
  /** 文字大小 */
  size?: TextSize | number;
  /** 字重 */
  weight?: TextWeight;
  /** 是否代码风格 */
  code?: boolean;
  /** 是否键盘风格 */
  keyboard?: boolean;
  /** 是否下划线 */
  underline?: boolean;
  /** 是否删除线 */
  delete?: boolean;
  /** 是否斜体 */
  italic?: boolean;
  /** 是否标记 */
  mark?: boolean;
  /** 是否强强调 */
  strong?: boolean;
}

// Title 组件 Props
export interface TitleProps extends BaseTypographyProps {
  /** 标题级别 */
  level?: TitleLevel;
  /** 是否粗体 */
  bold?: boolean;
  /** 是否居中 */
  center?: boolean;
}

// Paragraph 组件 Props
export interface ParagraphProps extends BaseTypographyProps {
  /** 段落大小 */
  size?: TextSize | number;
  /** 字重 */
  weight?: TextWeight;
  /** 是否粗体 */
  bold?: boolean;
  /** 是否斜体 */
  italic?: boolean;
  /** 是否居中 */
  center?: boolean;
  /** 行高 */
  lineHeight?: number | string;
}

// Link 组件 Props
export interface LinkProps extends BaseTypographyProps {
  /** 链接地址 */
  href?: string;
  /** 链接目标 */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** 是否下划线 */
  underline?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 图标名称 */
  icon?: string;
}
