
import React from 'react'
import { InkComponent } from './_InkComponent'
import classnames from 'classnames'

export class Row extends InkComponent {
  renderInk() {
    var children = this.renderChildren()
    return (
      <table className="row">
        <tbody>
          <tr>
            {React.Children.map(children, function (child, i) {
              let offsetClass = {}
              if (React.isValidElement(child)) {
                offsetClass[`offset-by-${child.props.offset}`] = child.props.offset
              }
              var rowChildClass = classnames('wrapper', {
                'last': (i + 1) === React.Children.count(children),
              }, offsetClass)
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
