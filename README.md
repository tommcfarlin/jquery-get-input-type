# jQuery getInputType

This plugin is an extremely simple jQuery plugin used to determine what type of input element on which an event is being raised.

This is compatible with:

* Text elements
* Textareas
* Checkboxes
* Radio Bioxes
* Select options
* ...and more

I created this plugin because I found myself doing work with groups of input elements and needed an easy way to determine which
input element was raising an event.

## Installation

1. Download the plugin from the master branch.
2. Setup the plugin in the `head` element of your HTML document.
3. Note that the plugin should be added after jQuery and before your own JavaScript.

## Example

### Installation

`<script type="text/javascript" src="js/jquery.get-input-type.min.js"></script>`

### Usage

Given a set of input elements:

```
$('.input-elements, .select-elements').on( 'change', function(evt) {

   if ( 'select' === $(this).getInputType() ) {

       // You're working with a select element

   } elseif ( 'checkbox' == $(this).getInputType() ) {

       // You're working with a checkbox element

   } else {

       // Do something else

   }

});
```

## Contact

* Web:      http://tommcfarlin.com/jquery-get-input-type/
* Twitter:  [@tommcfarlin](http://twitter.com/tommcfarlin)
* Email:    [tom@tommcfarlin.com](http://tommcfarlin.com/contact)

## Licensing

* Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php)