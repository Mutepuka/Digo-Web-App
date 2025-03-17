import Spinner from "@components/spinner"


export const Loader = ({loading,children})=>{

    return loading ?(
        <div className="d-flew w-100 justify-center py3">
            <Spinner/>
        </div>
    ):(
        children
    )

}