const Product = require("../../models/product")

module.exports = {
    products: async () => {
        try {
            const productFetched = await Product.find()
            return productFetched.map(product => {
                return {
                    ...product._doc,
                    _id: product.id,
                    createdAt: new Date(product._doc.createdAt).toISOString(),
                }
            })

        } catch (error) {
            throw error
        }
    },

    createProduct: async args => {
        try {
            const { title, body } = args.product
            const product = new Product({
                title,
                body,
            })

            const newProduct = await product.save()
            return { ...newProduct._doc, _id: newProduct.id }

        } catch (error) {
            throw error
        }
    },

    updateProduct: async args => {
        try {
            const { title, body, id } = args.product
            const product = new Product({
                title,
                body,
                id,
            })
            const updatedProduct = await product.save()
            return { ...updatedProduct._doc, _id: updatedProduct.id }

        } catch (error) {
            throw error
        }
    },

    deleteProduct: async args => {
        try {
            const id = args._id
            const deletedProduct = Product.deleteOne({_id: id})
            return deletedProduct

        } catch (error) {
            throw error
        }
    },
}
