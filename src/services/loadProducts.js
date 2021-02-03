const loadProducts = (url) =>fetch(url).then((res) => res.json());

export default loadProducts;