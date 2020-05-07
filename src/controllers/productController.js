import productDb from "../db/productDb";

const getProducts = async (req, res) => {
    const result = await productDb.getProducts();
    res.status(200).json(result.rows);
}

const addProduct = async (req, res) => {
    const { name, description, price } = req.body;
    await productDb.addProduct(name, description, price);
    res.status(200).json({ message: "le produit a été ajouté à la base" });
}

const updateProduct = async (req, res) => {
    const { productId } = req.params;
    const { name, description, price } = req.body;
    await productDb.updateProduct(productId, name, description, price);
    res.status(200).json({ message: `le produit ${productId} a été modifié` });
}

const deleteProduct = async (req, res) => {
    const { productId } = req.params;
    await productDb.deleteProduct(productId);
    res.status(200).json({ message: `le produit ${productId} a été supprimé de la base` });
}

export default { getProducts, addProduct, updateProduct, deleteProduct };