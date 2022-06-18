function Home(){
    return(
        <div>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-normal">Play My Chess AI!</h1>
                <p className="lead fw-normal">I built a chess AI in python and incorporated it into a GCP-functions API</p>
                <a className="btn btn-outline-secondary" href='/playchess'>Play it here!</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center text-white bg-dark">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-normal">Data Science Project</h1>
                <p className="lead fw-normal">Coming Soon!</p>
                {/* <a className="btn btn-outline-secondary" href='/playchess'>Play it here!</a> */}
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-normal">Resume</h1>
                {/* <p className="lead fw-normal">I built a chess AI in python and incorporated it into a GCP-functions API</p> */}
                <a className="btn btn-outline-secondary" href='/resume'>Click Here</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

        </div>
    );
}

export default Home;