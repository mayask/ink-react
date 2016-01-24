
import React from 'react'

export class Container extends React.Component {
  render() {
    return (
      <table className="container">
        <tbody>
          <tr>
            <td>
              {this.props.children}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
