Placeholder
============

cross browser placeholder.

How to use
---------------------

Include the script and add a class "placeholder" to any form control you wish to add the functionality

### HTML:
	
		<input type="text" class="placeholder" value="Name"/>
		<input type="password" class="placeholder" value="Password"/>
		<textarea class="placeholder">Your message...</textarea>

you can also add the functionality manually by calling the method *autoempty* on an element like this. you can pass the text to use as placeholder to autoempty, if you do not specify a text, the default value is used.
	 
### Javascript:

	var control = $(form.control);
	
	//the default value of name will be used as the placeholder
	name.autoempty();
	
	//change the placeholder text to 'Please type your name'
	name.autoempty('Please type your name');