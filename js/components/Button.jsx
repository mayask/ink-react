
import React from 'react'
import classnames from 'classnames'

export class Button extends React.Component {
  render() {
    let buttonClass = classnames('button', this.props.class)

    return (
      <table className={buttonClass}>
        <tr>
          <td>
            <a href={this.props.href}>{this.props.children}</a>
          </td>
        </tr>
      </table>
    );
  }
}
