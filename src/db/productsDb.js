import DbConnection from "./db";


async function getProducts () {
    const connection = new DbConnection();

    return await connection.performQuery("SELECT products.id, products.name, products.price, products.stock, reviews.id, reviews.id_product, reviews.rating, reviews.title, reviews.content, reviews.created_at FROM products INNER JOIN reviews on products.id = reviews.id_product ", []);
}

async function getProductslist () {
    const connection = new DbConnection();

    return await connection.performQuery("SELECT * FROM products ", []);
}

async function getReviewsList () {
    const connection = new DbConnection();

    return await connection.performQuery("SELECT * FROM reviews ", []);
}


async function insertProduct(name, stock, price) {
    const newProduct = new DbConnection();

    return await newProduct.performQuery("INSERT INTO products (name, stock, price) VALUES (?,?,?)", [ name, stock, price ]);

}

async function updateProduct(id, stock, price) {
    const updateProduct = new DbConnection();

    return await updateProduct.performQuery("UPDATE products SET stock=?, price=? WHERE id=?", [stock, price, id]);
}





export default { getProducts, getProductslist, getReviewsList, insertProduct, updateProduct };