/*
 * @Author: ylyu
 * @Date: 2021-12-28 21:31:41
 * @LastEditors: ylyu
 * @LastEditTime: 2022-01-18 13:21:20
 * @Description:
 */
// src/components/Typography/Link.tsx
import React from 'react';
import { Typography, ConfigProvider } from 'antd';
import type { LinkProps as AntdLinkProps } from 'antd/es/typography/Link';
import { LinkProps, TypographyType } from '../index.d';

const { Link: AntdLink } = Typography;

const Link: React.FC<LinkProps> = (props) => {
  const {
    children,
    className = '',
    style,
    type = 'default',
    disabled = false,
    copyable,
    editable,
    ellipsis,
    onClick,
    href,
    target = '_self',
    underline = true,
    icon,
    ...restProps
  } = props;

  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('typography');

  // 构建样式
  const linkStyle: React.CSSProperties = {
    ...style,
    textDecoration: underline ? 'underline' : 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
  };

  // 构建类名
  const linkClassName = [
    prefixCls,
    `${prefixCls}-link`,
    className,
    type !== 'default' && `${prefixCls}-${type}`,
    disabled && `${prefixCls}-disabled`,
    !underline && `${prefixCls}-no-underline`,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const antdProps: AntdLinkProps = {
    className: linkClassName,
    style: linkStyle,
    type: type !== 'default' ? type : undefined,
    disabled,
    copyable: copyable as any,
    editable: editable as any,
    ellipsis: ellipsis as any,
    onClick: handleClick,
    href: disabled ? undefined : href,
    target,
    ...restProps,
  };

  return <AntdLink {...antdProps}>{children}</AntdLink>;
};

export default Link;
