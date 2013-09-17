# page-transitions

Is it a function?

[![Build Status](https://secure.travis-ci.org/techjacker/page-transitions.png)](http://travis-ci.org/techjacker/page-transitions)

### Install

#### Node

```Shell
npm install page-transitions
```

#### Browser

```Shell
component install page-transitions
```

```Shell
bower install page-transitions
```


## Usage

```JavaScript
var page-transitions = require('page-transitions'),
	randomFn = function () {};

page-transitions('blah'); // false
page-transitions(randomFn); // true
```


### Docs
[Yuidocs documentation here](docs/index.html)
- fire up the connect server ```$ grunt docs```
- navigate your browser to the [docs](http://localhost:9001)

### API
   - [page-transitions](#page-transitions)
<a name=""></a>
 
<a name="page-transitions"></a>
### page-transitions
should return true if a function.

```js
var randomFn = function (argument) {},
			randomObj = {},
			randomStr = 'blah';

expect(page-transitions(randomFn)).to.be.ok();
		expect(page-transitions(randomObj)).to.not.be.ok();
		expect(page-transitions(randomStr)).to.not.be.ok();
done();
```

## License
Copyright (c) 2013 Andrew Griffiths <mail@andrewgriffithsonline.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.