import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    let dispatch = useDispatch()
    let loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)
    // useSelector, useDispatch


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=>dispatch(loadingAC(false)), 5000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div ><img style={{borderRadius:'60%', width:'90px', height:'80px' }}
                               src="https://99px.ru/sstorage/86/2020/09/12709201815548578.gif" alt=""/> </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
