module.exports = function (context, documents, subscriberList) {
    if (!!documents && documents.length > 0) {
       var messages = [];
        subscriberList.forEach(
            subscriber => {
                messages.push(
                    {
                        body : "Testing my demo! Sampson ate another dog biscuit!",
                        to : subscriber.phone
                    }
                )
            }
        );
         context.bindings.message = messages;
        context.done();
    }
}