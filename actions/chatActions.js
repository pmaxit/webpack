export function addMessage(message, boxId){
	return {
		type: 'ADD_MESSAGE',
		payload:{
			message: {
				id: new Date().getTime(),
				text: message,
				user: {
					username: 'abc'
				},
				time: "2:12 PM",
				boxId
			}
		}
	}
}

export function recieveMessage(message){
	return {
		type: 'ADD_MESSAGE',
		payload:{
			message: {
				id: new Date().getTime(),
				text: message,
				user: {
					username: 'abc'
				},
				time: "2:12 PM"
			}
		}
	}
}

export function typing(username){
	return {
		type: 'TYPING',
		username
	}
}

export function stopTyping(username){
	return{
		type: 'STOP_TYPING',
		username
	}
}
