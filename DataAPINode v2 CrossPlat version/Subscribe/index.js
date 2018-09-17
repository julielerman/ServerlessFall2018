module.exports = function (context, req) {
    var requiredLength=10
    var messageLength=req.query.message.length;
    if (messageLength==requiredLength) {
         var newDoc={
            phone: req.query.message,
            logged: new Date()
            }
          context.bindings.outputDocument=newDoc;
           context.res = {
             status: 200,
             body: "Awesome! You are subscribed with context.query.message. " 
         };
       }
     else {
         context.res = {
             status: 400,
             body: "Number was only "+ messageLength+ " digits. It needs to be " + requiredLength
         };
     }
     context.done();
 };