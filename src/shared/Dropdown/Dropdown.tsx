import React, { ReactNode, useEffect, useState } from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  children?: ReactNode,
  button: ReactNode,
  isOpen: boolean,
  onOpen?: () => void,
  onClose?: () => void
}

const VOID_FUNC = () => { }

export function Dropdown({
  children,
  button,
  isOpen,
  onOpen = VOID_FUNC,
  onClose = VOID_FUNC
}: IDropdownProps) {

  const [isDropdown, setIsDropdown] = useState(false)
  useEffect(() => setIsDropdown(false), [isOpen])
  useEffect(() => isDropdown ? onOpen() : onClose(), [isDropdown])

  const handleOpen = () => isDropdown ? setIsDropdown(!isDropdown) : null

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isDropdown && (
        <div className={styles.listContainer}>
          <div
            className={styles.list}
            onClick={() => setIsDropdown(false)}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
