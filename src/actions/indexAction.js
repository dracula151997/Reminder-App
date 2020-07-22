import { ADD_REMINDER, CLEAR_REMINDERS, CLEAR_ALL } from "../types"


export const add_reminder = (text, date) => {
    const action = {
        type: ADD_REMINDER,
        text, 
        date
    }

    console.log('Add Reminder', action);
    return action;
}

export const remove_reminders = (id) => {
    const action = {
        type: CLEAR_REMINDERS,
        id
    }

    console.log("Clear Reminder Action", action);
    return action;
}

export const remove_all_reminders = () => {
    const action = {
        type: CLEAR_ALL,

    }

    return action
}