 export function filterSearch(SearchInput, Restaurant) {

    const filteredData1 = Restaurant.filter(function (res_list) {
        return res_list.info?.name.includes(SearchInput);
    }


    )
    return filteredData1;
}

