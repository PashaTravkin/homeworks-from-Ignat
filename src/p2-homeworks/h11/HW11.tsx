import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import {RangeSlider} from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)





    return (
        <div>
            <hr/>
            homeworks 11

            <RangeSlider/>

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}

                    // сделать так чтоб value1 изменялось
                />
                {value2}
            </div>

            <div>

                <span>{value1}</span>
                {/*<SuperDoubleRange*/}
                {/*    // сделать так чтоб value1 и value2 изменялось*/}
                {/*/>*/}
                <SuperRange
                    onChangeRange={setValue1}
                    value={value1}
                    // сделать так чтоб value1 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
