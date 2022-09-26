type props = {
	train: [any, any],
	tram: [any, any],
	bus: [any, any],
	ambulance: [any, any],
	"fire truck": [any, any],
	"police car": [any, any],
	cab: [any, any],
	car: [any, any]
}

const transport: props = {
	train: ["🚂",Math.ceil(Math.random() * 10000)],
	tram: ["🚃",Math.ceil(Math.random() * 10000)],
	bus: ["🚎",Math.ceil(Math.random() * 1000)],
	ambulance:["🚑",Math.ceil(Math.random() * 1000)],
	"fire truck": ["🚒",Math.ceil(Math.random() * 1000)],
	"police car": ["🚓",Math.ceil(Math.random() * 1000)],
	cab: ["🚕",Math.ceil(Math.random() * 100)],
	car: ["🚗",Math.ceil(Math.random() * 100)]
}
	
export default transport
