import { useEffect, useState } from "react";


const useSearch = (data=[], searchTerm='') => {
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        const _filteredData = data.filter((item) => (
            item.FirstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.LastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.PhoneNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.URL.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.UserName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.DomainName.toLowerCase().includes(searchTerm.toLowerCase())
        ))
        setFilteredData(_filteredData)
    }, [searchTerm, data])

    return [filteredData]
}

export default useSearch;