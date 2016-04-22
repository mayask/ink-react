
import React from 'react'
import { InkComponent } from './_InkComponent'
import classnames from 'classnames'

export class Image extends InkComponent {
  renderInk() {
    let imgClass = classnames(this.props.class)
    return (
      <img className={imgClass} src={this.props.src} alt={this.props.alt}/>
    )
  }
}
