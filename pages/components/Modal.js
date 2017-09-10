import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  cursor: pointer;
  display: ${props => props.on === 'true' ? 'block' : 'none'};
`

class Modal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      on : 'false'
    }
  }

  render() {
    return (
      <Div on={this.props.on}>
        <div className="modal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" onClick={ () => {this.props.handle()} }>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Save changes</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </Div>
    )
  }
}

export default Modal