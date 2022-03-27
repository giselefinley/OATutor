var hints = [{id: "aeae96dlogarithmic15a-h1", type: "hint", dependencies: [], title: "Change-of-Base Formula", text: "The change-of-base formula can be used to evaluate a logarithm with any base. \\n For any positive real numbers M,b, and n, where $$n!=1$$ and $$b!=1$$, $$\\log_{b}\\left(M\\right)=\\log_{n}\\left(M\\right)/\\log_{n}\\left(b\\right)$$. \\n \\n 1) Determine the new base n, remembering that the common log, $$\\ln(x)$$, has base 10, and the natural log, ln(x), has base e. \\n 2) Rewrite the log as a quotient using the change-of-base formula \\n a) The numerator of the quotient will be a logarithm with base n and argument M. \\n b) The denominator of the quotient will be a logarithm with base n and argument b. \\n", variabilization: {}}, {id: "aeae96dlogarithmic15a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["e"], dependencies: ["aeae96dlogarithmic15a-h1"], title: "New Base", text: "What is the new base that we're changing to?", variabilization: {}}, {id: "aeae96dlogarithmic15a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\\\log_{b}\\\\left(M\\\\right)=\\\\ln{M}/ln(b)$$"], dependencies: ["aeae96dlogarithmic15a-h2"], title: "Change-of-Base", text: "What form does the quotient take after the change-of-base to the new base e?", choices: ["$$\\log_{b}\\left(M\\right)=\\frac{\\ln(M)}{\\ln(b)}$$", "$$\\log_{b}\\left(M\\right)=\\frac{\\ln(M)}{\\ln(b)}$$"], variabilization: {}}, {id: "aeae96dlogarithmic15a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{\\ln(65)}{\\ln(8)}$$"], dependencies: ["aeae96dlogarithmic15a-h3"], title: "Change-of-Base", text: "Replacing $$M=65$$ and $$b=8$$ in the question, what would the equivalent expression be?", variabilization: {}}, {id: "aeae96dlogarithmic15a-h5", type: "hint", dependencies: ["aeae96dlogarithmic15a-h4"], title: "Using the Calculator", text: "Use the calculator to evaluate $$\\frac{\\ln(65)}{\\ln(8)}$$.", variabilization: {}}, ]; export {hints};