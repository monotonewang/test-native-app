class LoginReponse {
    constructor(code, message, data) {
        this._code = code;
        this._message = message;
        this._data = data;
    }


    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }

    get message() {
        return this._message;
    }

    set message(value) {
        this._message = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }
}