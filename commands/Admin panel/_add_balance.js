/*CMD
  command: /add_balance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: *Send User Telegram ID*
  keyboard: 🔙 Return
  aliases: 
CMD*/

if(message=="🔙 Main Menu"){
Bot.runCommand("/main")
}else{
let msg = message;
User.setProperty("tgid", msg, "integer");
Bot.runCommand  ("/on_send");
}
