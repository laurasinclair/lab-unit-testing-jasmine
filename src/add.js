add = (numOne, numTwo) => (numOne == undefined || numTwo == undefined || isNaN(numOne) || isNaN(numTwo) || typeof numOne !== "number" || typeof numTwo !== "number") ? undefined : numOne + numTwo