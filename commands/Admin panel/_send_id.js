/*CMD
  command: /send_id
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: *Send User Telegram ID*
  keyboard: 🔙 Return
  aliases: 
CMD*/

if(message=="🔙 Return"){
Bot.sendKeyboard("👤 User Settings , 🛠 Withrawal Settings \n 🔊 Brodcasting , 🔐 Log Out" , " *Hi *@" +user.username+"Welcome To Admin Panel You Can Control your Bot Settings Here");
}else{
let msg = User.getProperty("msg");
let pmid = data.message;
Bot.sendMessageToChatWithId(pmid, msg);
Bot.sendMessage("*Message Sent *\n👤 To User "+pmid+"\n✉️ Your Messsage:\n\n"+msg);
}
