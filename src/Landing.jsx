import youtube from "./assets/youtube-1837872_1280.png"
import { Navbar, Form, FormControl, Button, Nav, Card } from 'react-bootstrap';
import dsa from './assets/maxresdefault.jpg'

const Landing=()=> {
        const videos = [
            { title: "Linear Search Algorithm - Theory + Code + Questions", views: "771K views", time: "3 years ago" },
            { title: "Dangal - Title Track | Lyrical Video | Dangal", views: "109M views", time: "7 years ago" },
            { title: "Java + DSA + Interview Preparation Course", views: "69 videos", time: "3 months ago" },
            { title: "Adopt mother cow & make her happy", views: "Sponsored", time: "" },
            { title: "Hexaware Group Discussion round 2", views: "Example Phrases", time: "" },
            { title: "Become a Generative AI Expert", views: "200+ Hours Curriculum", time: "" },
            { title: "Mix - Ud Jaayega Hans Akela", views: "1M+ views", time: "" },
            { title: "Seval Kodi - 4K Video Song", views: "4.2M views", time: "" },
        ];

        return (
            <div>
            <Navbar bg="light" expand="lg" className="shadow-sm">
                <img src={youtube} alt="" className="ms-2 " style={{width:"10s0px", height:'30px'}} />
                <Navbar.Brand href="#home" className="lead ms-3" >YouTube</Navbar.Brand>
                <Form inline className="mx-auto d-flex">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                </Button>
                </Form>
                <Button variant="outline-dark">Profile</Button>
            </Navbar>

            <div className="d-flex">
                <Nav className="flex-column bg-light p-3 vh-100" style={{ width: '100px' }}>
                <Nav.Link href="#" className="mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" fill="black" className="bi bi-house-fill" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                    <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                    </svg>
                </Nav.Link>
                <Nav.Link href="#" className="mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" fill="black" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                    </svg>
                </Nav.Link>
                <Nav.Link href="#" className="mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" fill="black" className="bi bi-music-note-beamed" viewBox="0 0 16 16">
                    <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"/>
                    <path fillRule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z"/>
                    <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z"/>
                    </svg>
                </Nav.Link>
                <Nav.Link href="#" className="mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" fill="black" className="bi bi-card-image" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
                    </svg>
                </Nav.Link>
                <Nav.Link href="#" className="mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="22" fill="black" className="bi bi-gear-fill" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg>
                </Nav.Link>
                </Nav>

                <div className="container mt-4">
                <div className="d-flex flex-wrap justify-content-between">
                    {videos.map((video, index) => (
                    <Card key={index} style={{ width: '18rem', marginBottom: '20px' }}>
                        <Card.Img variant="top" src={dsa} />
                        <Card.Body>
                        <Card.Title>{video.title}</Card.Title>
                        <Card.Text>
                            {video.views} • {video.time}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    ))}
                </div>
                </div>
            </div>
            </div>
        );
}

export default Landing;
