/*
 * @Author: ylyu
 * @Date: 2022-01-18 11:45:30
 * @LastEditors: ylyu
 * @LastEditTime: 2022-07-15 16:14:43
 * @Description:
 */
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Icon from './index';

describe('<Icon />', () => {
  it('render Foo with dumi', () => {
    const msg = 'dumi';

    render(<Icon title={msg} />);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
