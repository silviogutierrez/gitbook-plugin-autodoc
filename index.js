var child_process = require('child_process');

module.exports = {
    // Map of hooks
    blocks: {

    },
    hooks: {
        "page:before": function(page) {
            if (page.content.indexOf('[foothinggoeshere') !== -1) {
                var regex = /\[foothinggoeshere\s([^\\]*?)\]/igm;
                var blah;

                while (blah = regex.exec(page.content)) {
                    var path = blah[1];
                    var code = child_process.execSync('python scripts/importer.py ' + path).toString();
                    page.content = page.content.replace(blah[0], "```python\n" + code + "```")
                }

            }
            return page;
        },
    },

    // Map of new filters
    filters: {},
};
