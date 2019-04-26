# Includes Any

Finds out if a string contain any or all of given strings.


## Installation

```bash
npm i includes-any
```

## Usage

```node
const stri = require('includes-any');
stri.includesAny('hello world', 'hello', 'e', 'windows', 'ubuntu'); //Returns true
stri.includesAny('hello world', 'apple', 'orange', 'windows', 'ubuntu'); //Returns false
stri.includesAll('hello world', 'hello', 'world', 'e', 'w'); //Returns true
stri.includesAll('hello world', 'bye', 'world', 'e', 'w'); //Returns false


```

## Contributing
Pull requests are welcome. 

## License
[MIT](https://choosealicense.com/licenses/mit/)