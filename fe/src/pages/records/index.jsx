import RecordFilter from "@/components/RecordFilter";
import Records2 from "@/components/Records2";


const Records = () => {
    return (
        <div  className="bg-slate-100">
            <div className="flex">
                <RecordFilter/>
                <Records2/>
            

            </div> 
        </div>
        
    )
} 

export default Records;