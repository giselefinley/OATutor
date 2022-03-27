var hints = [{id: "ad3a8eemixapp6a-h1", type: "hint", dependencies: [], title: "Simple Interest Formula", text: "The simple interest formula is $$I=Prt$$, where I is interest, P is principal, r is interest rate, and t is time.", variabilization: {}}, {id: "ad3a8eemixapp6a-h2", type: "hint", dependencies: ["ad3a8eemixapp6a-h1"], title: "Value for t", text: "Since we are only concerned about interest, $$t=1$$", variabilization: {}}, {id: "ad3a8eemixapp6a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["14000-x"], dependencies: ["ad3a8eemixapp6a-h2"], title: "Assigning variables", text: "Let $$x=the$$ amount of dollars invested in the 4% account. Given that Remy has $14,000 total, how can we write a mathematical expression for the amount of dollars she should invest in the 7% account?", variabilization: {}}, {id: "ad3a8eemixapp6a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$0.04x$$"], dependencies: ["ad3a8eemixapp6a-h3"], title: "Expressing the interest earned for the 4% account", text: "How much interest will the 4% account earn in 1 year? Write as a mathematical expression.", variabilization: {}}, {id: "ad3a8eemixapp6a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$0.07\\left(14000-x\\right)$$"], dependencies: ["ad3a8eemixapp6a-h4"], title: "Expressing the interest earned for the 7% account", text: "How much interest will the 7% account earn in 1 year? Express this as a mathematical expression", variabilization: {}}, {id: "ad3a8eemixapp6a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$0.061\\times14000$$"], dependencies: ["ad3a8eemixapp6a-h5"], title: "Total interest", text: "What is the total interest earned given that Remy wants to earn 6.1% interest on the total amount?", variabilization: {}}, ]; export {hints};