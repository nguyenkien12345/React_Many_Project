import React, { useState } from 'react'

function Form() {

    const [FormData, setFormData] = useState({
        isAgree: false,     // checkbox
        gender: 'male'      // radio
    });

    const onHandleChangeValue = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        setFormData({
            ...FormData,
            [name]: value
        })
        console.log(e);
    }

    return (
        <>
            <form>
                <div>
                    <label>Male: </label>
                    <input type='radio' name='gender' value='male' checked={FormData.gender === 'male'} onChange={onHandleChangeValue} />

                    <label>Female: </label>
                    <input type='radio' name='gender' value='female' checked={FormData.gender === 'female'} onChange={onHandleChangeValue} />
                </div>
                <div>
                    <label>Are You Agree: </label>
                    <input type='checkbox' name='isAgree' checked={FormData.isAgree} onChange={onHandleChangeValue} />
                </div>
            </form>

            <div>
                <h2>{FormData.gender}</h2>
                <h2>{FormData.isAgree ? 'Đồng ý' : 'Không'}</h2>
            </div>
        </>
    )

}

export default Form;
