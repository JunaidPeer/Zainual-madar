import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
// import Swap from '../images/swap_image.svg'
import Saheb from '../images/saheb.png'
import Image2 from '../images/02.png'
import top from '../images/06.png'

export default function Home() {
  
  return (
    <div>
      <Nav />
      <Image>
      <img src={Saheb} alt="swap_image"
      height={600}
      width={600}
      />
      </Image>
      <Eclipse></Eclipse>
      <Image3>
      <img src={Image2} alt="swap_image"
      height={300}
      width={300}
      />
      </Image3>
      <Wrapper>
      Hazrath Peer Syed Zainul Madar Sha Hussaini Madari Saheb
     </Wrapper>
    <Image4>
      <img src={top} alt="swap_image"
      height={400}
      width={400}
      />
      </Image4>
      <Paragraph> </Paragraph>
      
      <button class="btn"><a href='https://www.youtube.com/@silsilaealviyaomadariya5769'>Subscribe</a></button>
     <button class="btn1">KNOW MORE</button>

<Eclipse2></Eclipse2>
<Eclipse3></Eclipse3>
    </div>
  )
}
const Wrapper = styled.div`
font-family: hidyath;
font-weight: bold;
font-size: 64px;
color: white;
text-align: left;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
  `;
const Paragraph = styled.p`
  font-family: konnectLight;
  font-size: 38px;
  font-weight: light;
  text-align: left;
  justify-content: center;
  color: #2B737F;
  line-height: 48px;
  `;
  
const Image = styled.div`
float: right;
min-width: 500px;
min-height: 500px;

`;
const Image3 = styled.div`
float: left;
position: absolute;
left: 1px;
top: 500px;
z-index: -1;
`;

const Image4 = styled.div`
float: top;
position: absolute;
left: 1110px;
top: 10px;
z-index: -1;
`;

const Eclipse = styled.div`
position: absolute;
width: auto;
z-index: -1;
min-width: 800px;
height: auto;
min-height: 650px;
left: 58px;
top: 80px;
border-radius: 50%;
background: #34e89e;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #0f3443, #34e89e);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #0f3443, #34e89e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

opacity: 0.9;
filter: blur(158.5px);
`;
const Eclipse2 = styled.div`
position: absolute;
width: auto;
z-index: -1;
height: auto;
min-height: 650px;
min-width: 800px;
left: 700.13px;
top: 150.54px;
border-radius: 50%;
background: #34e89e;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #0f3443, #34e89e);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #0f3443, #34e89e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

filter: blur(158.5px);
`;
const Eclipse3 = styled.div`
position: absolute;
width: auto;
z-index: -1;
height: auto;
min-height: 500px;
min-width: 500px;
left: 900.13px;
top: 200.54px;
border-radius: 50%;
background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
filter: blur(200px);
`;