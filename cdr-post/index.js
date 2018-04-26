module.exports = function(context, request) {
    context.log('poc-apicosmos|hello-world| request:', request);
    context.done(null, {
        response: {
            status: 200,
            body: {
                request: request,
            },
        },
    });
};
