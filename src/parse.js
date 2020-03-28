const checkPriority = (element) => {
	const priorityMap = {
		'(': 0,
		')': 0,
		'+': 1,
		'-': 1,
		'*': 2,
		'/': 2,
	}

	return priorityMap[element]
}

const isOpenBracket = (symbol) => symbol === '(';
const isClosedBracket = (symbol) => symbol === ')';

const isBinaryOperator = (symbol) => {
	const binaryOperators = ['+', '-', '*', '/']

	return binaryOperators.includes(symbol)
}

const peek = (stack) => {
	return stack[stack.length - 1]
}

const isNumber = (symbol) => {
	const regExp = /^[-+]?[0-9]\d*(\.\d+)?$/
	return symbol.match(regExp) !== null
}

const parse = (expression) => {
	try {
		if (expression === '') return []

		const findOpenBracket = () => {
			while (stack.length !== 0) {
				const symbol = stack.pop()
				if (isOpenBracket(symbol)) {
					return
				}
				output.push(symbol)
			}
			return { error: 'brackets are not balanced' }
		}

		const stack = []
		const output = []
		const arrayOfElements = expression.split(' ')

		for (const element of arrayOfElements) {
			console.log('element = ', element)
			if (isNumber(element)) {
				console.log('isNumber = ', Number(element))
				output.push(Number(element))
				continue
			}

			if (isOpenBracket(element)) {
				console.log('isOpen = ', element)
				stack.push(element)
				continue
			}

			if (isClosedBracket(element)) {
				console.log('isClosed = ', element)
				const resultSearchOpenBracket = findOpenBracket()
				//if (resultSearchOpenBracket.error !== undefined) throw new Error(resultSearchOpenBracket.error)
				continue
			}
			
			if (isBinaryOperator(element)) {
				console.log('isBinaryOperator = ', element)
				let symbol = peek(stack)
				while ((checkPriority(symbol) >= checkPriority(element)) && stack.length !== 0) {
					symbol = stack.pop()
					output.push(symbol)
					symbol = peek(stack)
				}
				stack.push(element)
				continue
			}
			return { error: 'found incorrect symbol', symbol: element }
		}

		while (stack.length !== 0) {
			const symbol = stack.pop()
			output.push(symbol)
		}

		console.log('!!! OUTPUT = ', output)
		console.log('!!! STACK = ', stack)
		return output
	} catch (e) {
		return { error: e.message }
	}
}

export default parse