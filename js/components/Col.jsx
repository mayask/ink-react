
import React from 'react'
import { InkComponent } from './_InkComponent'
import classnames from 'classnames'

export class Col extends InkComponent {
  renderInk() {
    let colClass = classnames(this.props.width, "columns")
    return (
      <table className={colClass}>
        <tbody>
          <tr>
            <td>
              {this.renderChildren()}
            </td>
            <td className="expander"></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
