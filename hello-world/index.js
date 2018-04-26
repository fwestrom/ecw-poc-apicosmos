module.exports = function(context, request) {
    context.log('poc-apicosmos|hello-world| request:', request);
    context.response
        .status(200)
        .send('Hello, world!');
    context.done();
};
