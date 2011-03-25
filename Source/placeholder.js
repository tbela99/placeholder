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

	function focus(el) { if(el.value == el.retrieve('placeholder')) el.value = '' }
	
	Element.implement({
	
		autoempty: function () {
				
			var key = 'placeholder',
				evt = 'ph:events',
				key_c = 'ph:color',
				key_sc = 'ph:scolor',
				self = this,
				isNative = key in document.createElement('input'),
				color = this.retrieve(key_sc, this.style.color),
				events,
				form = $(self.form),
				params = Array.link(arguments, {options: Object.type, value: function (obj) { return obj != null }}),
				placeholder = params.value || self.retrieve(key),
				options = params.options || {},
				pcolor = options.color || self.retrieve(key_c, '#aaa');
				
			if(placeholder == undefined) placeholder = self.defaultValue;
			self.store(key_c, pcolor).store(key, placeholder);
			
			this.style.color = color;
			
			//fix the reset button
			if(!form.retrieve(key)) form.store(key, true).addEvent('submit', function () { form.getElements('.placeholder').each(focus) });
									
			if(isNative) {
					
				this.placeholder = placeholder;
				if(this.value == placeholder) this.value = ''
				
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
				
				this.store(evt, events).addEvents(events)
			}
			
			return this
		}
	});
	
	window.addEvent('domready', function () { $$("input.placeholder,textarea.placeholder").autoempty() })
})();
