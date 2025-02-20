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
      <_Circle cx="12" cy="18" r="3" stroke={`${color}`} />
      <_Circle cx="6" cy="6" r="3" stroke={`${color}`} />
      <_Circle cx="18" cy="6" r="3" stroke={`${color}`} />
      <Path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" stroke={`${color}`} />
      <Path d="M12 12v3" stroke={`${color}`} />
    </Svg>
  )
}

Icon.displayName = 'GitFork'

export const GitFork = memo<IconProps>(themed(Icon))
