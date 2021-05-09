import callAPI from '../utils/callAPI';

export const getCity = () => {
    return callAPI('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/city.php', 'GET', null)
}

export const getDistrict = () => {
    return callAPI('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/district.php', 'GET', null)
}

export const getWard = () => {
    return callAPI('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/ward.php', 'GET', null)
}

export const getKindNew = () => {
    return callAPI('http://localhost/BatDongSanTest/House-Rental-System-main/renthouse/api/add_property/dropdown_list/kind_news.php', 'GET', null)
}