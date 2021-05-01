import { useState, useEffect }from 'react'
const useValidation = function(initialValue, regex, errorText){
    const [value, setValue] = useState(initialValue);
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {               
        if(!regex.test(value) && value !==''){
            setError(errorText);
            setIsValid(false);
        }else{
            setIsValid(true);
        }
    },[value])
    return [isValid, setValue, error];
}
export default useValidation;