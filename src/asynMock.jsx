const products = [
{
    id : "1",
    name : "Cemento 50kg",
    price : 1600,
    category : "corralon",
    img : "https://arcencohogar.vtexassets.com/arquivos/ids/315107-800-800?v=637810679163900000&width=800&height=800&aspect=true",
    stock : 25,
    description : "Cemento marca XX"
},
{
    id : "2",
    name : "Llave maestra",
    price : 6046,
    category : "plomeria",
    img : "https://http2.mlstatic.com/D_NQ_NP_990227-MLA46426901395_062021-O.webp",
    stock : 20,
    description : "Llave maestra conexion agua marca XX"
},
{
    id : "3",
    name : "Taladro percutor",
    price : 48724,
    category : "ferreteria",
    img : "https://http2.mlstatic.com/D_NQ_NP_828756-MLA49808696175_042022-O.webp",
    stock : 1700,
    description : "Taladro percutor atornillador marca XX"
}
]

export const getProducts = () => {
    return new Promise((resolve)=>{
    setTimeout(()=>{
     resolve(products)
    }, 500 )
});
}

export const getProductById = (productId) => {
    return new Promise((resolve)=>{
    setTimeout(()=>{
     resolve(products.find(x => x.id === productId ))
    }, 500 )
});
}

export const getProductByCategory = (category) => {
    return new Promise((resolve)=>{
    setTimeout(()=>{
     resolve(products.filter(x => x.category === category ))
    }, 500 )
});
}












