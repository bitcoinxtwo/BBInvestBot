/*CMD
  command: /user_info
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: Send User Telegram Id
  keyboard: 🔙 Return
  aliases: 
CMD*/

if(message=="🔙 Return"){
Bot.runCommand("/main")
}else{
let id = data.message;
let balance =
Libs.ResourcesLib.anotherUserRes("balance", id)
let deposit =
Libs.ResourcesLib.anotherUserRes("deposit", id)
let withrawn =
Libs.ResourcesLib.anotherUserRes("withrawn", id)
let refdeposit=
Libs.ResourcesLib.anotherUserRes("refdeposit", id)
let refcom =
Libs.ResourcesLib.anotherUserRes("refcom", id)

Bot.sendMessage("*📋 User Full Information*\n\n👤 *User:* "+id+ "\n\n💰 *Total Balance:* \n"+balance.value().toFixed(8)+" DOGE\n\n💵 *Total Deposit:* \n"+deposit.value().toFixed(8)+" DOGE \n\n📥 *Total Withraw:*\n"+withrawn.value().toFixed(8)+" DOGE\n\n👥 *Total Ref Deposit:*\n"+refdeposit.value().toFixed(8)+" DOGE \n\n🎁 *Total Commision:*\n"+refcom.value().toFixed(8)+" DOGE")
}
