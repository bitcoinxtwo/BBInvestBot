/*CMD
  command: CheckBal
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
let id = data.message; 
let user_bal = Libs.ResourcesLib.anotherUserRes("balance" , id);
Bot.sendMessage("*Users Total Balance:* \n"+user_bal.value().toFixed(8) + " Doge")
}
