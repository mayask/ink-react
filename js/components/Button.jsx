
import React from 'react'
import classnames from 'classnames'
import { InkComponent } from './_InkComponent'

export class Button extends InkComponent {
  renderInk() {
    let buttonClass = classnames('button', this.props.class)
    return (
      <table className={buttonClass}>
        <tr>
          <td>
            <table>
              <tr>
                <td>
                  <a href={this.props.href}>{this.props.children}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    );
  }
}
