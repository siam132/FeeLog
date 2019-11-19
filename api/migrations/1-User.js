
'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Logs", deps: []
 * createTable "posts", deps: []
 * createTable "Users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "User",
    "created": "2019-11-19T17:39:35.232Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Logs",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "posts",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Users",
            {

            },
            {}
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
