const Utils = {
    isNullOrEmpty(variable) {
        return (variable == null || variable === '' || variable === ' ' || variable === undefined);
    },
    isInt(value) { return !isNaN(value) && !isNaN(parseInt(value, 10)); },
    isFloat(value) { return Number(value) === value && value % 1 !== 0; },
    stringEmpty() { return ''; }
};

module.exports = Utils;