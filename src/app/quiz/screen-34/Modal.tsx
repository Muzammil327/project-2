import React from 'react'
import styles from './Modal.module.css'

interface ModalProps {
  isVisible: boolean
  title: string
  onClose: () => void
  onYes: () => void
  onNo: () => void
}

const Modal: React.FC<ModalProps> = ({
  isVisible,
  title,
  onClose,
  onYes,
  onNo
}) => {
  if (!isVisible) return null

  return (
    <div className="text-center flex flex-col fixed w-full h-full max-h-full top-0 left-0 px-5 z-50 overflow-hidden bg-[rgba(0,0,0,0.6)]">
      <div className="relative w-full max-w-[480px] m-auto py-6 px-[0.875rem] bg-white rounded-xl">
        <h4 className="text-center font-bold w-full text-[1.25rem] font2 mb-6">{title}</h4>
        <div className="flex gap-4 justify-between" style={{
            marginBlockStart: '2rem',
            marginInline: '.625rem'
        }}>
          <button className={styles.modalButton} onClick={onNo}>
            No
          </button>
          <button className={styles.modalButton} onClick={onYes}>
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
