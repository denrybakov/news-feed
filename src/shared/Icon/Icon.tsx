import React from 'react';
import styles from './icon.css';

import {
  BlockIcon,
  MenuIcon,
  WarningIcon,
  SaveIcon,
  CommentIcon,
  SharedIcon
} from '../icons';

export enum EIcons {
  block = 'block',
  comment = 'comment',
  menu = 'menu',
  save = 'save',
  shared = 'shared',
  warning = 'warning'
}

type TSizes = 12 | 14 | 16 | 20 | 24

interface IIconProps {
  name: EIcons,
  size?: TSizes
}

export function Icon({
  name = EIcons.block,
  size = 16
}: IIconProps) {

  const toggleIcon = (): JSX.Element => {
    switch (name) {
      case 'comment':
        return <CommentIcon size={size} />
      case 'menu':
        return <MenuIcon size={size} />
      case 'save':
        return <SaveIcon size={size} />
      case 'shared':
        return <SharedIcon size={size} />
      case 'warning':
        return <WarningIcon size={size} />
      default:
        return <BlockIcon size={size} />
    }
  }

  return toggleIcon()
}
