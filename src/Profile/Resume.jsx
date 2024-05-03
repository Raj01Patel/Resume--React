import "./Resume.css"

function Resume() {
    return (
        <div className="main">
            <div className="profile">
                <div className="img">
                    <img src="https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355896_960_720.png" alt="Jessica Greene" />
                    <p className="para">Profile</p>
                </div>

                <div className="name">
                    <h1>Jessica Greene</h1>
                    <h2>Freelance Writer</h2>
                </div>

                <div className="info">
                    <p>
                        I specialize in writing long-form blog content, case studies, e-books, and white papers for B2Bs, tech startups, and marketing agencies.
                    </p>
                    <ul className="contact-info">
                        <li>
                            Email:<a href="mailto:myemail@gmail.com"> myemail@gmail.com</a>
                        </li>
                        <li>
                            Website: <a href="mywebsite.com">mywebsite.com</a>
                        </li>
                    </ul>
                </div>
            </div>


            <div className="work">
                <div className="img">
                    <img src="../public/briefcase.png" alt=""></img>
                    <p className="para">Work</p>
                </div>
                <div className="work-experience">
                    <ul>
                        <li>
                            <h3>Present</h3>
                            <div>
                            <h4>Jessica Greene Marketing, Freelance Writer</h4>
                            <p>
                                Create blog posts, landing pages, e-books, and case studies for clients
                            </p>
                            </div>
                        </li>
                        <li>
                            <h3>2016</h3>
                            <div>
                            <h4>Kaiser Permanente Lead Agile Product Owner</h4>
                            <p>Created and socialized best practices for Agile software development</p>
                            </div>
                        </li>
                        <li>
                            <h3>2013-2015</h3>
                            <div>
                            <h4>Humana Agile Product Owner</h4>
                            <p>Oversaw the implementation of six major web development projects</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="skill">
                <div className="img">
                <img src="../public/skill.png"></img>
                <p className="para">Skills & Samples</p>
                </div>
                <div className="d1">
                    <p>Writing:- 🔵🔵🔵🔵🔵</p>
                    <p>Editing:- 🔵🔵🔵</p>
                    <p>SEO:-     🔵🔵🔵🔵</p>
                    <p>Social Media:- 🔵🔵🔵🔵</p>
                </div>
                <div className="d2">
                        <div>
                            <h3>Zapier</h3>
                            <p>Organize Your Life with the Agile Method</p>
                        </div>
                        <div>
                            <h3>Spoke</h3>
                            <p>Is 40 Hr a week too much?Here's what history and science say.</p>
                        </div>
                        <div>
                            <h3>nDash</h3>
                            <p>Why Generalist Writers Lead to Lost Profits in B2B Tech</p>
                        </div>
                </div>
            </div>


            <div className="imgdiv">
                <img src="../public/bulb.png"></img>
                <img src="../public/suitcase.png"></img>
                <img src="../public/laptop.png"></img>
                <img src="../public/megaphone.png"></img>
                <img src="https://cdn.pixabay.com/photo/2020/07/01/09/24/icon-5358993_1280.png"></img>
                
            </div>
        </div>
    );
}

export default Resume