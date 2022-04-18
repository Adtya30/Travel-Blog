import { GrLocation } from "react-icons/gr";
export default function Carousel() {
    return(
        <div id="carouselExampleCaptions" class="carousel-slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item-active">
                <div className="carousel-compo"><h1><GrLocation/>&nbsp;Visit Amazing Places</h1></div>
                    <img src="/haridwar.jpg" class="d-block w-100" height="600px" width="800px" alt="haridwar"/>
                    <div class="carousel-caption d-none d-md-block">
                        <h2><GrLocation/>Haridwar</h2>
                        <p>The holy Ganga, Haridwar is famous for its temples and ghats.</p>
                    </div>
                </div>
            <div class="carousel-item">
                <img src="/rishikesh.jpg" class="d-block w-100" height="600px" width="800px" alt="rishikes"/>
                <div class="carousel-caption d-none d-md-block">
                    <h2><GrLocation/>Rishikesh</h2>
                    <p>Rishikesh is commonly referred to as the 'yoga capital of the world' and rightly so.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="/auli.jpg" class="d-block w-100" height="600px" width="800px" alt="auli"/>
                <div class="carousel-caption d-none d-md-block">
                    <h2><GrLocation/>Auli</h2>
                    <p>Auli is a hiking and ski destination and after the creation of the state of Uttarakhand.</p>
                    </div>
                </div>
                <div class="carousel-item">
                <img src="/kedarnath.jpg" class="d-block w-100" height="600px" width="800px" alt="auli"/>
                <div class="carousel-caption d-none d-md-block">
                    <h2><GrLocation/>Kedarnath</h2>
                    <p>Kedarkantha is a trek that single-handedly revolutionised winter trekking in our country.</p>
                    </div>
                </div>
                <div class="carousel-item">
                <img src="/tunganath.jpg" class="d-block w-100" height="600px" width="800px" alt="auli"/>
                <div class="carousel-caption d-none d-md-block">
                    <h2><GrLocation/>Tunganath</h2>
                    <p>Tungnath is one of the highest Shiva temples in the world and is the highest.</p>
                    </div>
                </div>
                <div class="carousel-item">
                <img src="/mussorie.jpeg" class="d-block w-100" height="600px" width="800px" alt="auli"/>
                <div class="carousel-caption d-none d-md-block">
                    <h2><GrLocation/>Mussorie</h2>
                    <p>Mussoorie is a hill station in the Dehradun district of the Indian state of Uttarakhand.</p>
                    </div>
                    </div>
            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> */}
        </div>
        
    )
};
