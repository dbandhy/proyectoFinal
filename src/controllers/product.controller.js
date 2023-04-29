import { ProductoService } from "../services/productos.service.js";

const productoService = ProductoService.getInstance();

export async function getAll(req, res) {
    const products = await productoService.getAll();
    products
        ? res.status(200).json(products)
        : res.status(400).json({"error": "ocurrió un problema obteniendo la lista de productos"})
}

export async function getById(req, res) {
    const {id} = req.params;
    const product = await productoService.getProductById(id);

    product
        ? res.status(200).json(product)
        : res.status(400).json({"error": "producto no encontrado"})
}

export async function create(req, res) {
    const {body} = req;
    const newProduct = await productoService.create(body);

    newProduct
        ? res.status(200).json({"success": "Producto agregado con ID " + newProduct._id})
        : res.status(400).json({"error": "400 hubo un problema, constrasta contenido con schema"})
}

export async function update(req, res) {
    const {id} = req.params;
    const {body} = req;
    const wasUpdated = await productoService.updateProductById(id, body);

    wasUpdated
        ? res.status(200).json({"success": "producto actualizado"})
        : res.status(404).json({"error": "404 producto no encontrado"})
}

export async function remove(req, res) {
    const {id} = req.params;
    const wasDeleted = await productoService.deleteById(id)

    wasDeleted
        ? res.status(200).json({"success": "producto eliminado"})
        : res.status(404).json({"error": "404 producto no encontrado"})
}