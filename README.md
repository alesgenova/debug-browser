# debug-browser

Just a wrapper around [debug](https://github.com/visionmedia/debug) to allow directly importing the library into the browser without having to bundle it.

## Usage

### Import as script
```html
<script src="https://unpkg.com/debug-browser/dist/index.js"></script>

<script>
    let log = debug('namespaceName');
    log('Hi!')
</script>
```

### Import as module
```js
import debug from 'https://unpkg.com/debug-browser/dist/index.esm.js';

let log = debug('namespaceName');
log('Hi!')
```
