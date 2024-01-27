import "../components/shimmer.css"
function Shimmer() {
    return (<div className="shimmer">
        {Array(20).fill(" ").map(function (a) {
            return <div className="for_item">
                <div className="for_image" />

                <div className="for_description">
                    <h4>  </h4>

                    
                    <h4> </h4>
                    <p> </p>

                </div>



            </div>


        })}








    </div>)
}
export default Shimmer;