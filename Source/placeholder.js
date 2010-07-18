/*
---
script: placeholder.js
license: MIT-style license.
description: cross browser placeholder. include the js and add the class placeholder to your input/textarea.
copyright: Copyright (c) 2010 Thierry Bela
authors: [Thierry Bela]

requires: 
  core:1.2.3: 
  - Element.Event
  - Element.Style
provides: none
...
*/

(function () {

	function focus(el) {
	
		if(el.value == el.retrieve('placeholder')) el.value = '';
	}
	
	Element.implement({
	
		autoempty: function (placeholder) {
				
			var key = 'placeholder',
				evt = 'placeholder:events',
				isNative = key in document.createElement('input'),
				pcolor = '#aaa',
				color,
				events,
				form = $(this.form);
				
			if(placeholder == undefined) placeholder = this.defaultValue;
			this.store('placeholder', placeholder);
			
			//fix the reset button
			if(!form.retrieve(key)) form.store(key, true).addEvent('submit', function () { form.getElements('.placeholder').each(focus) });
									
			if(isNative) {
					
				this.placeholder = this.retrieve('placeholder');
				if(this.value == this.placeholder) this.value = ''
				
			} else {
			
				color = this.style.color;
				events = this.retrieve(evt);
				
				if(events) this.removeEvents(events);
				
				events = {
				
					focus: function () {
					
						focus(this.setStyle('color', color))
					},
					blur: function () {
					
						if(this.value == '') this.setStyle('color', pcolor).value = placeholder
					}
				};
				
				if(this.value == placeholder) this.style.color = pcolor;
				
				this.store('placeholder', placeholder).store(evt, events).addEvents(events)
			}
		}
	});
	
	window.addEvent('domready', function () {
		
		$$("input.placeholder,textarea.placeholder").autoempty()
	})
})();
