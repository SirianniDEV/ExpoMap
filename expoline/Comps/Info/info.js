import styled from 'styled-components';

export const Container = styled.div
`
background: #ffffff;
padding: 25px;
margin: 15px;
border-radius: 5px;
font-size: 14px;
`
export const Header = styled.h3
`
font-weight: 700;
font-size: 18px;
color: #183152;


`

export default function Info(){
	return(
        
       <Container>
		<Header>Translink SkyTrain: Expo Line</Header>
		<p>Connects Downtown Vancouver with the cities of Burnaby, New Westminster, and Surrey.</p>
	
		<p>The Expo Line operates two routes:
		<li>Waterfront Station (Downtown Vancouver) to King George Station (Surrey)</li>
		<li>Waterfront Station (Downtown Vancouver) to Production Way–University Station (Burnaby)</li>
		</p>

		<p>Transfer to the Millennium Line at the following stations:
		<li>Commercial–Broadway Station</li>
		<li>Lougheed Town Centre Station</li>
		<li>Production Way–University Station</li>
		</p>

		<p>Use Columbia Station to transfer to and from a train going to either King George or Production Way–University.
		Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.</p>
	  </Container>

)
}