/*
 * @Author: ylyu
 * @Date: 2021-12-28 21:31:41
 * @LastEditors: ylyu
 * @LastEditTime: 2022-01-18 13:21:20
 * @Description:
 */
// src/components/Typography/Title.tsx
import React from 'react';
import { Typography, ConfigProvider } from 'antd';
import type { TitleProps as AntdTitleProps } from 'antd/es/typography/Title';
import { TitleProps, WEIGHT_MAP, TypographyType } from '../index.d';

const { Title: AntdTitle } = Typography;

const Title: React.FC<TitleProps> = (props) => {
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
    level = 1,
    bold = false,
    center = false,
    ...restProps
  } = props;

  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('typography');

  // 构建样式
  const titleStyle: React.CSSProperties = {
    ...style,
    textAlign: center ? 'center' : 'left',
  };

  // 处理字重
  if (bold) {
    titleStyle.fontWeight = WEIGHT_MAP.bold;
  }

  // 构建类名
  const titleClassName = [
    prefixCls,
    `${prefixCls}-title`,
    `${prefixCls}-title-${level}`,
    className,
    type !== 'default' && `${prefixCls}-${type}`,
    disabled && `${prefixCls}-disabled`,
    center && `${prefixCls}-center`,
  ]
    .filter(Boolean)
    .join(' ');

  const antdProps: AntdTitleProps = {
    className: titleClassName,
    style: titleStyle,
    level,
    type: type !== 'default' ? type : undefined,
    disabled,
    copyable: copyable as any,
    editable: editable as any,
    ellipsis: ellipsis as any,
    onClick,
    ...restProps,
  };

  return <AntdTitle {...antdProps}>{children}</AntdTitle>;
};

export default Title;
