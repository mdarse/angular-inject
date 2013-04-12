/**
 * Mathieu Darse <hello@mathieudarse.fr>
 *
 * see: http://github.com/mdarse/angular-inject
 */
Function.prototype.inject = function() {
    'use strict';
    this.$inject = Array.prototype.slice.call(arguments);
    return this;
};
