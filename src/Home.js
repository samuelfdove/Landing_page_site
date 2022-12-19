import Accordion from 'react-bootstrap/Accordion';

function Home(){
    return(
        <div>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-10 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-normal">Play My Chess AI!</h1>
                <p className="lead fw-normal">I built a chess AI in python and incorporated it into a GCP-functions API</p>
                <a className="btn btn-outline-secondary" href='/playchess'>Play it here!</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center text-white bg-dark">
                <div className="col-md-10 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-normal">Current Data Science Projects</h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Pool AI</Accordion.Header>
                        <Accordion.Body>
                            I am currently creating a Deep Q AI to play the game of pool!  
                            <br />
                            <a className="btn btn-outline-secondary" href='https://github.com/samuelfdove/PoolAI'>GitHub</a>
                            <a className="btn btn-outline-secondary" href='/poolai'>See More</a>  
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Chess Move Analysis</Accordion.Header>
                        <Accordion.Body>
                            Using the <a href='https://database.lichess.org/'>lichess.org game databasets,</a> I have extracted over 2.3 million chess games containing over 152 million chess moves into a SQLite database.
                            I am able to convert the list of chess moves into quantifiable data to chart and analyze with PowerBI, Jupyter, and Looker Studio.  Hopefully, I will be able to draw conclusions about the qualities that seperate good and bad players.
                            <br />
                            <a className="btn btn-outline-secondary" href='/piecedataset'>Current Looker Studio Page</a>
                            <a className="btn btn-outline-secondary" href='https://github.com/samuelfdove/chess-data-analysis'>GitHub</a> 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Inactive User Analysis</Accordion.Header>
                        <Accordion.Body>
                            Using the <a href='https://database.lichess.org/'>lichess.org game databasets</a> and <a href='https://lichess.org/api'>lichess.org API</a> I was able to aggregate information about around 50,000 users of the chess website 'lichess.org' into a SQLite database.  
                            The API gives us information about each user's activity, skill, and game time-scale preferences.  I am hoping to find out what type of user is more likely to stop playing chess on lichess.org  
                            <br />
                            <a className="btn btn-outline-secondary" href='/userdataset'>Current Looker Studio Page</a>
                            <a className="btn btn-outline-secondary" href='https://github.com/samuelfdove/lichess_user_analysis'>GitHub</a> 
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>


            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-normal">LinkedIn</h1>
                {/* <p className="lead fw-normal">I built a chess AI in python and incorporated it into a GCP-functions API</p> */}
                <a className="btn btn-outline-secondary" href='https://www.linkedin.com/in/samuel-dove-6bba62155/'>Click Here</a>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

        </div>
    );
}

export default Home;