/**
@author: zhulizhe
@date: 2020-04-06 20:31:06
@Email：345841634@qq.com
@url：https://github.com/lovecrossyou
*/
import React, { useState, useEffect } from "react"
import { LoginContext } from "./App"

export default function Profile() {
    return <LoginContext.Consumer>
        {value => <>
            <h2>用户信息：{value.state.name}</h2>
        </>}
    </LoginContext.Consumer>
}