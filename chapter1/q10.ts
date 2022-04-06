function sumOf (roulette: number[], length: number) {
	const circleSum = (from: number, to: number, nums: number[]): number => {
		from = from % roulette.length
		to = to % roulette.length
		if (from <= to) {
			return nums.reduce((total, value, idx) => {
				if (idx < from || idx > to) return total
				else { return total + value }
			}, 0)
		}
		else {
			return circleSum(from, roulette.length - 1, nums) + circleSum(0, to, nums)
		}
	}
	return (position: number) => {
		if (length >= roulette.length) return circleSum (0, roulette.length - 1, roulette)
		else { 
			return circleSum(position, position + length - 1, roulette)
		}
	}
}

function getRoulette (style: string) {
	const europian = [
		0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 27, 
		13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 
		20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3,
		26
	]
	const american = [
		0, 28, 9, 26, 30, 11, 7, 20, 32, 17, 5, 22, 
		34, 15, 3, 24, 36, 13, 1, 0, 27, 10, 25, 
		29, 12, 8, 19, 31, 18, 6, 21, 33, 16, 4, 23, 
		35, 14, 2
	]
	if (style == 'europian') return europian
	if (style == 'american') return american
	else {
		console.error('No Roulette For ' + style)
		return [-1]
	}
}

function maxSumCompare () {
	const sumMax = (style: string, length: number): number => {
		const roulette = getRoulette(style)
		const sumForLength = sumOf(roulette, length)
		return Math.max(...roulette.map((_, i) => sumForLength(i)))
	}
	const range = (style: string) => {
		const roulette = getRoulette(style)
		return Array.from({ length: roulette.length - 2 + 1 }, (_, i) => i + 2)
	}
	const europianSum = range('europian').map((v: number) => sumMax('europian', v))
	const americanSum = range('american').map((v: number) => sumMax('american', v))

	console.log(europianSum)
	console.log(americanSum)
	const compare = (array1: number | number[], array2: number | number[],  
		compFunc: (arg1: number, arg2:number) => boolean):any => {
			if (typeof array1 == 'number' && typeof array2 == 'number') {
				return compFunc(array1, array2)
			} else if (Array.isArray(array1) && Array.isArray(array2)) {
				return array1.map((v, i: number) => compare(v, array2[i], compFunc))
			} 
	}
	return compare(europianSum, americanSum, (a: number, b: number) => a < b)
}

function runQ10 () {
	console.log(maxSumCompare().filter((v: boolean) => v).length)
}

runQ10()