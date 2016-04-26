
import React from 'react'
import { InkComponent } from './_InkComponent'
import classnames from 'classnames'

export class Paragraph extends InkComponent {
  renderInk() {
  	let pClass = classnames(this.props.class)
    return (
      <p className={pClass}>{this.props.children}</p>
    )
  }
}
