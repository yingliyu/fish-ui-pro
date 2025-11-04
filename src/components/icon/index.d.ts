// src/components/Icon/index.d.ts
import React from 'react';

export interface IconSourceConfig {
  scriptUrl: string | string[];
  extraCommonProps?: Record<string, any>;
}

export interface IconProps {
  /** 图标名称 */
  name: string;
  /** 图标源 */
  source?: string;
  /** 自定义图标源配置 */
  sourceConfig?: IconSourceConfig;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 旋转动画 */
  spin?: boolean;
  /** 旋转角度 */
  rotate?: number;
  /** 点击事件 */
  onClick?: React.MouseEventHandler;
  /** 提示文字 */
  tooltip?: React.ReactNode;
  /** 提示位置 */
  tooltipPlacement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom';
  /** 图标颜色 */
  color?: string;
  /** 图标大小 */
  size?: number | string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 加载失败时显示的备用图标 */
  fallback?: React.ReactNode;
}

export const addIconSource: (sourceKey: string, config: IconSourceConfig) => void;
export const DEFAULT_ICON_SOURCES: Record<string, IconSourceConfig>;

declare const Icon: React.FC<IconProps>;
export default Icon;
