import React, { Component, PropTypes } from 'react'
import { Button, ButtonToolbar, Tooltip,
  OverlayTrigger, Modal } from 'react-bootstrap'
import { Icon } from '../../components'

class TestComp extends Component {
  open () {
    this.setState({ showModal: true })
  }
  close () {
    this.setState({ showModal: false })
  }
  render () {
    const tooltip = (
      <Tooltip id='tooltip-bottom' role='tooltip'>
      This is some tooltip text</Tooltip>
    )
    const {
      show
    } = this.props

    return (
      <div>
        <Icon name='search' size='s2' /> Icon test
        <ButtonToolbar>
          <OverlayTrigger placement='bottom' overlay={tooltip} >
            <Button bsStyle='default'>Test tooltip</Button>
          </OverlayTrigger>
        </ButtonToolbar>
        <Button
          bsStyle='primary'
          bsSize='large'
          onClick={open}
        >
          Launch demo modal
        </Button>

        <Modal show={show} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>
            Contained Modal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Elit est explicabo ipsum eaque dolorem blanditiis doloribus
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

TestComp.propTypes = {
  show: PropTypes.bool
}
export default TestComp
