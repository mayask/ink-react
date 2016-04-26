
import React from 'react'
import { InkComponent } from './_InkComponent'
import classnames from 'classnames'

export class Footer extends InkComponent {
  renderInk() {
    let imgClass = classnames(this.props.class)
    return (
      <table className="wrapper footer" align="center">
        <tr>
          <td className="wrapper-inner">
            <table className="container">
              <tbody>
                <tr>
                  <td>
                    <table className="row collapse">
                      <tbody>
                        <tr>
                          <th className="small-6 large-6 columns first">
                            <table>
                              <tr>
                                <th>
                                  <img className={imgClass} width={this.props.width} height={this.props.height} src={this.props.src} alt={this.props.alt}/>
                                </th>
                              </tr>
                            </table>
                          </th>
                          <th className="small-6 large-6 columns last">
                            <table>
                              <tr>
                                <th>
                                  {this.renderChildren()}
                                </th>
                              </tr>
                            </table>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </table>
    );
  }
}
