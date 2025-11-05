/*
 * @Author: ylyu
 * @Date: 2021-12-28 21:31:41
 * @LastEditors: ylyu
 * @LastEditTime: 2022-01-18 13:21:20
 * @Description:
 */
// src/components/Typography/Paragraph.tsx
import React from 'react';
import { Typography, ConfigProvider } from 'antd';
import type { ParagraphProps as AntdParagraphProps } from 'antd/es/typography/Paragraph';
import { ParagraphProps, SIZE_MAP, WEIGHT_MAP, TypographyType } from '../index.d';

const { Paragraph: AntdParagraph } = Typography;

const Paragraph: React.FC<ParagraphProps> = (props) => {
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
    size = 'md',
    weight = 'normal',
    bold = false,
    italic = false,
    center = false,
    lineHeight,
    ...restProps
  } = props;

  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('typography');

  // 构建样式
  const paragraphStyle: React.CSSProperties = {
    ...style,
    textAlign: center ? 'center' : 'left',
  };

  // 处理尺寸
  if (typeof size === 'string') {
    paragraphStyle.fontSize = SIZE_MAP[size];
  } else {
    paragraphStyle.fontSize = size;
  }

  // 处理字重
  const finalWeight = bold ? 'bold' : weight;
  paragraphStyle.fontWeight = WEIGHT_MAP[finalWeight];

  // 处理斜体
  if (italic) {
    paragraphStyle.fontStyle = 'italic';
  }

  // 处理行高
  if (lineHeight) {
    paragraphStyle.lineHeight = lineHeight;
  }

  // 构建类名
  const paragraphClassName = [
    prefixCls,
    `${prefixCls}-paragraph`,
    className,
    type !== 'default' && `${prefixCls}-${type}`,
    disabled && `${prefixCls}-disabled`,
    center && `${prefixCls}-center`,
  ]
    .filter(Boolean)
    .join(' ');

  const antdProps: AntdParagraphProps = {
    className: paragraphClassName,
    style: paragraphStyle,
    type: type !== 'default' ? type : undefined,
    disabled,
    copyable: copyable as any,
    editable: editable as any,
    ellipsis: ellipsis as any,
    onClick,
    ...restProps,
  };

  return <AntdParagraph {...antdProps}>{children}</AntdParagraph>;
};

export default Paragraph;
