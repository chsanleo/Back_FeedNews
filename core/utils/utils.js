const Utils = {
    isNullOrEmpty(variable) {
        return (variable === null || variable.trim() === this.stringEmpty() || variable === undefined);
    },
    isInt(value) { return !isNaN(value) && !isNaN(parseInt(value, 10)); },
    isFloat(value) { return Number(value) === value && value % 1 !== 0; },
    stringEmpty() { return ''; },
    dateNowSQL() { return new Date().toISOString().slice(0, 19).replace('T', ' '); },
    dmySLQ() { return this.dateNowSQL().split(' ', 1).toString(); }
};

module.exports = Utils;