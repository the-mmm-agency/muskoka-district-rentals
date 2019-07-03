import React from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#___gatsby')

const Modal = props => <ReactModal closeTimeoutMS={200} {...props} />

export default Modal
