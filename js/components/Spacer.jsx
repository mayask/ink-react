
import React from 'react'
import classnames from 'classnames'
import { InkComponent } from './_InkComponent'

export class Spacer extends InkComponent {
  renderInk() {
    return (
      <table className="spacer">
        <tbody>
          <tr>
            <td height={this.props.size}></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
