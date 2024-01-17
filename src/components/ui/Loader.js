"use client"
// loader component
import { Watch } from "react-loader-spinner";

const Loader = () => {
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen place-content-center mx-auto place-items-center '><Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      /></div>
            
        </div>
    );
};

export default Loader;