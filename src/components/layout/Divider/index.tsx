/*
 * @Author: ylyu
 * @Date: 2022-01-14 17:38:05
 * @LastEditors: ylyu
 * @LastEditTime: 2022-01-17 16:44:24
 * @Description:
 */
import React from 'react';
import { Divider as AntdDivider } from 'antd';

const Divider: React.FC = (props) => <AntdDivider>{props?.children}</AntdDivider>;

export default Divider;
