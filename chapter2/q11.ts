function fibFilter (argNum: number): number {
	const digitSum = (num: number, result: number = 0): number => {
		if (num == 0) return result
		else return digitSum(
			Math.floor(num / 10),
			result + (num % 10)
		)
	}
	const digitSumDivide = (divisor: number, dividend: number): boolean => {
		return dividend % digitSum(divisor) === 0
	}
	const fibIter = (function *() {
		let prev = 1
		let curr = 1
		let result: number[] = []
		let limit = yield
		while(result.length < limit) {
			[prev, curr] = [curr, prev + curr]
			if(digitSumDivide(prev, prev)) {
				result.push(prev)
			}
			yield result
		}
		return result
	})()
	const filter = <T>(iter: IterableIterator<T>) => {
		const { value, done } = iter.next()
		if (done) return value
		else {
			console.log('current result:', value)
			return filter(iter)
		}
	}
	fibIter.next()
	fibIter.next(argNum)
	return filter<number[]>(fibIter)
}

function runQ11 () {
	console.log(fibFilter(10))
}

runQ11()