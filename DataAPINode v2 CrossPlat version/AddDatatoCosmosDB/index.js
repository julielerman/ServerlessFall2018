module.exports = function (context, req) {
    if (req.body) {
        var docToStore = {
            message: req.body.message,
            logged: new Date()
        }
        try {
            context.bindings.outputDocument = docToStore;
        }
        catch (error) {
            context.log(error);
        }
        context.done();
    }
};