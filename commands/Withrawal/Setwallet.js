/*CMD
  command: Setwallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withrawal
  answer: ✏️ Send now your DOGE Address to use it in future withdrawals!
  keyboard: 🔙 Return
  aliases: 
CMD*/

let message = data.message;

if(message=="🔙 Return"){
Bot.runCommand("/main")
}else{
if(message.length==34){
Bot.sendMessage("🖊 *Done: Your New wallet* is\n `"+message+"`");
User.setProperty("dogewallet" , message,"string")
}else{
Bot.sendMessage("🖊* Error: *This is not a wallet address! Send /start to return to the menu, or send a correct address");
}
}
