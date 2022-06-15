import styles from './dropdown.css';
import { ReactNode, useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';

interface IDropdownProps {
  children?: ReactNode,
  button: ReactNode,
  isOpen?: boolean,
  onOpen?: () => void,
  onClose?: () => void
}

const VOID_FUNC = () => { }

export function Dropdown({
  children,
  button,
  isOpen = true,
  onOpen = VOID_FUNC,
  onClose = VOID_FUNC
}: IDropdownProps) {

  const [isDropdown, setIsDropdown] = useState(false)
  const [offset, setOffset] = useState({ top: '0px', left: '0px' })

  const menuRef = useRef<HTMLDivElement>(null)


  useEffect(() => setIsDropdown(false), [isOpen])
  useEffect(() => isDropdown ? onOpen() : onClose(), [isDropdown])

  const handleOpen = (e: any) => {
    const { top } = document.body.getBoundingClientRect()
    const btn = e.target.getBoundingClientRect()
    console.log(top)
    console.log(btn)
    btn
      ? setOffset(prev =>
        ({ ...prev, top: `${Math.ceil(btn.top - top)}px`, left: `${75}vw` }))
      : null
    isOpen ? setIsDropdown(!isDropdown) : null
  }

  const node = document.querySelector('#dropdown_root')
  if (!node) return null

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        {button}
      </div>
      <div>
        {isDropdown && (
          createPortal((
            <div className={styles.listContainer} ref={menuRef}>
              <div
                className={styles.list}
                style={offset}
                onClick={() => setIsDropdown(false)}
              >
                {children}
              </div>
            </div>
          ), node
          )
        )}
      </div>
    </div>
  )
}
