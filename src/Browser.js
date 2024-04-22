import { BrowserRouter } from "react-router-dom";
// 기능 확장 컴포넌트

import App from "./App";

function Browser(){
    return(// 브라우저 기능 확장됨 
        <BrowserRouter>
            <App/> 
        </BrowserRouter>
    )
}

export default Browser