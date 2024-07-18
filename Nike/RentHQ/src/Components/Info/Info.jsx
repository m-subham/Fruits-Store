import './Info.css'

function Info() {
  return (
    <>
    <div className="info_1">
        <div className="title_">
            <h2>What It Could Mean</h2>
        </div>
        <div className="container_1">
        <div className="item">
                <img src="src\assets\graph.jpg" alt="img" />
                <p>Increase in sales and real estate market.</p>
            </div>

            <div className="item">
                <img src="src\assets\hand_shake.jpg" alt="img" />
                <p>A new lifestyle place for residents and business owners.</p>
            </div>

            <div className="item">
                <img src="src\assets\family.jpg" alt="img" />
                <p>A thriving community for everyone.</p>
            </div>
        </div>
    </div>
    <div className="info_2">
        <div className="title_2">
            <h2>Cost Estimate</h2>
        </div>
        <table className="table">
        <thead>
            <tr>
                <th></th>
                <th>Cost</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Engineering Services</td>
                <td>$1.7M</td>
            </tr>

            <tr>
                <td>Architectural Services</td>
                <td>$1.8M</td>
            </tr>

            <tr>
                <td>Project Planning</td>
                <td>$1.2M</td>
            </tr>

            <tr>
                <td>Total</td>
                <td>$4.7M</td>
            </tr>
        </tbody>
        </table>
    </div>
    </>
  )
}

export default Info