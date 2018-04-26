module.exports = function(context, request) {
    context.log('poc-apicosmos|hello-world| request:', request);
    var response = {
        status: 200,
        body: 'Hello, world!',
    };
    context.done(null, { response: response });
};
