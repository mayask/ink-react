
import React from 'react'
import { InkComponent } from './_InkComponent'
import classnames from 'classnames'

export class Col extends InkComponent {
  renderInk() {
    let colClass = classnames(this.props.width, "columns")
    let colContentClass = classnames({
      'center': this.props.center
    })
    return (
      <table className={colClass}>
        <tbody>
          <tr>
            <td className={colContentClass}>
              {this.renderChildren()}
            </td>
            <td className="expander"></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
