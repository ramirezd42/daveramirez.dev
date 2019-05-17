import React from "react"
import ReactModal from "react-modal"
import { X } from "react-feather"
import styles from "./Modal.module.scss"

export default ({ isOpen, children, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      closeTimeoutMS={200}
      className={styles.container}
    >
      <div className={styles.inner}>
        <X className={styles.closeButton} onClick={onClose} />
        {children}
      </div>
    </ReactModal>
  )
}
