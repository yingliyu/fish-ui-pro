/*
 * @Author: ylyu
 * @Date: 2021-12-28 21:31:41
 * @LastEditors: ylyu
 * @LastEditTime: 2022-01-18 13:21:20
 * @Description:
 */
import React from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import './index.less';

declare type ButtonHTMLType = 'submit' | 'button' | 'reset';
declare const ButtonTypes: ['default', 'primary', 'ghost', 'dashed', 'link', 'text'];
export declare type ButtonType = typeof ButtonTypes[number];

interface IFSButtonProps {
  /**自定义类名 */
  className?: string;
  /**
   * 设置按钮载入状态
   * @default false
   */
  loading?: boolean;
  /**
   * 设置危险按钮
   * @default false
   */
  danger?: boolean;

  /**
   * 按钮类型
   * @default default
   */
  type?: ButtonType;
  style?: React.CSSProperties;
  /**设置按钮的图标组件 */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  /**
   * 按钮失效状态
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否是块级按钮，占据一整行
   * @default false
   */
  block?: boolean;
  large?: boolean;
  htmlType?: ButtonHTMLType;
  /**按钮颜色 */
  color?: 'blue' | 'red' | 'yellow' | 'green' | 'white';
  /**
   * 幽灵属性，使按钮背景透明
   * @default false
   */
  ghost?: boolean;
  /**
   * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
   * * @default -
   */
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FSButton: React.FC<IFSButtonProps> = (props: IFSButtonProps) => {
  const {
    danger,
    loading,
    style,
    children,
    large = false,
    className,
    onClick,
    type = 'default',
    icon,
    block = false,
    disabled,
    htmlType,
    color,
  } = props;

  let classes = classNames('fish-btn', className, {
    'fish-btn-large': large,
    'fish-btn-block': block,
    'fish-btn-link': type === 'link',
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
        classes = classNames(classes, 'fish-yellow-btn');
        break;
      case 'green':
        classes = classNames(classes, 'fish-green-btn');
        break;
      default:
        break;
    }
  }

  return (
    <div className={classes} style={{ display: displayStyle, ...style }}>
      <Button
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
      </Button>
    </div>
  );
};

export default FSButton;
