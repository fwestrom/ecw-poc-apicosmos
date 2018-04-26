module.exports = function(context, request) {
    context.log('poc-apicosmos|hello-world| request:', request);
    context.response = { status: 200, body: 'Hello, world!' };
    context.done();
};
