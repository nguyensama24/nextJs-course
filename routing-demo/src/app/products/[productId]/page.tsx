import React from 'react'

const DetailProduct = ({ params }: { params: { productId: string } }) => {
    return (
        <div>Product ID:{params.productId}</div>
    )
}

export default DetailProduct