"use strict";
var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};

System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EnemyFactory;
    return {
        setters: [],
        execute: function () {
            EnemyFactory = (function () {
                function EnemyFactory(game) {
                    this.game = game;
                    this.create = function (enemy) {
                    };
                }
                return EnemyFactory;
            }());
            exports_1("EnemyFactory", EnemyFactory);
        }
    };
});

System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var EventFactory;
    return {
        setters: [],
        execute: function () {
            EventFactory = (function () {
                function EventFactory(game) {
                    this.game = game;
                    this.raise = function (event) {
                        var action = event.properties.action;
                        var delay = event.properties.delay;
                    };
                }
                return EventFactory;
            }());
            exports_1("EventFactory", EventFactory);
        }
    };
});

System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LevelProvider;
    return {
        setters: [],
        execute: function () {
            LevelProvider = (function () {
                function LevelProvider(game, prefix) {
                    if (prefix === void 0) { prefix = "level"; }
                    var _this = this;
                    this.game = game;
                    this.prefix = prefix;
                    this.level = function (id) {
                        var level = JSON.parse(_this.game.cache.getText(_this.prefix + id));
                        return level;
                    };
                }
                return LevelProvider;
            }());
            exports_1("LevelProvider", LevelProvider);
        }
    };
});

System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MessageFactory;
    return {
        setters: [],
        execute: function () {
            MessageFactory = (function () {
                function MessageFactory(game, messagePool) {
                    this.game = game;
                    this.messagePool = messagePool;
                    this.show = function (message) {
                        var text = message.properties.text;
                        var duration = message.properties.duration;
                    };
                }
                return MessageFactory;
            }());
            exports_1("MessageFactory", MessageFactory);
        }
    };
});
