import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import IconManager from './icon-manager';

const IconSvg = props => {
  const {type, size, style, color} = props;
  const icons = IconManager;
  const width = StyleSheet.flatten(style)?.width || props?.width;
  const height = StyleSheet.flatten(style)?.height || props?.height;

  return (
    <Svg
      width={width || size || 22}
      height={height || width || size || 22}
      viewBox="0 0 1024 1024"
      style={{...style}}>
      {icons[type] &&
        icons[type].map((path, i) => {
          const fill = Array.isArray(color) ? color[i] : color || path.fill;

          return <Path key={i} d={path.d} fill={fill} />;
        })}
    </Svg>
  );
};

export default IconSvg;
