/*CMD
  command: /on_send
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: *Send Amount*
  keyboard: 🔙 Return
  aliases: 
CMD*/

if(message=="🔙 Return"){
Bot.sendKeyboard("👤 User Settings , 🛠 Withrawal Settings \n 🔊 Brodcasting , 🔐 Log Out" , " *Hi *@" +user.username+"Welcome To Admin Panel You Can Control your Bot Settings Here");
}else{
let amount = parseFloat(message);
let tgid = User.getProperty("tgid");
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid);
res.add(parseFloat(amount));
Bot.sendMessage("*Succesfully Added Balance* \n👤 User: "+tgid+"\n💰 Amount:"+amount+" DOGE");

Bot.sendMessageToChatWithId(tgid,"🎁 You Received "+amount+" DOGE\n`Added To Balance`");
}
