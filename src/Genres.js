import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import React from 'react';

function Genres() {
  const navigate = useNavigate();

  const goToTopPicksArtists = (genre) => {
    navigate(`/TopPicksArtists/${genre}`);
  };

  return (
    <Container className='mt-5'>
      <Row className='py-5'>
        <Col sm={4}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              width="50"
              height="250"
              src="https://static.vecteezy.com/system/resources/previews/010/574/360/non_2x/retro-pop-music-party-seamless-pattern-isolated-on-white-textile-vintage-style-print-design-with-cassette-boombox-and-vinyl-bright-colored-repeated-background-hand-drawn-flat-illustration-vector.jpg"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>POP MUSIC</Card.Title>
              <Card.Text className='fs-6 flex-grow-1'>
                A genre of popular music that originated in the West during the 1950s and 1960s.
              </Card.Text>
              <Button variant="primary" className="mt-auto" onClick={() => goToTopPicksArtists('POP')}>Pop Link</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              width="50"
              height="250"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeJtPqk1ccLOslB9jOAuSBvI_C1umKEFBjw&s"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>HIP-HOP MUSIC</Card.Title>
              <Card.Text className='fs-6 flex-grow-1'>
                Hip hop or rap music formed in the United States in the 1970s and consists of stylized rhythmic music.
              </Card.Text>
              <Button variant="primary" className="mt-auto" onClick={() => goToTopPicksArtists('HIP_HOP_RAP')}>Hip-Hop Link</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              width="50"
              height="250"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5yhCYzri81wFsSjzMdzSRYK6BmQXEkIXjQ&s"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>ROCK MUSIC</Card.Title>
              <Card.Text className='fs-6 flex-grow-1'>
                A genre of popular music that originated as "rock and roll" in the United States in the 1950s.
              </Card.Text>
              <Button variant="primary" className="mt-auto" onClick={() => goToTopPicksArtists('ROCK')}>Rock Link</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col sm={4}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              width="50"
              height="250"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_QH_rh_1gY0OzTcnvl0rt7FMs7Fs1fHZUlA&s"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>RHYTHM AND BLUES MUSIC</Card.Title>
              <Card.Text className='fs-6 flex-grow-1'>
                A genre of popular African-American music that originated in the 1940s as urbane, rocking jazz based music.
              </Card.Text>
              <Button variant="primary" className="mt-auto" onClick={() => goToTopPicksArtists('ALTERNATIVE')}>Rhythm and Blues Link</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://musictechstudent.co.uk/wp-content/uploads/2014/08/soul-music-stylistic-features.jpg"
              width="50"
              height="250"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>SOUL MUSIC</Card.Title>
              <Card.Text className='fs-6 flex-grow-1'>
                A popular music genre that combines elements of African-American gospel music, rhythm and blues and jazz.
              </Card.Text>
              <Button variant="primary" className="mt-auto" onClick={() => goToTopPicksArtists('ALTERNATIVE')}>Soul Link</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzUjKaJb31Hap_NgV1CbQdx-_7ArIKerLQ2g&s"
              width="50"
              height="250"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>REGGAE MUSIC</Card.Title>
              <Card.Text className='fs-6 flex-grow-1'>
                A music genre that originated in Jamaica in the late 1960s, strongly influenced by traditional mento as well as American jazz.
              </Card.Text>
              <Button variant="primary" className="mt-auto" onClick={() => goToTopPicksArtists('REGGAE_DANCE_HALL')}>Reggae Link</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col sm={4}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              width="50"
              height="250"
              src="https://play-lh.googleusercontent.com/8cslWPWWj9tKoVot10Zx6JrGvSeJZ8LPFBp54GQAknYBBtfv5nRxm-ZO2GgmLX8rPg"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>COUNTRY MUSIC</Card.Title>
              <Card.Text className='fs-6 flex-grow-1'>
                A genre of United States popular music with origins in folk, Blues and Western music, often consisting of ballads and dance tunes.
              </Card.Text>
              <Button variant="primary" className="mt-auto" onClick={() => goToTopPicksArtists('COUNTRY')}>Country Link</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              width="50"
              height="250"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmdG81gVdZtc2tNfNXYFbjIh0ur6jsGQ8dUQ&s"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>FUNK MUSIC</Card.Title>
              <Card.Text className='fs-6 flex-grow-1'>
                A music genre that originated in the 1960s with a rhythmic, danceable new form of music.
              </Card.Text>
              <Button variant="primary" className="mt-auto" onClick={() => goToTopPicksArtists('HIP_HOP_RAP')}>Funk Link</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              width="50"
              height="250"
              src="https://img.jagranjosh.com/imported/images/E/Articles/Hindustani-Carnatic-Music.jpg"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>FOLK MUSIC</Card.Title>
              <Card.Text className='fs-6 flex-grow-1'>
                A genre that evolved from traditional music during the 20th century folk revival.
              </Card.Text>
              <Button variant="primary" className="mt-auto" onClick={() => goToTopPicksArtists('DANCE')}>Folk Link</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className='mb-5'>
        <Col sm={4}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              src="https://as2.ftcdn.net/v2/jpg/01/95/83/79/1000_F_195837928_DrhiGWARxTtH5eDEPLcj6E7LuahfE36H.jpg"
              width="50"
              height="250"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>JAZZ MUSIC</Card.Title>
              <Card.Text className='fs-6 flex-grow-1'>
                A music genre that originated from African American communities of New Orleans during the late 19th and early 20th centuries.
              </Card.Text>
              <Button variant="primary" className="mt-auto" onClick={() => goToTopPicksArtists('AFRO_BEATS')}>Jazz Link</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              width="50"
              height="250"
              src="https://top40weekly.com/wp-content/uploads/2024/02/Disco-Songs.jpg"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>DISCO MUSIC</Card.Title>
              <Card.Text className='fs-6 flex-grow-1'>
                A genre of dance music containing elements of funk, soul, pop, and salsa that achieved popularity during the mid-1970s to the early 1980s.
              </Card.Text>
              <Button variant="primary" className="mt-auto" onClick={() => goToTopPicksArtists('DANCE')}>Disco Link</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card className="h-100">
            <Card.Img
              variant="top"
              width="50"
              height="250"
              src="https://kgnu-org.sfo3.digitaloceanspaces.com/wp-content/uploads/2023/12/21104020/electronicmusic.jpg"
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title>ELECTRONIC MUSIC</Card.Title>
              <Card.Text className='fs-6 flex-grow-1'>
                A large set of predominantly popular and dance genres in which synthesizers and other electronic instruments are the primary sources of sound.
              </Card.Text>
              <Button variant="primary" className="mt-auto" onClick={() => goToTopPicksArtists('ELECTRONIC')}>Electronic Link</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Genres;
