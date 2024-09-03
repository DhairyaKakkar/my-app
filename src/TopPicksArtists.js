import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';
import './TopPicksArtists.css';

function shuffleSongs(array){
  let shuffledSongs = array.slice(); 
  for (let i = shuffledSongs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledSongs[i], shuffledSongs[j]] = [shuffledSongs[j], shuffledSongs[i]]; 
  }
  return shuffledSongs;
};

function TopPicksArtists() {
  const [isLoading, setIsLoading] = useState(true);
  const [topPicks, setTopPicks] = useState([]);
  const { genre } = useParams(); // Get genre from URL

  const API = `https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in_world_by_genre?genre=${genre}&limit=100`; 
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'f0bfcbdbb6msh8b0c1e5b5b9a44ap1f9127jsn3c186749ebe5',
      'x-rapidapi-host': 'shazam-core7.p.rapidapi.com'
    }
  };

  async function fetchAPIdata(url) {
    try {
      const res = await fetch(url, options);
      const data = await res.json();
      console.log('API Response:', data);

      const shuffledSongs = shuffleSongs(data.data);
      setTopPicks(shuffledSongs.slice(0, 5).map(item => ({
        name: item.attributes.name, 
        artist: item.attributes.artistName,
        image: item.attributes.artwork.url,
        url: item.attributes.url
      })));
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchAPIdata(API);
  }, [genre]);

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  if (isLoading) {
    return (
      <>
        <h1 style={{ paddingTop: '400px' }}>Loading...</h1>
      </>
    );
  }

  return (
    <>
      <h1 style={{ paddingTop: '50px' }}>Top Picks for Genre</h1>
      <Container>
        <Row className='py-5'>
          <Col md={6}>
            <ListGroup as="ol" numbered className="custom-listgroup text-start">
              {topPicks.map((pick, index) => (
                <ListGroup.Item
                  as="li"
                  key={index}
                  className="d-flex justify-content-between align-items-start"
                  onClick={() => handleClick(pick.url)}
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{pick.name}</div>
                    <div>{pick.artist}</div> {/* Artist name */}
                  </div>
                  <Badge bg="light" text="dark">
                    ♡
                  </Badge>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
        <Row className='py-5'>
          <Col>
            <Image src="https://i.scdn.co/image/ab6761610000e5ebab47d8dae2b24f5afe7f9d38" roundedCircle width='240' height='240' />
          </Col>
          <Col>
            <Image src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2017/08/maroon5-1504156330.jpg" roundedCircle width='240' height='240' />
          </Col>
          <Col>
            <Image src="https://imageio.forbes.com/specials-images/imageserve/653fcd49893eb27774ba7ecc/65th-GRAMMY-Awards---Arrivals/960x0.jpg?format=jpg&width=960" roundedCircle width='240' height='240' />
          </Col>
          <Col>
            <Image src="https://www.rollingstone.com/wp-content/uploads/2024/04/GettyImages-2150383228.jpg?w=1581&h=1054&crop=1" roundedCircle width='240' height='240' />
          </Col>
          <Col>
            <Image src="https://i.ytimg.com/vi/CevxZvSJLk8/maxresdefault.jpg" roundedCircle width='240' height='240' />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TopPicksArtists;
