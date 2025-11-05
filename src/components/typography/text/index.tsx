/*
 * @Author: ylyu
 * @Date: 2025-11-04 21:31:41
 * @LastEditors: ylyu
 * @LastEditTime: 2025-11-05 13:21:20
 * @Description:
 */
// src/components/Typography/Text.tsx
import React from 'react';
import { Typography, ConfigProvider } from 'antd';
import type { TextProps as AntdTextProps } from 'antd/es/typography/Text';
import { TextProps, SIZE_MAP, WEIGHT_MAP, TypographyType } from '../index.d';

const { Text: AntdText } = Typography;

const Text: React.FC<TextProps> = (props) => {
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
    code = false,
    keyboard = false,
    underline = false,
    delete: deleteLine = false,
    italic = false,
    mark = false,
    strong = false,
    ...restProps
  } = props;

  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('typography');

  // 构建样式
  const textStyle: React.CSSProperties = {
    ...style,
  };

  // 处理尺寸
  if (typeof size === 'string') {
    textStyle.fontSize = SIZE_MAP[size];
  } else {
    textStyle.fontSize = size;
  }

  // 处理字重
  textStyle.fontWeight = WEIGHT_MAP[weight];

  // 处理文本装饰
  if (underline) {
    textStyle.textDecoration = 'underline';
  }
  if (deleteLine) {
    textStyle.textDecoration = 'line-through';
  }
  if (italic) {
    textStyle.fontStyle = 'italic';
  }

  // 构建类名
  const textClassName = [
    prefixCls,
    `${prefixCls}-text`,
    className,
    type !== 'default' && `${prefixCls}-${type}`,
    disabled && `${prefixCls}-disabled`,
  ]
    .filter(Boolean)
    .join(' ');

  // 处理 Antd 的特定属性
  const antdProps: AntdTextProps = {
    className: textClassName,
    style: textStyle,
    type: type !== 'default' ? type : undefined,
    disabled,
    copyable: copyable as any,
    editable: editable as any,
    ellipsis: ellipsis as any,
    onClick,
    ...restProps,
  };

  if (code) {
    return (
      <AntdText code {...antdProps}>
        {children}
      </AntdText>
    );
  }

  if (keyboard) {
    return (
      <AntdText keyboard {...antdProps}>
        {children}
      </AntdText>
    );
  }

  if (mark) {
    return (
      <AntdText mark {...antdProps}>
        {children}
      </AntdText>
    );
  }

  if (strong) {
    return (
      <AntdText strong {...antdProps}>
        {children}
      </AntdText>
    );
  }

  if (deleteLine) {
    return (
      <AntdText delete {...antdProps}>
        {children}
      </AntdText>
    );
  }

  if (underline) {
    return (
      <AntdText underline {...antdProps}>
        {children}
      </AntdText>
    );
  }

  return <AntdText {...antdProps}>{children}</AntdText>;
};

export default Text;
