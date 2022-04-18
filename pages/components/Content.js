import { BsArrowRightShort,BsCalendar2Date } from "react-icons/bs";
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineComment,AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
const Content = () => {
    return(
        <div className="content-container">
            <div className="site-content">
            <div className="posts">
            <div className="post-content">
                <div className="post-image">
                <div>
                    <img src="/img1.jpg" className="img" width="850px" height="500px" alt="blog1"></img>
                </div>
                <div className="post-info">
                <span><i className="fas-fa-user"></i><RiAdminLine/>&nbsp;&nbsp;Admin</span>
                <span><i className="fas-fa-calender"></i><BsCalendar2Date/>&nbsp;&nbsp;April 12,2022</span>
                <span><AiOutlineComment/>&nbsp;&nbsp;2 Comments</span>
                </div>
                </div>
                <div className="post-title">
                    <a href="#">Why should boys have all the fun!</a>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <button className="btn-post-btn">Read More &nbsp;<BsArrowRightShort/></button>

                </div>
            </div>
            <hr/>
            <div className="post-content">
                <div className="post-image">
                <div>
                    <img src="/img2.jpg" className="img" width="850px" height="500px" alt="blog2"></img>
                </div>
                <div className="post-info">
                <span><i className="fas-fa-user"></i><RiAdminLine/>&nbsp;&nbsp;Admin</span>
                <span><i className="fas-fa-calender"></i><BsCalendar2Date/>&nbsp;&nbsp;April 13,2022</span>
                <span><AiOutlineComment/>&nbsp;&nbsp;5 Comments</span>
                </div>
                </div>
                <div className="post-title">
                    <a href="#">Why should boys have all the fun!</a>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <button className="btn-post-btn">Read More &nbsp;<BsArrowRightShort/></button>

                </div>
            </div>
            <hr/>
            <div className="post-content">
                <div className="post-image">
                <div>
                    <img src="/img3.jpg" className="img" width="850px" height="500px" alt="blog3"></img>
                </div>
                <div className="post-info">
                <span><i className="fas-fa-user"></i><RiAdminLine/>&nbsp;&nbsp;Admin</span>
                <span><i className="fas-fa-calender"></i><BsCalendar2Date/>&nbsp;&nbsp;April 14,2022</span>
                <span><AiOutlineComment/>&nbsp;&nbsp;12 Comments</span>
                </div>
                </div>
                <div className="post-title">
                    <a href="#">Why should boys have all the fun!</a>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <button className="btn-post-btn">Read More &nbsp;<BsArrowRightShort/></button>

                </div>
            </div>
            <hr/>
            <div className="post-content">
                <div className="post-image">
                <div>
                    <img src="/img4.jpg" className="img" width="850px" height="500px" alt="blog4"></img>
                </div>
                <div className="post-info">
                <span><i className="fas-fa-user"></i><RiAdminLine/>&nbsp;&nbsp;Admin</span>
                <span><i className="fas-fa-calender"></i><BsCalendar2Date/>&nbsp;&nbsp;April 15,2022</span>
                <span><AiOutlineComment/>&nbsp;&nbsp;20 Comments</span>
                </div>
                </div>
                <div className="post-title">
                    <a href="#">Why should boys have all the fun!</a>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <button className="btn-post-btn">Read More &nbsp;<BsArrowRightShort/></button>

                </div>
            </div>
            <hr/>
            <div className="post-content">
                <div className="post-image">
                <div>
                    <img src="/img5.jpg" className="img" width="850px" height="500px" alt="blog5"></img>
                </div>
                <div className="post-info">
                <span><i className="fas-fa-user"></i><RiAdminLine/>&nbsp;&nbsp;Admin</span>
                <span><i className="fas-fa-calender"></i><BsCalendar2Date/>&nbsp;&nbsp;April 16,2022</span>
                <span><AiOutlineComment/>&nbsp;&nbsp;16 Comments</span>
                </div>
                </div>
                <div className="post-title">
                    <a href="#">Why should boys have all the fun!</a>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <button className="btn-post-btn">Read More &nbsp;<BsArrowRightShort/></button>

                </div>
            </div>
            
            <div className="pagination">
            <a href="#"><i className="fas-fa-chevron-left"><AiOutlineLeft/></i></a>
            <a href="#" className="pages">1</a>
            <a href="#" className="pages">2</a>
            <a href="#" className="pages">3</a>
            <a href="#" className="pages">4</a>
            <a href="#" className="pages" >5</a>
            <a href="#"><i className="fas-fa-chevron-left"><AiOutlineRight/></i></a>
            </div>
            </div>
            <aside className="sidebar">
            <div className="category">
                <h1>Category</h1>
                <ul className="category-list">
                    <li className="list-items">
                        <a href="#">Resorts <span>(5)</span></a>
                        
                    </li>
                    <li className="list-items">
                        <a href="#">Places <span>(12)</span></a>
                        
                    </li>
                    <li className="list-items">
                        <a href="#">Blogs <span>(2)</span></a>
                        
                    </li>
                    <li className="list-items">
                        <a href="#">Foods <span>(15)</span></a>
                        
                    </li>

                </ul>
            </div>
            <div className="popular-post">
            <h1>Popular Posts</h1>
            <div className="post-content">
                <div className="post-image">
                <div>
                    <img src="/pic1.jpg" className="blog1" width="400px" height="400px" alt="img1"></img>
                </div>
                <div className="post-co">
                <span><i className="fas-fa-user"></i><RiAdminLine/>&nbsp;&nbsp;Admin</span>
                <span><i className="fas-fa-calender"></i><BsCalendar2Date/>&nbsp;&nbsp;April 15,2022</span>
                <span><AiOutlineComment/>&nbsp;&nbsp;20 Comments</span>
                </div>
                </div>
                <div className="post-ti">
                    <a href="#">New Data Recording and analyse!</a>
                </div>
            </div>
            <div className="post-content">
                <div className="post-image">
                <div>
                    <img src="/pic2.jpg" className="blog1" width="400px" height="400px" alt="img2"></img>
                </div>
                <div className="post-co">
                <span><i className="fas-fa-user"></i><RiAdminLine/>&nbsp;&nbsp;Admin</span>
                <span><i className="fas-fa-calender"></i><BsCalendar2Date/>&nbsp;&nbsp;April 16,2022</span>
                <span><AiOutlineComment/>&nbsp;&nbsp;20 Comments</span>
                </div>
                </div>
                <div className="post-ti">
                    <a href="#">New Data Recording and analyse!</a>
                </div>
            </div>
            <div className="post-content">
                <div className="post-image">
                <div>
                    <img src="/pic3.jpg" className="blog1" width="400px" height="400px" alt="img3"></img>
                </div>
                <div className="post-co">
                <span><i className="fas-fa-user"></i><RiAdminLine/>&nbsp;&nbsp;Admin</span>
                <span><i className="fas-fa-calender"></i><BsCalendar2Date/>&nbsp;&nbsp;April 17,2022</span>
                <span><AiOutlineComment/>&nbsp;&nbsp;20 Comments</span>
                </div>
                </div>
                <div className="post-ti">
                    <a href="#">New Data Recording and analyse!</a>
                </div>
            </div>
            <div className="post-content">
                <div className="post-image">
                <div>
                    <img src="/pic4.jpg" className="blog1" width="400px" height="400px" alt="img4"></img>
                </div>
                <div className="post-co">
                <span><i className="fas-fa-user"></i><RiAdminLine/>&nbsp;&nbsp;Admin</span>
                <span><i className="fas-fa-calender"></i><BsCalendar2Date/>&nbsp;&nbsp;April 18,2022</span>
                <span><AiOutlineComment/>&nbsp;&nbsp;20 Comments</span>
                </div>
                </div>
                <div className="post-ti">
                    <a href="#">New Data Recording and analyse!</a>
                </div>
            </div>
            <div className="post-content">
                <div className="post-image">
                <div>
                    <img src="/pic5.jpg" className="blog1" width="400px" height="400px" alt="img5"></img>
                </div>
                <div className="post-co">
                <span><i className="fas-fa-user"></i><RiAdminLine/>&nbsp;&nbsp;Admin</span>
                <span><i className="fas-fa-calender"></i><BsCalendar2Date/>&nbsp;&nbsp;April 19,2022</span>
                <span><AiOutlineComment/>&nbsp;&nbsp;20 Comments</span>
                </div>
                </div>
                <div className="post-ti">
                    <a href="#">New Data Recording and analyse!</a>
                </div>
            </div>
            </div>
            <div className="post-content">
                <div className="post-image">
                <div>
                    <img src="/pic6.jpg" className="blog1" width="400px" height="400px" alt="img6"></img>
                </div>
                <div className="post-co">
                <span><i className="fas-fa-user"></i><RiAdminLine/>&nbsp;&nbsp;Admin</span>
                <span><i className="fas-fa-calender"></i><BsCalendar2Date/>&nbsp;&nbsp;April 20,2022</span>
                <span><AiOutlineComment/>&nbsp;&nbsp;20 Comments</span>
                </div>
                </div>
                <div className="post-ti">
                    <a href="#">New Data Recording and analyse!</a>
                </div>
            </div>
            <div className="newsletter">
            <h2>Newsletter</h2>
            <input type="text" className="input-element" placeholder="Email"/>
            <button className="btn-form-btn"><span>Subscribe</span>
            </button>
            </div>
            </aside>
            </div>
            <hr/>
        </div>
    );
}
export default Content;