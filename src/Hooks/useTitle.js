import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - Online Shopping`;
    }, [title]);
};

export default useTitle;