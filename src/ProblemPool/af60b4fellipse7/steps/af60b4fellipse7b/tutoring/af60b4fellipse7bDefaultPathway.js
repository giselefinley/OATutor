var hints = [{id: "af60b4fellipse7b-h2", type: "hint", dependencies: ["af60b4fellipse7a-h1"], title: "Vertice and Foci", text: "Does the major axis lie on the x- or y-axis?", variabilization: {}}, {id: "af60b4fellipse7b-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["(5,-2)"], dependencies: ["af60b4fellipse7b-h2"], title: "Center of Ellipse", text: "Given the format of the standard equation reveals the value of h and k, what are the coordinates for the center of the ellipse?", choices: ["(5,-2)", "(-2,5)"], variabilization: {}}, {id: "af60b4fellipse7b-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["(5~sqrt(9),-2)"], dependencies: ["af60b4fellipse7b-h3"], title: "Vertices of Ellipse", text: "Given we know the value of a and the center coordinates, what are the coordinates for the vertices?", choices: ["(5~sqrt(9),-2)", "(-2,5~sqrt(9))"], variabilization: {}}, {id: "af60b4fellipse7b-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$5-2\\pm\\sqrt{4}$$"], dependencies: ["af60b4fellipse7b-h4"], title: "Co-vertices of Ellipse", text: "Given we know the value of b and the center coordinates, what are the coordinates for the vertices?", choices: ["$$5-2\\pm\\sqrt{4}$$", "(2~sqrt(4),5)"], variabilization: {}}, {id: "af60b4fellipse7b-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$5-2\\pm\\sqrt{4}$$"], dependencies: ["af60b4fellipse7b-h5"], title: "Foci of Ellipse", text: "Using the equation $$c^2=a^2-b^2$$ solve for c and obtain the coordinates of the foci", choices: ["$$5-2\\pm\\sqrt{4}$$", "(2~sqrt(4),5)"], variabilization: {}}, ]; export {hints};