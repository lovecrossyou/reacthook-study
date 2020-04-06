/**
@author: zhulizhe
@date: 2020-04-06 20:23:10
@Email：345841634@qq.com
@url：https://github.com/lovecrossyou
*/

import React, { useState, useEffect, useContext } from "react"
import { LoginContext } from "./App"

export default function Login() {
    const { state, dispatch } = useContext(LoginContext);
    return (
        <>
            <h1 onClick={() => dispatch({ type: 'login' })}>点击登录useContext</h1>
            <h2>当前用户：{state.name}</h2>
        </>
    )
}