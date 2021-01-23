import { useEffect, useState } from "react";


const usePagination = (list, currentPage, itemsPerPage) => {
    const [pageList, setPageList] = useState([]);
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        if (!list) {
            return;
        }
        // Logic for paging the list
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const _pageList = list.slice(indexOfFirstItem, indexOfLastItem);
        setPageList(_pageList);

        // Logic for page numbers
        const _pageNumbers = [];
        for (let i = 1; i <= Math.ceil(list.length / itemsPerPage); i++) {
            _pageNumbers.push(i);
        }
        setPageNumbers(_pageNumbers);
    }, [list, currentPage, itemsPerPage]);


    return [pageList, pageNumbers];
}

export default usePagination;