/*CMD
  command: /onWalletCreation
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Coinpayment
  answer: 
  keyboard: 
  aliases: 
CMD*/

//Bot.sendMessage(inspect(options));

let wallet = options.result.address;


Bot.sendMessage("📥* Buy Miner \n\n💵 Current Miner Price* \n\n*1 DOGE = 1 MINER* \n1 Miner Gives You Daily Income of 1% Daily Forever\n\n💵 Minimium Amount of Deposit is\n10 DOGE or 10 Miners\n\n✅ *Send the amount you want to invest to the following address:*")

Bot.sendMessage("`"+wallet+"`");
User.setProperty("depowallet" , wallet, "string")
