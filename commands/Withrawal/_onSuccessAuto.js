/*CMD
  command: /onSuccessAuto
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Withrawal
  answer: 
  keyboard: 
  aliases: 
CMD*/

let result = options.body.result;
let error = options.body.error;
let wallet = User.getProperty("dogewallet")

if (error == "ok"){


Api.sendMessage({chat_id:"@DmpDevBots",text:"➖ *New Withrawal Paid*\n\n🤵 Paid to : "+user.first_name+"\n💳 Amount : "+result.amount+" *DOGE*\n💼 To Wallet:\n"+wallet,parse_mode:"markdown"})

Bot.sendMessage("✅ *Withdrawal Paid*\nYour payment is being processed automatically right now!\n\n 💳 Transaction Details:\n"+(result.amount)+" *DOGE* to the wallet\n"+wallet);

}else{
Bot.sendMessage(error)
}
