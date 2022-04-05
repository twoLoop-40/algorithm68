type Position = [number, number]

interface IRobot {
	currentPosition: Position
	records: Position[]
	move: (direction: Position) => IRobot
	update: () => IRobot
}

interface IDirection {
	east: Position
	west: Position
	south: Position
	north: Position
}

function runRobotCleaner (count: number)  {
	const deepCopy = <T, Q>(args: T | Q[]): any => {
		if (!Array.isArray(args)) return args
		else {
			return [...args.map(deepCopy)]
		}
	}
	const Direction: IDirection = {
		east: [1, 0],
		west: [-1, 0],
		north: [0, 1],
		south: [0, -1]
	}
	class Robot implements IRobot {
		public currentPosition: Position
		public records: Position[]
		public count: number
		
		static create (robot: Robot) {
			const newBot = new Robot()
			newBot.currentPosition = [...robot.currentPosition]
			newBot.records = deepCopy(robot.records)
			newBot.count = robot.count
			return newBot
		}

		move (direction: Position) {
			const newBot = Robot.create(this)
			const [currX, currY] = this.currentPosition
			const [moveX, moveY] = direction
			newBot.currentPosition = [
				currX + moveX,
				currY + moveY
			]
			newBot.count = newBot.count - 1
			return newBot
		}
		update () {
			const newBot = Robot.create(this)
			newBot.records.push(newBot.currentPosition)
			return newBot
		}
		constructor () {
			this.currentPosition = [0, 0]
			this.records = []
			this.count = count
		}
	}
	const samePath = (robot: Robot) => { // 여기도 다시 작업 records = [] 일 때 에러
		if (robot.records.length == 0) return false 
		else {
			return robot.records.some(record => {
				const [currX, currY] = robot.currentPosition
				return currX === record[0] && currY === record[1]
			})
		}
		
	}
	let result = 0

	const findPath = (robot: Robot) => {
		if (samePath(robot)) {
			return
		} else if (robot.count == 0) {
			result++
			return
		}
		else {
			const newBot = robot.update()
			findPath(newBot.move(Direction.east))
			findPath(newBot.move(Direction.north))
			findPath(newBot.move(Direction.west))
			findPath(newBot.move(Direction.south))
		}
	}
	const robot = new Robot()
	findPath(robot)
	return result
}

function runQ08 () {
	console.log(runRobotCleaner(12))
}

runQ08()