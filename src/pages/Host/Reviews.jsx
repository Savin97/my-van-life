import {Link} from "react-router-dom";
import { BsStarFill } from "react-icons/bs"
import reviews_graph from "../../images/reviews-graph.png"

export default function Reviews() {
    const reviewsData = [
        {starRating: 5, name: "James", date: "January 30, 2023",
         text: "The beach bum is such an awesome van! Such a comfortable trip. \
         We had it for 2 weeks and there was not a single issue. \
         Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!"},
        {starRating: 5, name: "Franz", date: "July 6th, 2023",
         text: "This is our third time using the Modest Explorer for our travels and we love it!\
         No complaints, absolutely perfect!" }
        ]
    
    const reviewsHTML =  reviewsData.map( (review, index) => (
            <div key ={index} className = "review-item">
                {[...Array(review.starRating)].map((_, i) => (
                            <BsStarFill fill="#ff8c38" className="review-star" key={i} />
                        ))}
                <div>
                    <p className="name">{review.name}</p>
                    <p className="date">{review.date}</p>
                </div>
                <p>{review.text}</p>
                <hr />
            </div>
    ))
    

    return (
        <section className="host-reviews">
            <div className="top-text">
                <h2>Your reviews</h2>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <img
                className="graph col-lg-6 col-md-9 col-sm-12"
                src={reviews_graph}
                alt="Review graph"
            />
            <h3>Reviews (2)</h3>
            <div className="reviews">
                {reviewsHTML}
            </div>

        </section>
    )
}
