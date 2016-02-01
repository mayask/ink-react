
import React from 'react'
import { InkComponent } from './_InkComponent'

export class Email extends InkComponent {
  renderInk() {
    return (
      // <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
      // "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
          <meta name="viewport" content="width=device-width"/>
        </head>
        <body>
          <table className="body">
            <tbody>
              <tr>
                <td className="center" align="center" valign="top">
                  <center>
                    {this.renderChildren()}
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    )
  }
}
