
import React from 'react'
import { InkComponent } from './_InkComponent'
import classnames from 'classnames'

export class Row extends InkComponent {
  renderInk() {
    let rowClass = classnames('row', this.props.class)
    return (
      <table className={rowClass}>
        <tbody>
          <tr>
            {this.renderChildren()}
          </tr>
        </tbody>
      </table>
    );
  }
}
