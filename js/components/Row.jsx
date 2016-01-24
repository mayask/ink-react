
import React from 'react'
import classnames from 'classnames'

export class Row extends React.Component {
  render() {
    return (
      <table className="row">
        <tbody>
          <tr>
            {this.props.children.map(function (child, i) {
              var rowChildClass = classnames('wrapper', {
                'last': (i + 1) === this.props.children.length
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
