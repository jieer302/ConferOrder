
import axios from 'axios'
import '../mock/conferMock'

export const getContent = () => axios({
    method: 'get',
    url: '/conferContent/init',
})
    .then(function (response) {
       return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });

export const addContent = (content) => axios({
    method: 'post',
    url: '/conferContent/add',
    data: content
})
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });

export const detailContent = (date) => axios({
    method: 'post',
    url: '/conferContent/detail',
    data: date
})
    .then(function (response) {
        console.log(response);
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });

