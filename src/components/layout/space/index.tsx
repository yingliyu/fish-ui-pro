/*
 * @Author: ylyu
 * @Date: 2022-01-14 17:38:05
 * @LastEditors: ylyu
 * @LastEditTime: 2022-07-14 16:01:38
 * @Description:
 */
import React from 'react';
import { Space as AntdSpace } from 'antd';

export type SizeType = 'small' | 'middle' | 'large' | undefined;
export type SpaceSize = SizeType | number;
export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  size?: SpaceSize | [SpaceSize, SpaceSize];
  /**方向 */
  direction?: 'horizontal' | 'vertical';
  // No `stretch` since many components do not support that.
  align?: 'start' | 'end' | 'center' | 'baseline';
  split?: React.ReactNode;
  wrap?: boolean;
}
const Space: React.FC<SpaceProps> = (props) => <AntdSpace>{props?.children}</AntdSpace>;

export default Space;
