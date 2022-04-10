function findAllDigits (irrational: number): number {
	const makeStartNumber = (irrational: number): number => {
		if (irrational > 1 && irrational < 10) return irrational
		if (irrational > 10) return makeStartNumber(irrational / 10)
		if (irrational < 1 && irrational > 0) return makeStartNumber(irrational * 10)
		else {
			console.log('WROND INPUT. NUMBER MUST BE POSITIVE IRRATIONAL')
			return -1
		}
	}
	const getFirstDigit = (betweenOneTen: number) => {
		const head = Math.floor(betweenOneTen)
		const tail = (betweenOneTen - head) * 10
		return [head, tail]
	}
	const digitMaker = function *(irrational: number) {
		let head = 0
		while (true) {
			[head, irrational] = getFirstDigit(irrational)
			console.log(head, irrational)
			yield head
		}
	}
	const allDigits = (scaler: Generator<number>, digits: boolean[] = [], count: number): number => {
		const { value } = scaler.next()
		if (digits.filter(value => value).length >= 10) return count
		else { 
			digits[value] = true
			return allDigits(scaler, digits, count + 1)
		}
	}
	const scaler = digitMaker(irrational)
	return allDigits(
		scaler,
		Array.from({ length: 10 }, () => false),
		0
	)
}
function runQ12 () {
	const IRRATIONAL_NUMBER = Math.LN2
	console.log(findAllDigits(IRRATIONAL_NUMBER))
}

runQ12()