
const store = window.localStorage;

class LocalStore {
    public static set(key:string, value: any){
        if( !store ){
            return;
        }
        //备份
        let v = value;
        try {
            if( typeof value === 'object'){
                v = JSON.stringify(v);
            }
            store.setItem(key, v);
        }catch (e) {
            //错误处理
            console.log(e);
        }
    }

    public static get(key:string){
        if( !store ){
            return;
        }
        return store.getItem(key);
    }

    public static get2Json(key:string){
        if( !store ){
            return;
        }
        const data = store.getItem(key);
        if( data ){
            try{
                return JSON.parse(data);
            }catch (e) {
                console.log(e);
            }
        }
        return null;
    }

    public static remove(key:string){
        if( !store ){
            return;
        }
        try{
            store.removeItem(key);
        }catch (e) {
            console.log(e)
        }
    }
}

export default LocalStore;