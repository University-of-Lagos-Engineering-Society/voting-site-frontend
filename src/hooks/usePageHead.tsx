import { useEffect } from "react";
const usePageHead = (title: string, description: string) =>{
    const defaultTitle = "app-name";
    const defaultDesc = "meta description";

    useEffect(() => {
        document.title = title || defaultTitle;
        const metaDescription: Element | null = document.querySelector("meta[name='description']");
        (metaDescription !== null) ?
            metaDescription.setAttribute("content", description || defaultDesc) :
            null
        ;
    }, [defaultTitle, title, defaultDesc, description]);
}

export default usePageHead;