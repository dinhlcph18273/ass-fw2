import instance from "./instance";


export const getAllProduct = () => {
    const url = "/products"
    return instance.get(url)
}

export const getProduct = (id:any) => {
    const url = `products/${id}`
    return instance.get(url)
}

export const createProduct = (data:any) => {
    const url = "/products"
    return instance.post(url, data)
}


export const removeProduct = (id:any) => {
    const url = `products/${id}`
    return instance.delete(url)
}

export const editProduct = (data:any) => {
    const url = `/products/${data.id}`
    return instance.post(url, data)
}
