import React from 'react'
import styled from 'styled-components';
import SmoothList from 'react-smooth-list';
import { useInView } from 'react-hook-inview';

// Material UI
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { send2, square, trend } from '../assets';

const Body = styled('div')`
	background-color: #F2F0FF;
	padding-top: 5rem;
	padding-bottom: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Flex = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 16px;
	min-width: 229px;
	// height: 197px;
	box-shadow: 0px 15px 40px rgba(22, 20, 31, 0.08);
	border-radius: 9px;
	color: white;
	margin: 3rem 0;
	&:last-of-type {
		margin-top: 0;
	}
`;

const Span = styled('span')`
	background-color: #F2F0FF;
	width: 40px;
	height: 40px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Smooth = styled(SmoothList)`
	display: flex;
	width: 100%;
	& .flag {
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 3rem;
    @media (max-width: 1200px) {
    	padding-bottom: 0rem;
    	padding-top: 3rem;
    }
	}
	@media (max-width: 1200px) {
		flex-direction: column-reverse;
	}
`;

const Card = (props) => {
	return (
		<Flex style={{backgroundColor: props.color}}>
			<Span>
				<img width='25' src={props.img} alt="icons" />
			</Span>
			<Typography sx={{padding:'1rem 0'}} className='fontBold' variant='h6'>{props.header}</Typography>
			<Typography variant='body1' sx={{padding: '.5rem .5rem .5rem 0'}}>{props.text}</Typography>
		</Flex>	
	)
};

export default function Products() {

	const [view, setView] = React.useState(false);
  const el = React.useRef(null);
  const productsRef = React.useRef();
  const [ref, isVisible] = useInView({
    threshold: 0,
  })

  // Trigger setView on viewport enter
  React.useEffect(() => {
  	isVisible && setView(true)
  }, [isVisible])

	return (
		<Body ref={productsRef} id="products" className='container'>
			<Smooth transitionDuration={1000} delay={200} visible={view}>
				<Grid ref={ref} container item xs={12} justifyContent='space-around'>
					<Grid xs={12} md={5}>
						<Card img={send2} color='#03CEA4' header='Aperture Invest' text='To enable frictionless cross-chain and access investment opportunities everywhere' />
						<Card img={square} color='#5234F9' header='Aperture Invest+' text='To offer a marketplace for community-driven strategies including Delta-neutral and Auto Yield-optimizer' />
					</Grid>
					<Grid xs={12} md={5} sx={{margin:'auto'}}>
						<Card img={trend} color='#EAC435' header='Aperture Portfolio' text='To provide a non-custodial platform to delegate investment decisions' />
					</Grid>
				</Grid>
				<Grid item xs={12} className='flag'>
					<Typography variant='h3' sx={{fontSize:40}} className='fontBold'>Flagship <span style={{color:'#5234F9'}}>Products</span></Typography>
					<Typography variant='body1' sx={{margin:'2rem 0 .5rem'}}>Aperture provides a seamless and frictionless experience in accessing investment options across different chains and seek the highest yield for users.</Typography>
					<Typography variant='body1'>The three products share the same backend and algorithms; each is a natural increment built on the previous one.</Typography>
				</Grid>
			</Smooth>
		</Body>
	)
};
