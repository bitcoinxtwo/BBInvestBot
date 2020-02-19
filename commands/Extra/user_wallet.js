/*CMD
  command: user_wallet
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Extra
  answer: 
  keyboard: 
  aliases: 💼 set wallet
CMD*/

let wallet =
User.getProperty("dogewallet")

if(wallet==undefined){

msg = "*💡 Your currently set DOGE wallet is:* \n `Not Set` \n\n *💹 It will be used for all future withdrawals.*"
}else{
msg = "*💡 Your currently set DOGE wallet is:* "+wallet+" \n\n *💹 It will be used for all future withdrawals.*"
}

var button = [
   [   { title: " 💼 Set/ Change Wallet", command: "Setwallet" } ]
]
Bot.sendInlineKeyboard(button ,msg)
