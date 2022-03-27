var hints = [{id: "ac9c764addand5a-h1", type: "hint", dependencies: [], title: "LCD", text: "We need to first rewrite each fraction with the least common denominator because they don't have a common denominator to start with.", variabilization: {}}, {id: "ac9c764addand5a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["36"], dependencies: ["ac9c764addand5a-h1"], title: "LCD", text: "What is the LCD of 12 and 18 $$(12=2\\times2\\times3$$, 18=2*3*3)?", variabilization: {}}, {id: "ac9c764addand5a-h3", type: "hint", dependencies: ["ac9c764addand5a-h2"], title: "Rewrite", text: "We then need to change into equivalent fractions with the LCD, 36.", variabilization: {}}, {id: "ac9c764addand5a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{21}{36}$$"], dependencies: ["ac9c764addand5a-h3"], title: "Rewrite", text: "What should $$\\frac{7}{12}$$ be changed into?", variabilization: {}}, {id: "ac9c764addand5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{10}{36}$$"], dependencies: ["ac9c764addand5a-h4"], title: "Rewrite", text: "What should $$\\frac{5}{18}$$ be changed into?", variabilization: {}}, {id: "ac9c764addand5a-h6", type: "hint", dependencies: ["ac9c764addand5a-h5"], title: "Add", text: "Add the numerators and place the sum over the common denominator.", variabilization: {}}, {id: "ac9c764addand5a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["31"], dependencies: ["ac9c764addand5a-h6"], title: "Numerator", text: "What do we get for the numerator after adding the two together?", variabilization: {}}, {id: "ac9c764addand5a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{31}{36}$$"], dependencies: ["ac9c764addand5a-h7"], title: "Final Answer", text: "What do we get after placing the sum over the common denominator?", variabilization: {}}, ]; export {hints};