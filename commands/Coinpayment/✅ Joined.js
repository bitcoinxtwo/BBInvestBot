/*CMD
  command: ✅ Joined
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Coinpayment
  answer: 
  keyboard: 
  aliases: 
CMD*/

let channel = "@doublerobotpayments"
let id = user.telegramid
Api.getChatMember({
  chat_id: channel,
  user_id: id,
  on_result: "check"
})

