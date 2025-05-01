module.exports = async function (context, req) {
    if (req.method !== "PUT") {
        context.res = {
            status: 405,
            body: "Only PUT requests are allowed"
        };
        return;
    }

    context.res = {
        status: 200,
        body: Received: ${JSON.stringify(req.body)}
    };
};
