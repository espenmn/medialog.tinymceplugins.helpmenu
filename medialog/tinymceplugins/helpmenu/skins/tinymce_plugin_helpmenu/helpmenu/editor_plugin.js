/**
 * Plone gallery Plugin
 *
 * @author Espen Moe-Nilssen
 */

(function() {
    tinymce.create('tinymce.plugins.helpmenuPlugin', {
        init : function(ed, url) {
            // Register commands
            ed.addCommand('mcehelpmenu', function() {
                // Internal  object like a placeholder
                if (ed.dom.getAttrib(ed.selection.getNode(), 'class').indexOf('mceItem') != -1)
                    return;

                ed.windowManager.open({
                    file : url + '/dialog.htm',
                    width : 450,
                    height : 600,
                    inline : 0
                }, {
                    plugin_url : url, // Plugin absolute URL
                });
            });

            // Register buttons
            ed.addButton('helpmenu', {
                title : 'helpmenu.desc',
                cmd : 'mcehelpmenu',
                image : url + '/img/helpmenu.gif'
            });
            
            // Add a node change handler, selects the button in the UI when a image is selected
			ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('helpmenu', n.nodeName == 'IMG');
			})
        },
        
         /**
		 * Creates control instances based in the incomming name. This method is normally not
		 * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
		 * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
		 * method can be used to create those.
		 *
		 * @param {String} n Name of the control to create.
		 * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
		 * @return {tinymce.ui.Control} New control instance or null if no control was created.
		 */
		 
		 createControl : function(n, cm) {
			return null;
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */

        getInfo : function() {
            return {
                longname : 'helpmenu Gallery Plugin',
                author : 'helpmenu Moe-Nilssen',
                authorurl : 'http://medialog.no',
                infourl : 'http://plone.org/products/tinymce',
                version : "0.2"
            };
        }
    });

    // Register plugin
    tinymce.PluginManager.add('helpmenu', tinymce.plugins.helpmenuPlugin);
})();
