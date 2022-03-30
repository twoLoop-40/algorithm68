class Coin {
	static of (value: number, amount: number): Coin {
		return new Coin(value, amount)
	}
	changeAmount (f: (arg0: number) => number): Coin {
		return Coin.of(this.value, f(this.amount))
	}
	constructor (public value: number, public amount: number) {
		this.value = value
		this.amount = amount
	}	
}

function headCoinChange (coins: Coin[]): Coin[] {
	const head: Coin = coins[0].changeAmount((n: number): number => n - 1)
	return [head].concat(coins.slice(1))
}

function changeMoney (coins: Coin[], money: number): number {
	coins.sort((c1: Coin, c2: Coin): number => c2.value - c1.value)
	if (coins.length == 0) return 0
	else if (money < 0) return 0
	else if (money == 0) return 1
	else {
		const changedMoney: number = money - coins[0].value
		return changeMoney(headCoinChange(coins), changedMoney) + changeMoney(coins.slice(1), money) 
	}
}

function runQ05 (): void {
	const coins: Coin[] = [
		Coin.of(1000, 15), 
		Coin.of(500, 15), 
		Coin.of(100, 15), 
		Coin.of(50, 15)
	]
	console.log(changeMoney(coins, 170))
}

runQ05()
