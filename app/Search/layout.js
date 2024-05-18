import SearchHeader from "../Components/SearchHeader";
import "./../globals.css"
function layout({children}){
    return(
        <>
        <div>
            <SearchHeader/>
            {children}
        </div>
        </>
    )
}

export default layout;