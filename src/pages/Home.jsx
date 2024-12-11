import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';
import "./Home.css"

function Home() {
  return (
    <>
      <div className='mt-5 p-55'>
        <img
          src="https://cdn-lnp.dataweavers.io/-/media/images/london/visit/things-to-do/london-areas/river-thames/london-skyline-a-1920x582.jpg?rev=e4bde25136ba4f5a931b66a7cfff8e66&mw=1920&hash=DA9CA22BB074B71351826CCF4B956B7D"
          alt="London Skyline"
          height="400px"
          width="100%"
        />
      </div>&nbsp;&nbsp;
      <div className='mt3' >
      <div className="py-4 bg-danger text-white d-flex justify-content-around">
        <h3>
          London Official Guide
        </h3>
        <h3>
          <i className="fa-solid fa-heart fa-bounce" style={{ color: '#23df16' }}></i>
          Inspiring 22 million
          <div>people each year</div>
        </h3>
        <h3>
          <i className="fa-solid fa-thumbs-up fa-bounce" style={{ color: '#B197FC' }}></i>
          Book easily via our
          <div>trusted partner</div>
        </h3>
        <h3>
          <i className="fa-brands fa-shopify fa-bounce" style={{ color: '#1f5149' }}></i>
          Your purchase
          <div>supports jobs in London</div>
        </h3>
      </div></div>
      <div style={{  alignItems: "center", justifyContent: "center" }}><div style={{justifyContent:"center",
        textAlign:"center",justifyItems:"center"
      }}>
      <h1>london explore</h1></div><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
         Molestias dolorem enim, accusantium saepe officiis eius et modi error ullam cumque inventore, doloremque neque libero. 
        Beatae ipsam molestias numquam earum saepe! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non velit aliquid dignissimos numquam, dolorum quaerat a dolorem deleniti totam expedita beatae nobis sapiente quia. Suscipit et 
        velit ducimus minima consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente commodi quos quas quaerat ex nihil eligendi officiis nostrum modi a provident rem, debitis
         nulla nisi asperiores ullam deserunt obcaecati rerum.</p>
       

      <Container className="mt-5 text-center d-flex py-5">
        
        
        <Row className="justify-content-right ">
          <Col md={4}>
            <Card className="mb-4 custom-transition ">
              <Card.Img variant="top" src="https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?cs=srgb&dl=pexels-chaitaastic-1796715.jpg&fm=jpg"  height="250px"/>
              <Card.Body>
                <Card.Title>london bridge</Card.Title>
                <Card.Text>
                 most attractive place in london
                 <p>food accomdation free</p>
                 <p>tour package:$US12000</p>
                 <p><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i>  <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical"style={{color:"yellow"}} ></i> 
                              
                               
                 </p>
                                 </Card.Text>
                <Button variant="primary">click here!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3 custom-transition">
              <Card.Img variant="top" src="https://media.gettyimages.com/id/619639650/photo/snowing-on-jubilee-gardens-in-london-at-dusk.webp?s=612x612&w=gi&k=20&c=o4PSzieLZUAKJUPHpyObYFhZnVz6LSi78O5V8N8WpJA=" height="200px" />
              <Card.Body>
                <Card.Title>Winter Wonderland</Card.Title>
                <Card.Text>
                  Discover the magic of London in winter. Explore beautiful sights and festive experiences.

                  most attractive place in london
                 <p>food accomdation free</p>
                 <p>tour package:$US 35000</p>
                 <p><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i>  <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical"style={{color:"yellow"}} ></i> 
                                                    </p>

                </Card.Text>
                <Button variant="primary">click here!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 custom-transition  ">
              <Card.Img variant="top" src="https://media.gettyimages.com/id/1175317836/photo/regent-street-with-sun-shining-through-buildings-during-sunset-london-england-uk.webp?s=612x612&w=gi&k=20&c=4CyTXrAR8kQYjljVoBxZERBTsD2253cqoE49w3qnZCc=" height="200px"  />
              <Card.Body>
                <Card.Title>london city mall</Card.Title>
                <Card.Text>
                Discover the magic of London in winter. Explore beautiful sights and festive experiences.

most attractive place in london
<p>food accomdation free</p>
<p>tour package:$US 45000</p>
<p><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i>  <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical"style={{color:"yellow"}} ></i> 
                                  </p>


                 
                </Card.Text>
                <Button variant="primary">click here !</Button>
              </Card.Body>
            </Card>
          </Col>
          <h2 className='text-center'>Qatar</h2>
          <p>Qatar, independent emirate on the west coast of the Persian Gulf. The small country has tremendous influence as a trusted mediator between rivals in the region and as one of the world’s largest exporters of natural gas. It has also garnered international attention through its popular television network, Al Jazeera, and its controversial hosting of the 2022 World Cup in its desert climate.
             In 2024 it hosted the Asian Cup.</p>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="https://th.bing.com/th/id/R.b46e8d7b0c0edd1509e560cd9d067453?rik=3etP1uAY1891fQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-txBi03l8G6c%2fVGZ5MEmOxxI%2fAAAAAAAAAIQ%2fX70kQYfgm2s%2fs1600%2fVillaggio-Mall-Shopping-Center-in-Doha-Qatar.jpg&ehk=rOXe%2f8epgxWpo7WpFbCcSsrGKt5Nfn7FYEMAh7c3EG0%3d&risl=&pid=ImgRaw&r=0" height="250px"  />
              <Card.Body>
                <Card.Title>The villagio mall</Card.Title>
                <Card.Text>
                Discover the magic of London in winter. Explore beautiful sights and festive experiences.

most attractive place in london
<p>food accomdation free</p>
<p>tour package:$US 45000</p>
<p><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i>  <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical"style={{color:"yellow"}} ></i> 
                                  </p>





                 
                </Card.Text>
                <Button variant="primary"> click here!</Button>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card className="mb-4 custom-transition  ">
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.F9vykj-5D5od7rvYx61DwAAAAA?rs=1&pid=ImgDetMain" height="250px"  />
              <Card.Body>
                <Card.Title>qatar beach</Card.Title>
                <Card.Text>
                Discover the magic of London in winter. Explore beautiful sights and festive experiences.

most attractive place in london
<p>food accomdation free</p>
<p>tour package:$US 45000</p>
<p><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i>  <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical"style={{color:"yellow"}} ></i> 
                                  </p>





                </Card.Text>
                <Button variant="primary">click here!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4   custom-transition  ">
              <Card.Img variant="top" src="https://visitqatar.com/adobe/dynamicmedia/deliver/dm-aid--110274d6-aa05-484d-82ae-b053504103b7/-dsc1381.jpg?width=1280&quality=75&preferwebp=true" height="250px"  />
              <Card.Body>
                <Card.Title>Msheireb Downtown Doha</Card.Title>
                <Card.Text>
                Discover the magic of London in winter. Explore beautiful sights and festive experiences.

most attractive place in london
<p>food accomdation free</p>
<p>tour package:$US 45000</p>
<p><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i>  <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical"style={{color:"yellow"}} ></i> 
                                  </p>





                </Card.Text>
                <Button variant="primary">click here!</Button>
              </Card.Body>
            </Card>
          </Col>
<h1 className='text-align-center'>Where Is Bali Located? Must Read Before You Go</h1>
<p>You’re planning to visit Bali during your next trip? You are probably wondering exactly where it’s located? Bali is an island located in the country of Indonesia.</p>
<img src="https://www.wanderinasia.com/wp-content/uploads/2023/04/Where-is-Bali-Located-Southeast-Asia-Map.jpg" alt="" height="400px" width="70px" /><p>The lakes in Bali are simply magical – dead still and with breathtaking landscapes all around, which makes for some stunning reflections over the water. Our fave lake in Bali has to be Danau Beratan in Bedugul. It is the second largest lake on the island, and sits beside Mount Beratan and Mount Catur. But the main highlight here is the Pura Ulun Danu Beratan temple floating in the centre of the lake. When the early morning or late afternoon mountain fog creeps through, this sacred and spectacular temple looks as if it’s floating – it’s pure magic. </p>

<Col md={4}>
            <Card className="mb-4  custom-transition  ">
              <Card.Img variant="top" src="https://static.thehoneycombers.com/wp-content/uploads/sites/4/2019/08/Ulun-Danu-Beratan-in-Bedugul-Bali-Indonesia-.jpg" height="250px"  />
              <Card.Body>
                <Card.Title>Msheireb Downtown Doha</Card.Title>
                <Card.Text>
                Discover the magic of London in winter. Explore beautiful sights and festive experiences.

most attractive place in london
<p>food accomdation free</p>
<p>tour package:$US 55000</p>
<p><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i>  <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical"style={{color:"yellow"}} ></i> 
                                  </p>


                </Card.Text>
                <Button variant="primary">click here!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4  custom-transition ">
              <Card.Img variant="top" src="https://static.thehoneycombers.com/wp-content/uploads/sites/4/2019/11/Tukad-Cepung-Waterfall-in-Ubud-Bali-Indonesia-1.jpg" height="250px"  />
              <Card.Body>
                <Card.Title> Tukad Cepung waterfall – Bangli</Card.Title>
                <Card.Text>
                Discover the magic of London in winter. Explore beautiful sights and festive experiences.

most attractive place in london
<p>food accomdation free</p>
<p>tour package:$US 55000</p>
<p><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i>  <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical"style={{color:"yellow"}} ></i> 
                                  </p>

</Card.Text>
                <Button variant="primary">click here1</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-4  custom-transition  ">
              <Card.Img variant="top" src="https://static.thehoneycombers.com/wp-content/uploads/sites/4/2019/02/Water-sports-in-Bali-Indonesia.jpeg" height="250px"  />
              <Card.Body>
                <Card.Title>June weather in Bali </Card.Title>
                <Card.Text>
                Discover the magic of London in winter. Explore beautiful sights and festive experiences.

most attractive place in london
<p>food accomdation free</p>
<p>tour package:$US 75000</p>
<p><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i>  <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical"style={{color:"yellow"}} ></i> 
                                  </p>




                </Card.Text>
                <Button variant="primary">click here!</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-4  custom-transition ">
              <Card.Img variant="top" src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0f/98/4b/7c.jpg" height="230px"  />
              <Card.Body>
                <Card.Title> Mount Batur Trekking & Hot Spring </Card.Title>
                <Card.Text>
                Discover the magic of London in winter. Explore beautiful sights and festive experiences.

most attractive place in london
<p>food accomdation free</p>
<p>tour package:$US 15000</p>
<p><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i>  <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical"style={{color:"yellow"}} ></i> 
                                  </p>


                </Card.Text>
                <Button variant="primary">click here!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4  custom-transition ">
              <Card.Img variant="top" src="https://static.thehoneycombers.com/wp-content/uploads/sites/4/2013/01/Pura-Tanah-Lot-Must-Visit-Hindu-Temples-in-Bali-Indonesia.jpg" height="250px"  />
              <Card.Body>
                <Card.Title> November weather in Bali</Card.Title>
                <Card.Text>
                Discover the magic of London in winter. Explore beautiful sights and festive experiences.

most attractive place in london
<p>food accomdation free</p>
<p>tour package:$US 25000</p>
<p><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i>  <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical"style={{color:"yellow"}} ></i> 
                                  </p>


                </Card.Text>
                <Button variant="primary"> click here!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4 custom-transition ">
              <Card.Img variant="top" src="https://deih43ym53wif.cloudfront.net/bali-indonesia-shutterstock_459773704_0dd494ecf7.jpeg" height="250px"  />
              <Card.Body>
                <Card.Title>  Bali island</Card.Title>
                <Card.Text>
                Discover the magic of London in winter. Explore beautiful sights and festive experiences.

most attractive place in london
<p>food accomdation free</p>
<p>tour package:$US 15000</p>
<p><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i>  <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical"style={{color:"yellow"}} ></i> 
                                  </p>

                </Card.Text>
                <Button variant="primary">click here!</Button>
              </Card.Body>
            </Card>
          </Col>
<h1 className='text-align-center'> Switzerland</h1>
<p>Switzerland, officially the Swiss Confederation, is a landlocked country located in west-central
   Europe.[d][13] It is bordered by Italy to the south, France to the west, Germany to the north, and Austria and Liechtenstein to the east. Switzerland is geographically divided among the Swiss Plateau, the Alps and the Jura; the Alps occupy the greater part of the territory, whereas most of the country's population of 9 million are concentrated on the plateau, which hosts its largest cities and economic centres,
   including Zurich, Geneva, and Basel.[14] </p>
   <Col md={4}>
            <Card className="mb-4  custom-transition ">
              <Card.Img variant="top" src=" https://www.myglobalviewpoint.com/wp-content/uploads/2020/01/Most-beautiful-places-in-Switzerland.jpg"height="250px"  />
              <Card.Body>
                <Card.Title>Swiss Alps’ snowcapped peaks </Card.Title>
                <Card.Text>
                Discover the magic of London in winter. Explore beautiful sights and festive experiences.

most attractive place in london
<p>food accomdation free</p>
<p>tour package:$US 25000</p>
<p><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i>  <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical"style={{color:"yellow"}} ></i> 
                                  </p>


                </Card.Text>
                <Button variant="primary"> click here!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4  custom-transition ">
              <Card.Img variant="top" src=" https://media.tacdn.com/media/attractions-splice-spp-360x240/0b/25/20/b1.jpg"height="250px"  />
              <Card.Body>
                <Card.Title>Swiss Alps’ snowcapped peaks </Card.Title>
                <Card.Text>
                Discover the magic of London in winter. Explore beautiful sights and festive experiences.

most attractive place in london
<p>food accomdation free</p>
<p>tour package:$US 25000</p>
<p><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i>  <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical"style={{color:"yellow"}} ></i> 
                                  </p>


                </Card.Text>
                <Button variant="primary"> click here!</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-4  custom-transition ">
              <Card.Img variant="top" src=" https://media.tacdn.com/media/attractions-splice-spp-360x240/12/77/10/a0.jpg"height="250px"  />
              <Card.Body>
                <Card.Title>mount titlis half day trip lucerne</Card.Title>
                <Card.Text>
                Discover the magic of London in winter. Explore beautiful sights and festive experiences.

most attractive place in london
<p>food accomdation free</p>
<p>tour package:$US 25000</p>
<p><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i><i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i>  <i className="fa-solid fa-star fa-flip-vertical" style={{color:"yellow"}}></i> <i className="fa-solid fa-star fa-flip-vertical"style={{color:"yellow"}} ></i> 
                                  </p>


                </Card.Text>
                <Button variant="primary"> click here!</Button>
              </Card.Body>
            </Card>
          </Col>
   











        </Row>
      </Container>
      </div>
    </>
  );
}

export default Home;
