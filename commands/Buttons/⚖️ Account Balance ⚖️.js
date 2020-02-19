/*CMD
  command: ⚖️ Account Balance ⚖️
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

let balance =
Libs.ResourcesLib.userRes("balance");
let miner =
Libs.ResourcesLib.userRes("miner");
let daily = miner.value()*0.01;

Bot.sendMessage("👤"+user.first_name+ " (" +user.username+")\n\n👷‍♂️ Total Miners: "+miner.value()+"\n💥 Balance: "+balance.value().toFixed(8)+"\n💵 Daily Earning: "+daily+" DOGE\n\nYour Daily Income Based on How Many Miners You Have\n\nHireMore Miners To Increase Your Daily Earning")
