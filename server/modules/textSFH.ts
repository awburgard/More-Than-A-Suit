const accountSid = 'AC233898ea26a7abc8f0fcd2b59770b15b';
const authToken = 'deda487cff80494f9bb42b52ad677dd7';
const client = require('twilio')(accountSid, authToken);

export function textSFH(phoneNumber: string, message: string) {
    client.messages
  .create({
     body: message,
     from: '+18162072881',
// *****THIS IS A MESSAGE TO FURTHER DRAW ATTENTION TO THE LINE BELOW*****
     to: 'DAVIDS_NUMBER_HERE'
   })
  .then((message:any) => {
    console.log(message.sid);
  })
  .catch((err:any) => {
    console.log(err);
  })
}