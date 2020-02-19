/*CMD
  command: /manuaal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withrawal

  <<ANSWER
*📤 How many DOGE you want to withdraw? *

*Minimum:* 100 DOGE
*Maximum:* No Maximium  

➡ *Send now the amount of  you want to withdraw*
  ANSWER
  keyboard: 
  aliases: 
CMD*/

if(message=="⬅️ Return"){
Bot.runCommand("/main")
}else{
let amount = parseFloat(message);
let balance =
Libs.ResourcesLib.userRes("balance")
let withrawn =
Libs.ResourcesLib.userRes("withrawn")
let total =
Libs.ResourcesLib.anotherChatRes("totalPayment","global")
let admin = 869352356
let wallet = User.getProperty("dogewallet")
let amounted = amount*0.0034
var name=user.username ? user.username : user.first_name

let mention="["+name+"]"+"("+"tg://user?id="+user.telegramid+")"

if(amount>balance.value()){
Bot.sendMessage("You Do Not have This amount")
}else{
if(amount<=balance.value()){
Bot.sendMessage("✅* Withrawal Requested*\nYour will received your payment within 24 hours!\n\n💳 *Transaction Details:*\n"+amount+" DOGE to wallet "+wallet)
Bot.sendMessageToChatWithId(admin,"➖ *New Withrawal Request* \n\n🤵 *From User:* "+mention+" "+user.telegramid+"\n💵 Amount:* "+amount+"* DOGE\n💼 To Wallet: \n"+wallet)

Api.sendMessage({chat_id:"@DoublerobotPayments" ,  text: "➖ *New Withrawal Created*\n\n🤵 By Investor: "+mention+"\n💵 Amount: *"+amount+"* DOGE\n*~ "+amounted.toFixed(2)+"$*\n💳 *To Wallet:*\n"+wallet, parse_mode:"Markdown"})

total.add(amount)
balance.remove(amount)
withrawn.add(amount)

let time = new Date()
let date = time.toLocaleDateString()
let hours = time.getHours();
let gmt_6 = hours + 6
let minutes = time.getMinutes();
 
let curTime = date +" || "+ gmt_6+":"+minutes

let plce = "*💵 Amount:* "+amount+" DOGE\n📆 *Time:* "+curTime+"\n*💳 Wallet:*\n`"+wallet+"`"

let history =
Libs.ResourcesLib.userRes("history");

if(history.value()==0){
history.set(1)
User.setProperty("HisA",plce,"text");
return
}
if(history.value()==1){
history.set(2)
User.setProperty("HisB",plce,"text");
return
}
if(history.value()==2){
history.set(3)
User.setProperty("HisC",plce,"text");
return
}
if(history.value()==3){
history.set(4)
User.setProperty("HisD",plce,"text");
return
}
if(history.value()==4){
history.set(5)
User.setProperty("HisE",plce,"text");
return
}
if(history.value()==5){
history.set(6)
User.setProperty("HisF",plce,"text");
return
}
if(history.value()==6){
history.set(7)
User.setProperty("HisG",plce,"text");
return
}
if(history.value()==7){
history.set(8)
User.setProperty("HisH",plce,"text");
return
}
if(history.value()==8){
history.set(9)
User.setProperty("HisI",plce,"text");
return
}
if(history.value()==9){
history.set(10)
User.setProperty("HisJ",plce,"text");
}
}
}
}
