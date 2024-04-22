// ● 사이드바에 Home, About, Movie 페이지 메뉴 보여주기

import './Sidebar.css'


function Sidebar( { open, children }){
    return (
        <div className={`sidebar ${open && 'open'}`}>
            <div className='sidebar-menus'>{children}</div>
        </div>
    )
}

export default Sidebar