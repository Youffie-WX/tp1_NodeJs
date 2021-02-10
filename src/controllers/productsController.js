import productsDb from "../db/productsDb";



async function getProducts (request, response) {
    let products = await productsDb.getProductslist();
    let reviews = await productsDb.getReviewsList();

    response.status(200).render('pages/products', {products: products.rows, reviews: reviews.rows});
}


async function insertProduct(request, response) {
    let { stock , price } = request.body;
    if(stock <= 0 || price <= 0 ) {
        response.status(400).send("Veuillez mettre un prix et/ou un stock positif ! ");
    }
    else {
        const { name, stock, price } = request.body;
        await productsDb.insertProduct(name, stock, price);
        response.status(200).send("Nouveau produit enregistré ! ");
    }
}

async function updateProduct(request, response) {
    const { id } = request.params;
    let { stock, price } = request.body;
    if(stock <= 0 || price <= 0 ) {
        response.status(400).send("Veuillez mettre un prix et/ou un stock positif ! ");
    }
    else {
        let {stock, price } = request.body;
        await productsDb.updateProduct(id, stock, price);
        response.status(200).send("Modification du produit validée");
    }


}




export default { getProducts, insertProduct, updateProduct };