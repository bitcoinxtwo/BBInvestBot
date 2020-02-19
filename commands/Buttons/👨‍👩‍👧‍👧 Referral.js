/*CMD
  command: 👨‍👩‍👧‍👧 Referral
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

let partnerlink = Libs.ReferralLib.currentUser.getRefLink(
  "bitcoinsplitbot",
  "user"
)

let refdep = Libs.ResourcesLib.userRes("refdeposit")

let refcom = Libs.ResourcesLib.userRes("refcom")

let lib = Libs.ReferralLib

refList = lib.currentUser.refList.get()

Bot.sendMessage(
  "👨‍👩‍👧‍👧* Referral System *\n\n🥇*You Will Earn 10% Every Investment of Your Referral*\n\n📥 *Referral Deposits:*\n" +
    refdep.value().toFixed(8) +
    " DOGE\n💵 *Commision Earn:*\n" +
    refcom.value().toFixed(8) +
    " DOGE\n\n🔎 *Total Referrals:* " +
    refList.length +
    " Users\n\n👨‍👩‍👧‍👧* Your Referral Link:*\n" +
    partnerlink
)

