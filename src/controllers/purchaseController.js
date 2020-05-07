import purchaseDb from "../db/purchaseDb";
import productDb from "../db/productDb";

const getPurchases = async (req, res) => {
    const result = await purchaseDb.getPurchases();
    res.status(200).json(result.rows);
}

const addPurchase = async (req, res) => {
    const { idProduct, customer, quantity } = req.body;
    const product = await productDb.getProduct(idProduct);
    if (product.rows.length > 0) { // Bonus: controle de l'existence du produit
        await purchaseDb.addPurchase(idProduct, customer, quantity);
        res.status(200).json({ message: "l'achat a été ajouté à la base" });
    } else {
        res.status(404).json({ message: `Pas de produit correspondant à l'identifiant ${idProduct}` });
    }

}

export default { getPurchases, addPurchase };