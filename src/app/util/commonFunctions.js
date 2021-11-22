export var generateOptions = function (options) {
    const option = Object.keys(options).map(key =>
        <option key={key} value={key}>{options[key]}</option>
    )
    return option;
}
export var prependZero = function (number) {
    if (number < 10)
        return "0" + number;
    else
        return number;
}
export var sanitizeInput = function (input) {
    return input
        .trim()
        .replace(/[^-a-zA-Z0-9$&#%@+/ ]\-$/gi, "")
        .replace(/ {2,}/g, " ");
}