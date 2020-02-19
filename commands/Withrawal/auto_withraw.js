/*CMD
  command: auto_withraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withrawal

  <<ANSWER
*📤 How many DOGE you want to withdraw?* 

*Minimum:* 20 DOGE
*Maximum:* No Maximium  

*➡ Send now the amount of  you want to withdraw*
  ANSWER
  keyboard: 🔙 Return
  aliases: 
CMD*/

if(message == "🔙 Return"){
Bot.runCommand("/main")
}else{
let withrawn =
Libs.ResourcesLib.userRes("withrawn");
let total = 
Libs.ResourcesLib.anotherChatRes("totalPayment","global")
let wallet =
User.getProperty("dogewallet")
let balance = Libs.ResourcesLib.userRes("balance");
let amount = parseFloat(message);
if (amount<=49){
Bot.sendMessage("*Minimum Withdrawal Amount Is 50 DOGE *");
}else{
if (amount>balance.value()){
Bot.sendMessage("You Do Not Have This Amount")

}else{
balance.remove(amount)
total.add(amount)
withrawn.add(amount)
Libs.CoinPayments.apiCall({
  fields: { cmd: "create_withdrawal",
            amount: amount,
            currency:"DOGE",
            address: wallet,
            auto_confirm : 1
},
  onSuccess: '/onSuccessAuto'
});
}
}
}
