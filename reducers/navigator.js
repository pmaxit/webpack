const initialRoute = {path:['songs'], query:{q: 'house'}}
const initialState = { route: initialRoute }

export default function navigator(state=initialState, action){
	return state;
}