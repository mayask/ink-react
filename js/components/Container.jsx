
import React from 'react'
import { InkComponent } from './_InkComponent'

export class Container extends InkComponent {
  renderInk() {
    return (
      <table className="container">
        <tbody>
          <tr>
            <td>
              {this.renderChildren()}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
