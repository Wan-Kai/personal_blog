

const initialStateSetter = {
    retryTip: false,
}


// @ts-ignore
export default ( state = initialStateSetter, action: ActionParams) =>{
    switch (action.type) {
        // TRIGGER ==> 发起请求的时候
        // SUCCESS ==> 成功的时候
        // FAILURE ==> 失败的时候
        // FULFILL ==> 完成的时候
        // REQUEST ==> 一般不在这里使用
        case 'TRIGGER': {
            return {
                ...state,
                retryTip: true,
            }
        }
    }

    return state;
}