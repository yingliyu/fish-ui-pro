/*
 * @Author: ylyu
 * @Date: 2022-01-14 17:38:05
 * @LastEditors: ylyu
 * @LastEditTime: 2022-07-14 16:33:45
 * @Description:
 */
import React from 'react';
import { Divider as AntdDivider } from 'antd';
interface IDividerProps {
  /**	嵌套的标题 */
  children?: React.ReactNode;
  /**	分割线样式类 */
  className?: string;
  /**
   * 是否虚线
   * @default false
   */
  dashed?: boolean;
  /**
   * 分割线标题的位置
   * @default center
   */
  orientation?: 'center' | 'left' | 'right';
  /**
   * 标题和最近 left/right 边框之间的距离，去除了分割线，同时 orientation 必须为 left 或 right
   */
  orientationMargin?: string | number;
  /**
   * 文字是否显示为普通正文样式
   * @default false
   */
  plain?: boolean;
  /**分割线样式对象 */
  style?: React.CSSProperties;

  /**水平还是垂直类型
   * @default horizontal
   */
  type?: 'horizontal' | 'vertical';
}

const Divider: React.FC<IDividerProps> = (props: IDividerProps) => (
  <AntdDivider {...props}>{props?.children}</AntdDivider>
);

export default Divider;
