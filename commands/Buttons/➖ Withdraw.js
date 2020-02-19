/*CMD
  command: ➖ Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet =
User.getProperty("dogewallet");
let balance = Libs.ResourcesLib.userRes("balance");
let wdinfo = 
Bot.getProperty("wdInfo")

if(wallet==undefined){
var button = [
    {title: "💼 Set/ Change Wallet", command: "Setwallet"} ];
Bot.sendInlineKeyboard(button,"*💡 Your DOGE wallet is:* `not set`");
}else{
if (balance.value()<10){
Bot.sendMessage("*❌ You have to own at least 10 DOGE in your wallet to withdraw!*");
}else{
if (wdinfo=="auto"){
Bot.runCommand("auto_withraw");
}else{
if (wdinfo=="manual"){
Bot.runCommand("/manuaal")
}else{
if (wdinfo=="StopPayments"){
Bot.runCommand("Stop")
}
}
}
}
}
