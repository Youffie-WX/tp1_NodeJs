import DbConnection from "./db";

const getPurchases = async () => {
    const connection = new DbConnection();
    return await connection.performQuery("SELECT * FROM purchases");
}

const addPurchase= async (idProduct, customer, quantity) => {
    const connection = new DbConnection();
    return await connection.performQuery("INSERT INTO purchases (id_product, customer, quantity) VALUES (?,?,?)", [idProduct, customer, quantity]);
}

export default { getPurchases, addPurchase };