import React, { ReactNode } from 'react';
import cn from 'classnames'
import styles from './text.css';


export enum EColors {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  grayF4 = 'grayF4',
  grayF3 = 'grayF3',
  grayD9 = 'grayD9',
  grayC4 = 'grayC4',
  gray99 = 'gray99',
  gray66 = 'gray66',
  grayEC = 'grayEC'
}

type TText = 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'div'
type TSizes = 28 | 20 | 16 | 14 | 12 | 10

interface ITextProps {
  children?: ReactNode
  As?: TText
  size: TSizes
  mobileSize?: TSizes
  tabletSize?: TSizes
  desctopSize?: TSizes
  color?: EColors
  bold?: boolean
}

export function Text({
  As = 'span',
  children,
  size,
  mobileSize,
  tabletSize,
  desctopSize,
  color = EColors.black,
  bold = false
}: ITextProps) {

  const classes = cn(
    styles[`s${size}`],
    styles[color],
    styles[bold ? 'bold' : ''],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desctopSize}`]]: desctopSize }
  )

  return (
    <As className={classes}>
      {children}
    </As>
  )
}

