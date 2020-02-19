/*CMD
  command: On_send_bot
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: Send your message you want to broadcast to all Bot users
  keyboard: 
  aliases: 
CMD*/

if(message=="⬅️ Return"){
Bot.runCommand("/adminlogin")
}else{
Bot.sendMessageToAllChats(mesaage)
Bot.sendMessage("Message Sent\n`"+message+"`")
}
