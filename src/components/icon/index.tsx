/*
 * @Author: ylyu
 * @Date: 2022-01-18 11:45:30
 * @LastEditors: ylyu
 * @LastEditTime: 2022-08-09 15:28:41
 * @Description:
 */
import { HomeOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';

const Icon: React.FC<any> = ({ title }: { title: string }) => (
  <div>
    <h1>{title}</h1>
    <Space>{/* <HomeOutlined /> */}</Space>
  </div>
);

export default Icon;
