const products = require("../data/products")

function isValidProduct(product){
    const isInvalid = typeof product !== "object" || 
    product == null || 
    Array.isArray(product) || 
    Object.keys(product).length === 0 || 
    typeof product.name !== "string" || 
    product.name.trim().length === 0 || 
    typeof product.price !== "number" || 
    product.price <= 0 || 
    typeof product.quantity !== "number" || 
    product.quantity < 0 || 
    typeof product.category !== "string" || 
    product.category.trim().length == 0
    return !isInvalid
}

function getAllProducts(req, res){
    res.status(200).send(products)
}

function getProductById(req, res){
    const id = Number(req.params.id)
    const product = products.find((product) => product.id === id)
    if(product){
        res.status(200).send(product)
    } else{
        res.status(404).send({
            message: "Product not found"
        })
    }
}

function createProduct(req, res){
    if(!isValidProduct(req.body)){
        return res.status(400).send({
            message: "Validation failed"
        })
    }
    const ids = products.map((product) => product.id)
    const newId = products.length == 0? 1 : Math.max(...ids) + 1;
    const product = {id: newId, ...req.body, id: newId}
    products.push(product)
    res.status(201).send(product)
}

function updateProduct(req, res){
    const id = Number(req.params.id)
    const index = products.findIndex((product) => product.id === id)
    if(index === -1){
        return res.status(404).send(
            {
                message: "Product not found"
            }
        )
    }
    
    if(!isValidProduct(req.body)){
        return res.status(400).send(
            {
                message: "Validation failed"
            }
        )
    }
    products[index] = {id:id, ...req.body, id:id}
    return res.status(200).send(products[index])
    
}

function deleteProduct(req, res){
    const id = Number(req.params.id)
    const index = products.findIndex((product) => product.id === id)
    if(index === -1){
      return res.status(404).send(
        {
            message: "Product not found"
        }
      )
    }
    products.splice(index, 1)
    return res.status(200).send(
    {
        "message": "Product deleted successfully"
    }
    )
}

function searchProducts(req, res){
    const name = req.query.name?.trim().toLowerCase()
    if(name == undefined || name.trim().length == 0){
        return res.status(400).send({
            message: "Invalid name"
        })
    }
    res.status(200).send(products.filter((product) => product.name.toLowerCase().includes(name)))

}

function getProductsByCategory(req, res){
    const category = req.params.category.toLowerCase()
    res.status(200).send(products.filter((product) => product.category.toLowerCase() === category))
}

function getProductsByMaxPrice(req, res){
    const maxPrice = req.params.maxPrice
    if(maxPrice.trim().length == 0){
        return res.status(400).send({
            message: "Invalid price"
        })
    }
    const price = Number(maxPrice)
    if(Number.isNaN(price) || price <= 0 || !Number.isFinite(price)){
        return res.status(400).send({
            message: "Invalid price"
        })
    }
    res.status(200).send(products.filter((product) => product.price < price))
 
}

function getLowStockProducts(req, res){
    res.status(200).send(products.filter((product) => product.quantity < 5 ))
}

function getTotalInventoryValue(req, res){
    const values = products.map((product) => product.price * product.quantity)
    const totalValue = values.reduce((acc, curr) => acc + curr, 0)
    res.status(200).send({
        totalValue
    })
}

module.exports = {
    getAllProducts, 
    getProductById, 
    createProduct, 
    updateProduct, 
    deleteProduct, 
    searchProducts, 
    getProductsByCategory,
    getProductsByMaxPrice,
    getLowStockProducts,
    getTotalInventoryValue
}