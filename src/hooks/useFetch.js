import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        getData();
    }, [url])

    const getData = async () => {
        setIsLoading(true);
        try {
            const data_ = await fetch(url);
            if (!data_.ok) {
                throw new Error("Could not Fetch data.")
            } else {
                setError(null);
                setData(await data_.json());
            }
        } catch (e) {
            setIsLoading(false);
            setError(e.message);
        }
        setIsLoading(false);
    }

    return {data, setData,isLoading, error}
}

export default useFetch;
