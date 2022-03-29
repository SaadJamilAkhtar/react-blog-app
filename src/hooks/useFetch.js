import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        getData(abortCont);
        // Clean up
        return () => abortCont.abort();

    }, [url])

    const getData = async (abortCont) => {
        setIsLoading(true);
        try {
            const data_ = await fetch(url, {signal: abortCont.signal});
            if (!data_.ok) {
                throw new Error("Could not Fetch data.")
            } else {
                setError(null);
                setData(await data_.json());
                setIsLoading(false);
            }
        } catch (e) {
            if (!(e.name === 'AbortError')) {
                setIsLoading(false);
                setError(e.message);
            } else {
                console.log('Aborted')
            }
        }
    }

    return {data, setData, isLoading, error}
}

export default useFetch;
