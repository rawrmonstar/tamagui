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
      <Path d="M9 18V5l12-2v13" stroke={`${color}`} />
      <Path d="m9 9 12-2" stroke={`${color}`} />
      <_Circle cx="6" cy="18" r="3" stroke={`${color}`} />
      <_Circle cx="18" cy="16" r="3" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'Music4'

export const Music4 = memo<IconProps>(themed(Icon))
