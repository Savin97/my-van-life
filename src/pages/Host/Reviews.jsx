import {Link} from "react-router-dom";
import graph_img from "../../images/reviews-graph.png"

export default function Reviews() {
    return (
        <section className="host-reviews">
            <div className="top-text">
                <h2>Your reviews</h2>
                <p>
                    Last <span>30 days</span>
                </p>
            </div>
            <img
                className="graph"
                src={graph_img}
                alt="Review graph"
            />
            <h3>Reiews (2)</h3>


        </section>
    )
}