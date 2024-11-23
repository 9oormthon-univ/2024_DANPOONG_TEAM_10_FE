import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = ({ width, height, color, props }: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 10 6"
    fill="none"
    {...props}
  >
    <Path fill={color} d="M0 0h10v6L0 0Z" />
  </Svg>
);
export default SvgComponent;
