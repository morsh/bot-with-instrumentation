module.exports = {
    helpMessage: "CrunchBot can answer questions about a handfull of tech companies. Here are some of the things you can ask:\n\n" +
    "* 'tell me about Microsoft'\n" +
    "* 'how many companies has apple bought?'\n" +
    "* 'when did amazon go public?'\n" +
    "* 'where is googles headquarters?'\n" +
    "* 'who founded microsoft?'\n" +
    "* 'what is amazons website?'\n" +
    "\nOnce you ask a question about a company you can ask followup questions about the same company.",
    companyUnknown: "I don't know '%(company)s'. Pick a company from the list or say 'nevermind'.",
    companyMissing: "I can answer that first tell me what company you're interested in:",
    cancel: "Sure... no problem.",
    answerAcquisitions: "%(company)s has acquired %(value)d companies.",
    answerIpoDate: "%(company)s went public on %(value)s.",
    answerHeadquarters: "The headquarters for %(company)s is located in %(value)s.",
    answerDescription: "%(value)s",
    answerFounders: "%(company)s was founded by %(value)s.",
    answerWebsite: "The webiste for %(company)s is %(value)s.",
    chatGreeting: "Hi... Please call me to interact with me.",
    welcome: "Hi... I'm the Microsoft Bot Framework demo calling bot for Skype. You can build rich bots that work over a Skype call, chat, or both.",
    welcomeBack: "Welcome back.",
    canceled: "You canceled",
    goodbye: "Ok... See you later!",
    demoMenu: {
        prompt: "What demo would you like to run?",
        choices: "Your choices are DTMF, Digits, Recordings, or Chat.",
        help: "You can say options to hear the list of choices again, quit to end the demo, or help." 
    },
    dtmf: {
        intro: "You can choose to use either speech or DTMF based recognition for choices.",
        prompt: "Press 1 for option A, 2 for option B, or 3 for option C.",
        result: "You selected %s"
    },
    digits: {
        intro: "You can collect digits from a user with an optional stop tone.",
        prompt: "Please enter your 5 to 10 digit account number followed by pound.",
        inavlid: "I'm sorry. That account number isn't long enough.",
        confirm: "You entered %s. Is that correct?"
    },
    record: {
        intro: "You can prompt users to record a message.",
        prompt: "Please leave a message after the beep.",
        result: "Your message was %d seconds long."
    },
    chat: {
        intro: "You can easily send a chat message to a user that has called your bot.",
        confirm: "Would you like to send a message?",
        failed: "Message delivery failed.",
        sent: "Message sent."
    }
};
