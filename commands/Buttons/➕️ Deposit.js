/*CMD
  command: ➕️ Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

let wallet = User.getProperty("depowallet")

if(wallet==undefined){
Libs.CoinPayments.createPermanentWallet({
  currency: "DOGE",
  label: "@"+user.username,
  onSuccess: "/onWalletCreation",
  onIPN: "/onPermanentWalletIPN",
  onIncome: "/onIncome",
acceptPaymentForPermanentWalletIfNeed: "/acc"
});
}else{
Bot.sendMessage("📥* Buy Miner \n\n💵 Current Miner Price* \n\n*1 DOGE = 1 MINER* \n1 Miner Gives You Daily Income of 1% Daily Forever\n\n💵 Minimium Amount of Deposit is\n100 DOGE or 100 Miners\n\n✅ *Send the amount you want to invest to the following address:*")
Bot.sendMessage(wallet)
}

