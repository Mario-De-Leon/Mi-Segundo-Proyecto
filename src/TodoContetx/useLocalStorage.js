import React from "react";


function UseLocalStorage (itemName, initialValue){
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue)

    React.useEffect(() =>{
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName);
    
                let parseTodosItem;
    
                
                if(!localStorageItem){
                    localStorage.setItem('itemName', JSON.stringify(initialValue))
                    parseTodosItem = initialValue;
                }else{
                    parseTodosItem = JSON.parse(localStorageItem)
                }
                setItem(parseTodosItem)
                setLoading(false)
            }catch(error){
                setError(error)
                setLoading(false)
            }
        },1000)
    });
    
    

    const saveItem = (newItem) =>{
        try{
            const stringifiedItem = JSON.stringify(newItem)
        localStorage.setItem(itemName, stringifiedItem)
        setItem(newItem)
        }catch(error){
            setError(error)
        }
    }

    return {
        item,
        saveItem,
        loading,
        error,
    };
}
export {UseLocalStorage}