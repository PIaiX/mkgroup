export const checkPhotoPath = (path = '', event=false, why=false) =>
    path?.length
        ? path.includes('http')
            ? path
            : `https://api.mskgrup.ru/static/uploads/${path}`
        : event?
            `${why?'../':''}../../imgs/userDontFind.jpg`
            :'../imgs/userDontFind.jpg'
