/*
 * @Author: ylyu
 * @Date: 2021-12-28 21:31:41
 * @LastEditors: ylyu
 * @LastEditTime: 2022-01-14 17:46:08
 * @Description:
 */
import React from 'react';
import { Button as AntdButton } from 'antd';
import classNames from 'classnames';

declare type ButtonHTMLType = 'submit' | 'button' | 'reset';
declare const ButtonTypes: ['default', 'primary', 'ghost', 'dashed', 'link', 'text'];
export declare type ButtonType = typeof ButtonTypes[number];

interface IABSButtonProps {
  loading?: boolean;
  danger?: boolean;
  className?: string;
  type?: ButtonType;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  block?: boolean;
  large?: boolean;
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: 'blue' | 'red' | 'yellow' | 'green' | 'white';
}

const Button: React.FC<IABSButtonProps> = (props: IABSButtonProps) => {
  const {
    danger,
    loading,
    style,
    children,
    large = false,
    className,
    onClick,
    type = 'primary',
    icon,
    block = false,
    disabled,
    htmlType,
    color,
  } = props;

  let classes = classNames('abs-btn', className, {
    'abs-btn-large': large,
    'abs-btn-block': block,
    'abs-btn-link': type === 'link',
  });
  const displayStyle = block ? 'block' : 'inline-block';

  let newTpye = type;
  let isDanger = danger;
  if (color) {
    switch (color) {
      case 'blue':
        newTpye = 'primary';
        break;
      case 'red':
        isDanger = true;
        break;
      case 'white':
        newTpye = 'default';
        break;
      case 'yellow':
        classes = classNames(classes, 'abs-yellow-btn');
        break;
      case 'green':
        classes = classNames(classes, 'abs-green-btn');
        break;
      default:
        break;
    }
  }

  return (
    <div className={classes} style={{ display: displayStyle, ...style }}>
      <AntdButton
        icon={icon}
        onClick={onClick}
        disabled={disabled}
        type={newTpye}
        block={block}
        htmlType={htmlType}
        danger={isDanger}
        loading={loading}
      >
        {children}
      </AntdButton>
    </div>
  );
};

export default Button;
