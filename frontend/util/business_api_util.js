export const fetchBusinesses = data => (
    $.ajax({
        method: 'GET',
        url: '/api/businesses',
        data
    })
);

export const fetchBusiness = businessId => (
    $.ajax({
        method: 'GET',
        url: `/api/businesses/${businessId}`
    })
);