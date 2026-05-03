
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Page(){
    return(
        <div className="flex flex-row bg-black w-300 h-330">
           <Sidebar/>
            <Header/>
             
        </div>
    )
}