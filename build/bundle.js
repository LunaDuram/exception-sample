var SystemError = /** @class */ (function () {
    function SystemError(message, type) {
        this.message = message;
        this.type = type;
    }
    return SystemError;
}());
console.log("Ser\u00E1 que vai dar erro?");
try {
    console.log("Antes do erro!");
    throw new SystemError('Erro que eu mesmo gerei', 'Abstrato');
    console.log("Depois do erro!");
}
catch (error) {
    if (error instanceof SystemError) {
        console.log("".concat(error.type, ": ").concat(error.message));
    }
    else {
        console.log("Error: ".concat(error.message));
    }
}
console.log("Acabou!!!");
