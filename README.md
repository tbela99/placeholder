Placeholder
============

cross browser placeholder.

How to use
---------------------

Include the script and add a class "placeholder" to any form control you wish to add the functionality

### Element Method: autoempty
------------

create a placeholder for the element

### Returns:

* (*element*)

#### Arguments:

1. value - (*string*, optional) the value to use as placeholder.
1. options - (*object*) placeholder options.

##### Options:

- color - (*string*, optional) color of the placeholder text.

### HTML:
	
		<input type="text" class="placeholder" value="Name"/>
		<input type="password" class="placeholder" value="Password"/>
		<textarea class="placeholder">Your message...</textarea>

you can also add the functionality manually by calling the method *autoempty* on an element like this. you can pass the text to use as placeholder to autoempty, if you do not specify a text, the default value is used.
	 
### Javascript:

	var control = $(form.control);
	
	//the default value will be used as the placeholder with a custom color
	control.autoempty({color: '#0E8F94'});
	
	//change the placeholder text to 'Please type your name'
	control.autoempty('Please type your name');
