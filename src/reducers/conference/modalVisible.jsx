// action types
const CHANGE_VISIBLE = 'CHANGE_VISIBLE';
const CHANGE_DATE = 'CHANGE_DATE';

//reducers
export default function(state,action){
    if (!state) return {
        visible: false,
        date : ''
    }
    switch (action.type){
        case CHANGE_VISIBLE :
            //修改模态框的visible
            return { ...state, visible: action.visible }
        case CHANGE_DATE :
            //修改选择日期
            return { ...state, date: action.date }
        default :
            return state
    }
}

//action creators
export const changeVisible = (visible) => {
    return { type : CHANGE_VISIBLE,visible }
}

export const changeDate = (date) => {
    return { type : CHANGE_DATE,date }
}


