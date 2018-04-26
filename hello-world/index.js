module.exports = function(context, request) {
    context.log('poc-apicosmos|hello-world| request:', request);
    context.response = 'Hello, world!';
    context.done();
};
