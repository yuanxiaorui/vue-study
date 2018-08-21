const _products = [
    {'id':1,'title':'iphone5','price':500.01,'inventory':2},
    {'id':2,'title':'iphone6','price':10.99,'inventory':10},
    {'id':3,'title':'iphone7','price':19.99,'inventory':5},
]

export default {
    getProducts (cb) {
        setTimeout(() => cb(_products), 100)
    },
    bugProducts(products,cb,errorCb) {
        setTimeout(() => {
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
        },100)
    }
}