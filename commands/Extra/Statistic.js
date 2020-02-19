/*CMD
  command: Statistic
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Extra
  answer: 
  keyboard: 
  aliases: 
CMD*/

let userDeposit = Libs.ResourcesLib.anotherChatRes("totalDeposit", "global");

let userPayment = Libs.ResourcesLib.anotherChatRes("totalPayment", "global");


var msg = data.statistics.user_chats_count;

let stat = "👥 Total Users: *"+msg+"*\n\n➕ Total Investment:\n"+userDeposit.value().toFixed(8)+" DOGE \n\n➖ Total Withrawals: \n"+(userPayment.value().toFixed(8)+" DOGE")
Bot.sendMessage(stat);
