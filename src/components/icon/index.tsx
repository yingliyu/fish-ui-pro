/*
 * @Author: ylyu
 * @Date: 2022-01-18 11:45:30
 * @LastEditors: ylyu
 * @LastEditTime: 2022-08-09 15:28:41
 * @Description:
 */

import React from 'react';
import * as AntdIcons from '@ant-design/icons';
import { Tooltip, ConfigProvider } from 'antd';
import type { TooltipProps } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
// 图标类型定义
type AntdIconType = keyof typeof AntdIcons;
// 图标源类型
export type IconSource = 'antd' | 'iconfont';
// 默认 iconfont 配置
export interface IconfontConfig {
  /**iconfont字体图标js链接
   * @default //at.alicdn.com/t/c/font_xxx.js
   */
  scriptUrl: string | string[];
  extraCommonProps?: Record<string, any>;
}
// 默认图标源配置
const DEFAULT_ICONFONT_CONFIG: IconfontConfig = {
  scriptUrl: [
    '//at.alicdn.com/t/c/font_3266900_shha5vws2a.js', // 替换为你的默认 iconfont 项目地址
  ],
};
// 创建默认的 iconfont 组件
const DefaultIconfont = createFromIconfontCN(DEFAULT_ICONFONT_CONFIG);
// 图标源缓存
const iconfontCache = new Map<string, ReturnType<typeof createFromIconfontCN>>();

export interface IconProps {
  /** 图标名称 */
  name: AntdIconType;
  /**
   * 图标源类型 antd | iconfont
   * @default antd
   * */
  source?: IconSource;
  /** 自定义 iconfont 配置 */
  iconfontConfig?: IconfontConfig;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 旋转动画 */
  spin?: boolean;
  /** 旋转角度 */
  rotate?: number;
  /** 点击事件 */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /** 提示文字 */
  tooltip?: React.ReactNode;
  /** 提示位置 */
  tooltipPlacement?: TooltipProps['placement'];
  /** 图标颜色 */
  color?: string;
  /** 图标大小 */
  size?: number | string;
  /**
   * 是否禁用
   * @default false
   *  */
  disabled?: boolean;
  /** 双色图标主色 */
  twoToneColor?: string;
  /** 加载失败时的回退图标 */
  fallback?: React.ReactNode;
}

const FSIcon = (props: IconProps) => {
  const {
    name,
    source = 'antd',
    iconfontConfig,
    className = '',
    style,
    spin = false,
    rotate,
    onClick,
    tooltip,
    tooltipPlacement = 'top',
    color,
    size = 16,
    disabled = false,
    twoToneColor,
    fallback,
    ...restProps
  } = props;

  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('icon');
  const [error, setError] = React.useState(false);
  // 获取 Iconfont 组件
  const getIconfontComponent = React.useCallback(() => {
    if (!iconfontConfig) {
      return DefaultIconfont;
    }

    const configKey = JSON.stringify(iconfontConfig);
    if (iconfontCache.has(configKey)) {
      return iconfontCache.get(configKey)!;
    }

    const IconfontComponent = createFromIconfontCN(iconfontConfig);
    iconfontCache.set(configKey, IconfontComponent);
    return IconfontComponent;
  }, [iconfontConfig]);
  // 渲染 Antd 图标
  const renderAntdIcon = () => {
    const IconComponent = AntdIcons[name as AntdIconType] as React.ComponentType<any>;

    if (!IconComponent) {
      console.warn(`Antd Icon '${name}' does not exist in @ant-design/icons`);
      return null;
    }

    const iconProps: any = {
      className,
      style: {
        fontSize: typeof size === 'number' ? `${size}px` : size,
        color,
        cursor: onClick && !disabled ? 'pointer' : 'not-allowed',
        opacity: disabled ? 0.5 : 1,
        verticalAlign: '-0.125em',
        ...style,
      },
      spin,
      rotate,
      onClick: handleClick,
      ...restProps,
    };

    // 处理双色图标
    if (twoToneColor && 'twoToneColor' in IconComponent.prototype) {
      iconProps.twoToneColor = twoToneColor;
    }

    return React.createElement(IconComponent, iconProps);
  };
  // 渲染 Iconfont 图标
  const renderIconfontIcon = () => {
    const IconfontComponent = getIconfontComponent();

    const iconProps: any = {
      type: name,
      className,
      style: {
        fontSize: typeof size === 'number' ? `${size}px` : size,
        color,
        cursor: onClick && !disabled ? 'pointer' : 'not-allowed',
        opacity: disabled ? 0.5 : 1,
        verticalAlign: '-0.125em',
        ...style,
      },
      spin,
      rotate,
      onClick: handleClick,
      onError: () => setError(true),
      ...restProps,
    };

    return React.createElement(IconfontComponent, iconProps);
  };

  // 渲染回退内容
  const renderFallback = () => {
    if (fallback) {
      return (
        <span
          className={className}
          style={{
            fontSize: typeof size === 'number' ? `${size}px` : size,
            color,
            cursor: 'default',
            opacity: 0.5,
            verticalAlign: '-0.125em',
            ...style,
          }}
        >
          {fallback}
        </span>
      );
    }

    return (
      <span
        className={className}
        style={{
          fontSize: typeof size === 'number' ? `${size}px` : size,
          color: '#ccc',
          cursor: 'default',
          opacity: 0.5,
          verticalAlign: '-0.125em',
          ...style,
        }}
      >
        □
      </span>
    );
  };
  // 构建类名
  const iconClassName = [
    prefixCls,
    `${prefixCls}-${source}`,
    className,
    disabled && `${prefixCls}-disabled`,
    error && `${prefixCls}-error`,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
    if (disabled) return;
    onClick?.(e);
  };
  // 渲染图标内容
  const renderIconContent = () => {
    if (error) {
      return renderFallback();
    }

    let iconElement: React.ReactNode;

    if (source === 'antd') {
      iconElement = renderAntdIcon();
    } else {
      iconElement = renderIconfontIcon();
    }

    // 如果图标渲染失败，显示回退
    if (!iconElement) {
      return renderFallback();
    }

    return React.isValidElement(iconElement)
      ? React.cloneElement(iconElement as React.ReactElement, {
          className: iconClassName,
        })
      : iconElement;
  };
  const iconElement = renderIconContent();

  // 如果有提示文字且未禁用，显示 Tooltip
  if (tooltip && !disabled && !error) {
    return (
      <Tooltip title={tooltip} placement={tooltipPlacement}>
        {iconElement}
      </Tooltip>
    );
  }

  return iconElement;
};
/**工具函数：添加全局 iconfont 配置*/
export const setDefaultIconfontConfig = (config: IconfontConfig) => {
  Object.assign(DEFAULT_ICONFONT_CONFIG, config);
  // 清除缓存以便重新创建
  iconfontCache.clear();
};

// 工具函数：获取所有可用的 Antd 图标名称
export const getAntdIconNames = (): string[] => {
  return Object.keys(AntdIcons).filter(
    (name) => name !== 'default' && typeof AntdIcons[name as AntdIconType] === 'function',
  );
};

// 工具函数：验证图标是否存在
export const isValidIcon = (name: string, source: IconSource = 'antd'): boolean => {
  if (source === 'antd') {
    return !!AntdIcons[name as AntdIconType];
  }
  // 对于 iconfont，我们无法在编译时验证，返回 true
  return true;
};

export default FSIcon;
