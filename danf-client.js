'use strict';

define(function(require) {
    var utils = require('danf/utils');

    return {
        dependencies: {
        },
        contract: {
        },
        config: {
            classes: require('bioukh-danf-test/config/classes'),
            events: utils.merge(
                require('bioukh-danf-test/config/events'),
                require('bioukh-danf-test/config/client/events'),
                true
            ),
            interfaces: utils.merge(
                require('bioukh-danf-test/config/interfaces'),
                require('bioukh-danf-test/config/client/interfaces'),
                true
            ),
            parameters: utils.merge(
                require('bioukh-danf-test/config/parameters'),
                require('bioukh-danf-test/config/client/parameters'),
                true
            ),
            sequences: utils.merge(
                require('bioukh-danf-test/config/sequences'),
                require('bioukh-danf-test/config/client/sequences'),
                true
            ),
            services: utils.merge(
                require('bioukh-danf-test/config/services'),
                require('bioukh-danf-test/config/client/services'),
                true
            ),
            this: utils.merge(
                require('bioukh-danf-test/config/this'),
                require('bioukh-danf-test/config/client/this'),
                true
            )
        }
    };
});