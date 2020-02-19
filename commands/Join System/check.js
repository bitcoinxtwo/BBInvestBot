/*CMD
  command: check
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Join System
  answer: 
  keyboard: 
  aliases: 
CMD*/

let user = options.result.status
User.setProperty("status", user, "string")
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.runCommand("/main")
}

if (user == "left") {
  Bot.sendMessage(
    "💡 *To use this bot you must join this channel:* @Doublerobotpayments"
  )
}

