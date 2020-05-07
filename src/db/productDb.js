import DbConnection from "./db";

const getProducts = async () => {
    const connection = new DbConnection();
    return await connection.performQuery("SELECT * FROM products");
}

const addProduct = async (name, description, price) => {
    const connection = new DbConnection();
    return await connection.performQuery("INSERT INTO products (name, description, price) VALUES (?,?,?)", [name, description, price]);
}

const updateProduct = async (id, name, description, price) => {
    const connection = new DbConnection();
    return await connection.performQuery("UPDATE products SET name=?, description=?, price=? WHERE id=?", [name, description, price, id]);
}

const deleteProduct = async (id) => {
    const connection = new DbConnection(false);
    await connection.performQuery("DELETE FROM purchases WHERE id_product=?", [id]);
    await connection.performQuery("DELETE FROM products WHERE id=?", [id]);
    connection.connection.end();
}

// BONUS
const getProduct = async (id) => {
    const connection = new DbConnection();
    return await connection.performQuery("SELECT * FROM products WHERE id=?", [id]);
}

export default { getProducts, addProduct, updateProduct, deleteProduct, getProduct };