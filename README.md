# ink-react
`ink-react` is a set of React components for building responsive email templates.

Uses [React](https://github.com/facebook/react) and [ZURB Ink](https://github.com/zurb/ink) undef the hood.

## Installation

The package is not available on npm yet.

`npm i --save ink-react`

## Usage

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import {
  Email,
  Button,
  Container,
  Row, Col
} from 'ink-react'

ReactDOM.render((
  <Email>
    <Container>
      <Row>
        <Col width="four">
          <Button class="alert radius" href="#">Cancel</Button>
        </Col>
        <Col width="four">
          <Button class="success round" href="#">Click me</Button>
        </Col>
        <Col width="four">
          <Button class="success round" href="#">Click me</Button>
        </Col>
      </Row>
    </Container>
  </Email>
), document.getElementById('main'))
```

## Documentation

### Ink

The library uses Ink styles undef the hood. So you might want to check them out
as well [here](http://foundation.zurb.com/emails/docs.html).

### Components

#### Grid components:

* [Container](/blob/master/js/components/Container.jsx)
* [Row](/blob/master/js/components/Row.jsx)
* [Col](/blob/master/js/components/Col.jsx)

#### Controls

* [Email](/blob/master/js/components/Email.jsx)
* [Button](/blob/master/js/components/Button.jsx)

## License
MIT
