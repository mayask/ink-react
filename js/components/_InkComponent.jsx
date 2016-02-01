
import React from 'react'

export class InkComponent extends React.Component {
  renderInk() {
    throw new Error('must override this method')
  }

  renderChildren() {
    var result = this.props.children
    if (this.props.center) {
      result = (
        <center>
          {result}
        </center>
      )
    }
    return result
  }

  /* Do not override this method. Use `renderCenter` instead */
  render() {
    return this.renderInk()
  }
}
