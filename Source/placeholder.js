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

	var key = 'placeholder',
		isNative = key in document.createElement('input'),
		pcolor = '#aaa',
		color,
		defaultValue;
		
	function focus(el) {
	
		if(el.value == el.defaultValue) el.value = '';
	}
	
	Element.implement({
	
		autoempty: function () {
		
			if(isNative) {
			
				this.placeholder = this.defaultValue;
				this.value = '';
				
			} else {
			
				color = this.style.color;
				defaultValue = this.defaultValue;
				
				if(this.value == defaultValue) this.style.color = pcolor;
				
				this.addEvents({
				
					focus: function () {
					
						focus(this.setStyle('color', color))
					},
					blur: function () {
					
						if(this.value == '') this.setStyle('color', pcolor).value = defaultValue
					}
				});
					
				var form = $(this.form);
				
				if(!form.retrieve(key)) {
				
					form.store(key, true).addEvent('submit', function () {
					
						form.getElements('.placeholder').each(focus)
					})
				}
			}
		}
	});
	
	window.addEvent('domready', function () {
		
		$$("input.placeholder,textarea.placeholder").autoempty()
	})
})();
