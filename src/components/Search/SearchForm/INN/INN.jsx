import {useEffect , useState} from "react";


function SearchINN({companyINN, setCompanyINN}) {

    const [error, setError] = useState('');

    const validateINN = (inn) => {
        let errObj = {
            code:0,
            message:''
        }
        let result = false;
        if (typeof inn !== 'number') {
            inn  = inn.toString();
        } else {
            inn = '';
        }
        if (!inn.length) {
            errObj.code = 1;
            errObj.message = 'Поле не может быть пустым';
        } else if (/[^0-9]/.test(inn)) {
            errObj.code = 2;
            errObj.message = 'Поле может содержать только цифры';
        } else if ([10, 12].indexOf(inn.length) === -1) {
            errObj.code = 3;
            errObj.message = 'Поле должно содержать 10 или 12 цифр';
        } else {
            const checkDigit = (inn, coeff) =>{
                let n = 0;
                for (let i = 0; i < coeff.length; i++) {
                    n += coeff[i] * inn[i];
                }
                return parseInt(n % 11 % 10, 10);

            }
            switch (inn.length) {
                case 10:
                    let n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if (n10 === parseInt(inn[9], 10)) {
                        result = true;
                    }
                    break;

                case 12:
                    let n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    let n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                    if ((n11 === parseInt(inn[10], 10)) && (n12 === parseInt(inn[11], 10))) {
                        result = true;
                    }
                    break;

            }
            if (!result) {
                errObj.code = 4;
                errObj.message = 'Поле содержит некорректные данные';
            }


        }
        setError(errObj.message);
        return result;

    };
    useEffect( ()=>{
        validateINN(companyINN);
    }, [companyINN]);




    return (
        <div className="form-field form-field-inputs">
            <label htmlFor={companyINN}>ИНН компании <span className={error ? "required-asterisk  error"  : "required-asterisk"}>*</span></label>
            <input
                className={error ? "input-error":''}
                type={"text"}
                id={companyINN}
                name={companyINN}
                value = {companyINN}
                onChange = {event => setCompanyINN(event.target.value)}
                onBlur={()=> validateINN(companyINN)}
                placeholder={'10 или 12 цифр'}
            />
            {error && <div className= "error-message">{error}</div>}

        </div>


    )

}

export default SearchINN;