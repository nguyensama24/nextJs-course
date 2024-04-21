import React from 'react'
import { notFound } from 'next/navigation'
const ReviewDetail = ({ params }: { params: { productId: string, reviewId: string } }) => {
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return (
        <div>
            <h1>ProductID: {params.productId} ReviewID: {params.reviewId}</h1>
        </div>
    )
}

export default ReviewDetail