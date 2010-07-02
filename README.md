Placeholder
============

cross browser placeholder.

How to use
---------------------

Include the script and add a class "placeholder" to any form control you wish to add the functionality

### HTML:

	
<input type="text" class="placeholder" value="Your name..."/>
<textarea class="placeholder">Your message...<textarea/>

you can also add the functionality manually by calling the method *autoempty* on an element like this
	 
### Javascript:

	var name = $(form.name);
	
	//the current value of name will be used as the placeholder
	name.autoempty();
