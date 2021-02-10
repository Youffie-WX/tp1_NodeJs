import productsDb from "../db/productsDb";



async function getProducts (request, response) {
    let products = await productsDb.getProductslist();
    let reviews = await productsDb.getReviewsList();

    response.status(200).render('pages/products', {products: products.rows, reviews: reviews.rows});
}


async function insertProduct(request, response) {
    const { name, stock, price } = request.body;
    await productsDb.insertProduct(name, stock, price);
    response.status(200).send("Nouveau produit enregistré ! ");
}




export default { getProducts, insertProduct };