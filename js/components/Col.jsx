
import React from 'react'
import classnames from 'classnames'

export class Col extends React.Component {
  render() {
    let colClass = classnames(this.props.width, "columns")
    return (
      <table className={colClass}>
        <tbody>
          <tr>
            <td>
              {this.props.children}
            </td>
            <td className="expander"></td>
          </tr>
        </tbody>
      </table>
    );
  }
}
