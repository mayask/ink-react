
import React from 'react'
import { InkComponent } from './_InkComponent'
import classnames from 'classnames'

export class Row extends InkComponent {
  renderInk() {
    var children = this.renderChildren()
    if (children.length === undefined) {
      children = [children]
    }
    return (
      <table className="row">
        <tbody>
          <tr>
            {children.map(function (child, i) {
              var rowChildClass = classnames('wrapper', {
                'last': (i + 1) === children.length
              })
              return (
                <td key={i} className={rowChildClass}>
                  {child}
                </td>
              )
            }, this)}
          </tr>
        </tbody>
      </table>
    );
  }
}
