{
    properties: {
        alternatives: [
            'https://github.com/madrobby/zepto'
        ],
        donate: {
            link: 'https://js.foundation/about/donate'
        },
        examples: [
            'http://holderjs.com/',
            'https://stackoverflow.com/'
        ],
        link: 'https://github.com/jquery/jquery',
        notes: [
            'https://i.imgur.com/6QH50iS.jpg'
        ],
        platform: 'GitHub',
        type: 'repository',
        wikiPedia: {
            load: true,
            title: 'JQuery'
        }
    },
    tests: {
        references: [
            [
                'window.jQuery'
            ]
        ],
        statements: [
            [
                function() {
                    var reference = window,
                        index;
                    for (index in reference) {
                        if (index.match(/^jQuery/i) === null) {
                            continue;
                        }
                        return true;
                    }
                    return false;
                }
            ]
        ]
    },
    versions: {
        patterns: {
            page: [
                /<script[^>]+googleapis[^>]+jquery\/([0-9\.]+)\/jquery/i
            ]
        },
        references: [
            'window.jQuery.fn.jquery'
        ]
    }
}
