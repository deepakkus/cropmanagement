
const APIError = (name, message) => {
    var instance = new Error(message);
    instance.name = name; 
    return instance;
};

module.exports = {
    APIError
};