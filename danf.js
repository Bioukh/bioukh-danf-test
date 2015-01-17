'use strict';

var utils = require('danf/lib/utils');

module.exports = {
    dependencies: {
    },
    contract: {
    },
    config: {
        assets: utils.merge(
            {
                'danf-client': __dirname + '/danf-client',
                'bioukh-danf-test/config': __dirname + '/config',
                '!bioukh-danf-test/config/server': __dirname + '/config/server',
                'bioukh-danf-test/lib': __dirname + '/lib',
                '!bioukh-danf-test/lib/server': __dirname + '/lib/server',
                'bioukh-danf-test/public': __dirname + '/resources/public',
                '!bioukh-danf-test/private': __dirname + '/resources/private',
                'favicon.png': __dirname + '/favicon.png'
            },
            require('./config/server/assets'),
            true
        ),
        classes: require('./config/classes'),
        events: utils.merge(
            require('./config/events'),
            require('./config/server/events'),
            true
        ),
        interfaces: utils.merge(
            require('./config/interfaces'),
            require('./config/server/interfaces'),
            true
        ),
        parameters: utils.merge(
            {
                view: {
                    path: __dirname + '/resources/private/view'
                }
            },
            require('./config/parameters'),
            require('./config/server/parameters'),
            true
        ),
        sequences: utils.merge(
            require('./config/sequences'),
            require('./config/server/sequences'),
            true
        ),
        services: utils.merge(
            require('./config/services'),
            require('./config/server/services'),
            true
        ),
        this: utils.merge(
            require('./config/this'),
            require('./config/server/this'),
            true
        )
    }
};