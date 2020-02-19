/*CMD
  command: /send_group
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: *Send Message To Group*
  keyboard: 🔙 Return
  aliases: 
CMD*/

if(message=="🔙 Return"){
Bot.sendKeyboard("👤 User Settings , 🛠 Withrawal Settings \n 🔊 Brodcasting , 🔐 Log Out" , " *Hi *@" +user.username+"Welcome To Admin Panel You Can Control your Bot Settings Here");
}else{
let msg = data.message
Api.sendMessage({chat_id: "@dmpDevBotd", text: msg})
Bot.sendMessage("*Your Message Sent To Channel*")
}
