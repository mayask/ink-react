
import React from 'react'
import classnames from 'classnames'
import { InkComponent } from './_InkComponent'

export class Collout extends InkComponent {
  renderInk() {
    let colloutClass = classnames('callout-inner', this.props.class)
    return (
      <table className="collout">
        <tr>
          <th className={colloutClass}>
            {this.renderChildren()}
          </th>
        </tr>
      </table>
    );
  }
}
