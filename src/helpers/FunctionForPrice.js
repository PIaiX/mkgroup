const FunctionForPrice = (price) => {
    if (!price) return ''
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export default FunctionForPrice
