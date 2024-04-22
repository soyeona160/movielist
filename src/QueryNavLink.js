import React from "react";
import { NavLink, useLocation } from 'react-router-dom'

const QueryNavLink = ({ to, children, ...props })=>{ //navlink를 감싸줌 to+쿼리스트링하려고(유지보수를 위해~)
    const location = useLocation()
    return <NavLink to={to+location.search} {...props}>{children}</NavLink>
}
// 필터링된 목록에서 특정 블로그 선택하기

export default QueryNavLink