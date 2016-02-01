
import React from 'react'
import classnames from 'classnames'
import { InkComponent } from './_InkComponent'

export class Button extends InkComponent {
  renderInk() {
    let buttonClass = classnames('button', this.props.class)

    return (
      <table className={buttonClass}>
        <tbody>
          <tr>
            <td>
              <a href={this.props.href}>{this.renderChildren()}</a>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
