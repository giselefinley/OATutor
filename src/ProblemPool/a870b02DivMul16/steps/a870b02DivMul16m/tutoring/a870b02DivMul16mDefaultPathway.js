var hints = [{id: "a870b02DivMul16m-h1", type: "hint", dependencies: [], title: "Multiplication property of equality", text: "If you multiply both sides of an equation by the same number, you still have equality.", variabilization: {}}, {id: "a870b02DivMul16m-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{2}{3} y \\frac{3}{2}=\\left(48\\right) \\frac{3}{2}$$"], dependencies: ["a870b02DivMul16m-h1"], title: "Multiplication", text: "Multiple $$\\frac{3}{2}$$ from each side.", variabilization: {}}, {id: "a870b02DivMul16m-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["72"], dependencies: ["a870b02DivMul16m-h2"], title: "Simplification", text: "What do we get for y after simplifying the equation?", variabilization: {}}, {id: "a870b02DivMul16m-h4", type: "hint", dependencies: ["a870b02DivMul16m-h3"], title: "Verification", text: "Check whether the result is a solution of the equation.", variabilization: {}}, {id: "a870b02DivMul16m-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["TRUE"], dependencies: ["a870b02DivMul16m-h4"], title: "Verification", text: "Check whether $$\\frac{2}{3} \\left(72\\right)$$ equals 48.", choices: ["TRUE", "FALSE"], variabilization: {}}, ]; export {hints};