const Utils = {
    isEmpty(variable){ return variable === null || variable === undefined; },
    isEmptyString(variable) { return this.isEmpty(variable) || variable.trim() === this.stringEmpty(); },
    isEmptyObject(object) { this.isEmpty(object) || Object.keys(object) === 0; },
    isInt(value) { return !isNaN(value) && !isNaN(parseInt(value, 10)); },
    stringEmpty() { return ''; },
    dateNowSQL() { return new Date().toISOString().slice(0, 19).replace('T', ' '); },
    dmySLQ() { return this.dateNowSQL().split(' ', 1).toString(); }
};

module.exports = Utils;