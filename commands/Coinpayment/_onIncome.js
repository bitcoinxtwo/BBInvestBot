/*CMD
  command: /onIncome
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Coinpayment
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(!options){
   // for security we need to check
   // that this command runned only by lib
   // user can not run command with options
   Bot.sendMessage("you are hacker")
   return
}
let wallet = options.address
let currency = options.currency
let amount = options.amount
let txn_id = options.txn_id

let total = Libs.ResourcesLib.anotherChatRes("totalDeposit", "global")
let balance = Libs.ResourcesLib.userRes("balance")
let miner = Libs.ResourcesLib.userRes("miner")
let am = amount * 0.0031

if (amount >= amount) {
  Api.sendMessage({
    chat_id: "@doublerobotpayments",
    text:
      "➕️ *New Deposit Created* \n\n👤 *By Investor:* " +
      user.first_name +
      "\n💳 *Amount:* " +
      amount +
      "* DOGE\n~* " +
      am +
      " $\n\n* 🖥 Transation ID*\nhttps://dogechain.info/tx/" +
      txn_id,
    parse_mode: "Markdown",
    disable_we_page_preview: true
  })

  Bot.sendMessage(
    "✅ *New Deposit Created* \n\n💵 *Amount:* " +
      amount +
      " DOGE\n\n🗓 Get paid every 24 hours for Lifetime\n\n➕️* Added " +
      amount +
      " Miners to your Account*"
  )

  Bot.sendMessageToChatWithId(
    869352356,
    "✅ *New Investment* \n\n👤 *Investor:* " +
      user.first_name +
      " (" +
      user.telegramid +
      ")\n\n💵 *Amount:* " +
      amount +
      " DOGE"
  )

  total.add(amount)
  miner.add(amount)
  balance.growth.add({
    value: miner.value() * 0.01,
    interval: 1 * 60 * 60 * 24
  })
  let referrer = Libs.ReferralLib.currentUser.attractedByUser()
  let refcom = amount * 0.1

  if (referrer) {
    let referrerRes = Libs.ResourcesLib.anotherUserRes(
      "balance",
      referrer.telegramid
    )
    let referrerEarn = Libs.ResourcesLib.anotherUserRes(
      "refCom",
      referrer.telegramid
    )
    let referrerDeposit = Libs.ResourcesLib.anotherUserRes(
      "refDeposit",
      referrer.telegramid
    )

    referrerRes.add(refcom)
    referrerEarn.add(refcom)
    referrerDeposit.add(amount)

    Bot.sendMessageToChatWithId(
      referrer.telegramid,
      "➕️ *Referral Deposit* " + refcom + " DOGE"
    )
  }
}

