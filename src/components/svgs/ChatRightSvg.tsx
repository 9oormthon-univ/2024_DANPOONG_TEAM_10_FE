import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const SvgComponent = ({ height, width, color, props }: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 10 6"
    fill="none"
    {...props}
  >
    <Path fill={color} d="M10 0H0v6l10-6Z" />
  </Svg>
);
export default SvgComponent;
