module.exports = async function (context, req) {
    context.log("Function is running");
    context.res = {
        status: 200,
        body: "Hello from testapi"
    };
};
