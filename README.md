# Spine.js

A simple, re-useable wrapper for making basic API calls with backbone.

**NOTE:** this is only suitable for pulling in and templating data. To use more sophisticated Backbone.js methods, just use vanilla Backbone.

### Usage

##### HTML

The HTML required, at it's most basic.

```html
<!-- Add a container for the objects to go in -->
<ul id="my-container"></ul>

<!-- Define your template -->
<script type="text/template", id="my-template">

  <li>
    <h1>{{ title }}</h1>

    <p>{{ description }}</h1>
  </li>

</script>

<!-- Pull in jQuery, Underscore, Backbone.js, and Spine.js -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
<script src="http://ajax.cdnjs.com/ajax/libs/underscore.js/1.1.6/underscore-min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min.js"></script>
<script type="text/javascript" src="./spine.min.js"></script>
```

##### JavaScript

Then make your API calls using the following syntax

```javascript
new Spine('/url/to/my/data', '#my-container', '#my-template').initialize();
```

##### Getting individual Objects

Just add a fourth parameter, containing the rest of the URL.

```javascript
new Spine('/url/to/my/data', '#my-container', '#my-template', '/my-id').initialize();
```