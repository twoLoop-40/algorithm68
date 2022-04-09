function findAllDigits (irrational: number): number {
	const makeStartNumber = (irrational: number): number => {
		if (irrational < 10 && irrational > 1) return (irrational / 10)
		if (irrational > 10) return makeStartNumber(irrational / 10)
		if (irrational < 1 && irrational > 0) return makeStartNumber(irrational * 10)
		else {
			console.log('WROND INPUT. NUMBER MUST BE POSITIVE IRRATIONAL')
			return -1
		}
	}
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
	const allDigits = (scaler: Generator<number, number, number>, 
		digitArray: number[] = Array.from({ length: 10 }, () => -1), count: number = 0): number => {
		if (digitArray.filter(digit => digit > -1).length == 10) return count
		else {

			
		}
	}
}
function runQ11 () {
	const IRRATIONAL_NUMBER = Math.sqrt(2)
	console.log(findAllDigits(IRRATIONAL_NUMBER))
}

runQ11()