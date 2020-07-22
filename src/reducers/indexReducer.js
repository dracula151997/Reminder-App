import { ADD_REMINDER, CLEAR_REMINDERS, CLEAR_ALL } from "../types";

const reducer = (state = [], action) => {
    let reminders = [];
    if (action.type === ADD_REMINDER) {
        reminders = [...state, { text: action.text, date: action.date, id: Math.random() }]
        console.log('from reducer: ', reminders);
        return reminders;

    } else if (action.type === CLEAR_REMINDERS) {
        reminders = state.filter(reminder => reminder.id != action.id)
        console.log('from reducer: ', reminders);   
        return reminders;

    } else if(action.type == CLEAR_ALL) {
        reminders = []
        return reminders

    }else{
        return state
    }
}

export default reducer