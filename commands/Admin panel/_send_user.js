/*CMD
  command: /send_user
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: *Send Your Message*
  keyboard: 🔙 Return
  aliases: 
CMD*/

if(message=="🔙 Return"){
Bot.sendKeyboard("👤 User Settings , 🛠 Withrawal Settings \n 🔊 Brodcasting , 🔐 Log Out" , " *Hi *@" +user.username+"Welcome To Admin Panel You Can Control your Bot Settings Here");
}else{
let msg = "🚨 *Message From Admin* \n" +data.message;
User.setProperty("msg", msg, "string");
Bot.runCommand("/send_id");
}
