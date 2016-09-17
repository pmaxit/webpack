const initialMessages = {messages: [
		{	id: 1,
			text: "Hi! how is everyone",
			user:{
				username: "puneet"
			},
			time: "10:57 PM",
			boxId: 0
		},
		{	id: 2,
			text: "I am good",
			user:{
				username: "abc"
			},
			time: "10:58 PM",
			boxId: 0
		},

	], 
}

const initialState = { messages: initialMessages.messages, user: 'puneet'}

export default function chatReducer(state=initialState, action){
	
	switch(action.type){
		case 'ADD_MESSAGE':
			console.log("ADDING MESSAGE",action)
			return { ...state,
					messages: [...state.messages,action.payload.message]
					}
		default:
			return state;
	}
}