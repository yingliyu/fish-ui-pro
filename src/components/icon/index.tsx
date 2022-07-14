/*
 * @Author: ylyu
 * @Date: 2022-01-18 11:45:30
 * @LastEditors: ylyu
 * @LastEditTime: 2022-07-14 16:14:29
 * @Description:
 */
import {
  HomeOutlined,
  // LoadingOutlined,
  // SettingFilled,
  // SmileOutlined,
  // SyncOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
import React from 'react';

const Icon: React.FC<any> = ({ title }: { title: string }) => (
  <div>
    <h1>{title}</h1>
    <Space>
      {/* <HomeOutlined /> */}
      {/* <SettingFilled />
      <SmileOutlined />
      <SyncOutlined spin />
      <SmileOutlined rotate={180} />
      <LoadingOutlined /> */}
    </Space>
  </div>
);

export default Icon;
