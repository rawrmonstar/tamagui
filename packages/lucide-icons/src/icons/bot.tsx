import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

import { IconProps } from '../IconProps'
import { themed } from '../themed'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Rect width="18" height="10" x="3" y="11" rx="2" stroke={`${color}`} />
      <_Circle cx="12" cy="5" r="2" stroke={`${color}`} />
      <Path d="M12 7v4" stroke={`${color}`} />
      <Line x1="8" x2="8" y1="16" y2="16" stroke={`${color}`} />
      <Line x1="16" x2="16" y1="16" y2="16" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Bot'

export const Bot = memo<IconProps>(themed(Icon))
