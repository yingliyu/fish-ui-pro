/*
 * @Author: ylyu
 * @Date: 2021-12-28 21:31:41
 * @LastEditors: ylyu
 * @LastEditTime: 2021-12-28 21:48:15
 * @Description:
 */
import React from 'react';
import { Button as AntButton } from 'antd';
function Button({ children }: { children: string }) {
  return <AntButton>{children}</AntButton>;
}

export default Button;
