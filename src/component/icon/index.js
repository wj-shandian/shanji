import React from 'react';
import IconSvg from './iconSvg';

// 组件默认全局配置属性
let configs = {
  type: '',
  size: 70,
  svg: true,
  family: '',
};

const Icon = props => {
  const {
    name,
    color,
    style,
    type = configs.type,
    size = configs.size,
    ...restProps
  } = props;

  return (
    <IconSvg
      {...restProps}
      size={size}
      type={name || type}
      color={color}
      style={style}
    />
  );
};

export default Icon;
