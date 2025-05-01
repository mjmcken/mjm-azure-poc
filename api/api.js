module.experts = async function (context, req)
    if (req.method !== "PUT") {
        contect.res = {
            status:405
            body: "Only PUT requests are allowed"
        };
        return;
    }
    const body = req.body;

    context.res = {
        status:200,
        body: `Recieved data: ${JSON.stringify(body)
    };
};
