var hints = [{id: "a3b09a3binomseq5a-h1", type: "hint", dependencies: [], title: "Equation", text: "Use the equation C(n,r)=(n!)/(r!(n-r)!) to solve", variabilization: {}}, {id: "a3b09a3binomseq5a-h2", type: "hint", dependencies: [], title: "Plug In Values", text: "Plug in the values to the equation", variabilization: {}}, {id: "a3b09a3binomseq5a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["362880"], dependencies: [], title: "Solve For the Numerator", text: "What is 9!?", variabilization: {}}, {id: "a3b09a3binomseq5a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["5040"], dependencies: ["a3b09a3binomseq5a-h3"], title: "Solve For the Denominator: Part 1", text: "What is 7!?", variabilization: {}}, {id: "a3b09a3binomseq5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["a3b09a3binomseq5a-h4"], title: "Solve For the Denominator: Part 2", text: "What is (9-7)!?", variabilization: {}}, {id: "a3b09a3binomseq5a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["36"], dependencies: ["a3b09a3binomseq5a-h5"], title: "Solve", text: "What is $$\\frac{362880}{5040\\times2}$$?", variabilization: {}}, ]; export {hints};