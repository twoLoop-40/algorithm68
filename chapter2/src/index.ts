function findAllDigits (irrational: number): number {
	const getFirstDigit = (betweenOneZero: number) => {
		const head = Math.floor(betweenOneZero * 10)
		const tail = betweenOneZero * 10 - head
		return [head, tail]
	}
	const digitMaker = function *(irrational: number) {
		let digits = 0
		let head = 0
		while (digits < 10) {
			[head, irrational] = getFirstDigit(irrational)
			digits = yield head
		}
	}
	const allDigits = (scaler: Generator<number, number, number>): number => {
		
	}
}
function runQ11 () {
	const IRRATIONAL_NUMBER = Math.sqrt(2)
	console.log(findAllDigits(IRRATIONAL_NUMBER))
}

runQ11()