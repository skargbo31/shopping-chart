

const productArray = [
    {
        id: 1,
        tittle: 'Coffee',
        price: 4.55,

    },

    {
        id: 2,
        tittle: 'Orange',
        price: 6.99,

    },

    {
        id: 3,
        tittle: 'Bag',
        price: 7.55,

    },
    {
        id: 4,
        tittle: 'Sunglasses',
        price: 12.5,

    },
    {
        id: 5,
        tittle: 'Shoe',
        price: 19.15,

    },
    {
        id: 6,
        tittle: 'Computer',
        price: 100.55,

    },
]

function getProductData(id){
    let productData = productArray.find(product => product.id === id)

    if(productData == undefined){
        console.log("product data does not exist : " + id);
        return undefined;
    }

    return productData;
}

export { productArray, getProductData };