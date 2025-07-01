import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { itemsActions } from "../Store/itemsSlice";
import { spinnerActions } from "../Store/SpinnerSlice";

const FetchItems = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const controller = new AbortController();

        // Dispatch the spinner action to toggle the spinner state
        dispatch(spinnerActions.toggleState(true));

        const timeoutId = setTimeout(() => {
            fetch("http://localhost:8080/items", { signal: controller.signal })
                .then((result) => result.json())
                .then((data) => {
                    dispatch(itemsActions.addInitialItems(data.items));
                    dispatch(spinnerActions.toggleState(false));
                })
                .catch((error) => console.error("Fetch error:", error));
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
            controller.abort();
        };
    }, []);
    return null; 
}

export default FetchItems; 