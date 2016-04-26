
import React from 'react'
import { InkComponent } from './_InkComponent'
import classnames from 'classnames'

export class Col extends InkComponent {
  renderInk() {
    let colClass = classnames(this.props.class, "columns")
    let colContentClass = classnames({
      'center': this.props.center,
      'panel': this.props.panel
    })
    return (
      <th className={colClass}>
        <table>
          <tr>
            <th className={colContentClass}>
              {this.renderChildren()}
            </th>
            <th className="expander"></th>
          </tr>
        </table>
      </th>
    );
  }
}
