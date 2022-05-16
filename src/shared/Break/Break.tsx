import React from 'react';

import cn from 'classnames'
import styles from './break.css';

type TBreakSize = 4 | 8 | 12 | 16 | 20
type TDisplays = 'mobile' | 'tablet' | 'desctop'

interface IBreakProps {
  size: TBreakSize
  mobileSize?: TDisplays
  tabletSize?: TDisplays
  desktopSize?: TDisplays
  inline?: boolean
  top?: boolean
}

export function Break({
  size,
  mobileSize,
  tabletSize,
  desktopSize,
  inline = false,
  top = false
}: IBreakProps) {

  return (
    <div
      className={cn(
        styles[`s${size}`],
        styles[inline ? 'inline' : ''],
        styles[top ? 'top' : ''],
        { [styles[`mobile_s${mobileSize}`]]: mobileSize },
        { [styles[`tablet_s${tabletSize}`]]: tabletSize },
        { [styles[`desktop_s${desktopSize}`]]: desktopSize }
      )}
    />
  )
}
