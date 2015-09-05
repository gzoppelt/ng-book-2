var Product = (function () {
    function Product(sku, name, image_url, published, department, price) {
        this.sku = sku;
        this.name = name;
        this.image_url = image_url;
        this.published = published;
        this.department = department;
        this.price = price;
    }
    return Product;
})();
exports.Product = Product;
