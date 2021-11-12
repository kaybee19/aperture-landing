import React from 'react'
import styled from 'styled-components';
import SmoothList from 'react-smooth-list';
import { useInView } from 'react-hook-inview';

// Material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Circle = styled('div')`
	min-width: 24px;
	width: 24px;
	min-height: 24px;
	height: 24px;
	border: 1px solid;
	border-radius: 50%;
	margin-right: 1rem;
`;

const Wrapper = styled('div')`
	margin-top: 5rem;
	display: flex;
	overflow-x: hidden;
	scroll-behavior: smooth;
`;

const Span = styled('span')`
	min-width: 400px;
	max-width: 600px;
	display: flex;
	align-items: flex-start;
	margin: 1rem 0;
	@media (max-width: 600px) {
		min-width: auto;
		max-width: 345px;
		width: 345px;
	}
`;

const Div = styled('div')`
	min-width: fit-content;
	margin-right: 12.5%;
	@media (max-width: 600px) {
		max-width: 345px;
	}
`;

const Button = styled('button')`
	width: 36px;
	height: 36px;
	border-radius: 4px;
	padding: 0px;
	border: 0;
	box-shadow: 0px 15px 40px rgba(82, 52, 249, 0.12);
	margin: 0 4px;
	padding-top: 4px;
	background-color: white;
	cursor: pointer;
	&:hover {
		background-color: #5234F9;
		transition: .15s;
		& svg {
			color: white;
		}
	}
`;

const Comp = (props) => {
	return(
		<Div>
			<Typography sx={{color:'#333A4C', fontWeight:600}} variant='h5'>{props.title}</Typography>
			{
				props.data.map((item, i) => (
					<Span>
						<Circle style={{borderColor: props.color}} />
						<Typography variant='body1'>{item}</Typography>
					</Span>
				))
			}
		</Div>
	)
}

export default function RoadMap() {

	const [view, setView] = React.useState(false);
  const el = React.useRef(null);
  const [roadmapRef, isVisible] = useInView({
    threshold: .5,
  })

  // Trigger setView on viewport enter
  React.useEffect(() => {
  	isVisible && setView(true)
  }, [isVisible])

	const reff = React.useRef(null);

	const scroll = (scrollOffset) => {
		reff.current.scrollLeft += scrollOffset;
	};

  const items = [
  	{title: '2022 Early-Q1', color: '#5234F9', data: ['Launch Aperture Invest dApp and Web-app', 'Deploy Automated Delta-neutral combination', 'Support Ethereum blockchain as the entry point', 'Support Terra network as the destination chain']},
  	{title: '2022 Q2', color: '#EAC435', data: ['Onboard more yield-generating options', 'Expand support to Terra, Solana and Binance Smart Chain', 'Partner with wallet solutions (Coin98, Aikon, OpenLogin)']},
  	{title: '2022 Q3', color: '#03CEA4', data: ['Launch Aperture Invest + as a marketplace to offer community-driven strategies including Delta-neutral and Auto Yield-optimizer', 'Support liquidity pools', 'Support alternative options such as risk-coverage protocols']},
  	{title: '2022 Q4', color: '#E40066', data: ['Expand the support to more EVM-compatible networks (MATIC etc.) and onboard new investment options', 'Launch Aperture Portfolio as a non-custodial platform where users can designate a fund manager to invest their assets']},
  ]

	return (
		<div id="roadmap" ref={roadmapRef} style={{paddingBottom:'10rem', paddingRight: '0', position:'relative'}} className='container bg-han'>
			<div className='flexClass' style={{paddingTop:'5rem', paddingRight: '0'}}>
				<Typography variant='h2' className='fontBold' sx={{fontSize:40}}>Road<span style={{color:'#5234F9'}}>Map</span></Typography>
				<div style={{marginLeft:'auto', marginRight: '6.5%'}}>
					<Button onClick={() => scroll(-387.5)}><ChevronLeftIcon sx={{color:'#5234F9'}} /></Button>
					<Button onClick={() => scroll(387.5)}><ChevronRightIcon sx={{color:'#5234F9'}} /></Button>
				</div>
			</div>
			<SmoothList transitionDuration={1000} delay={200} visible={view}>
				<Wrapper ref={reff}>
						
					{
						items.map((it, i) => <Comp title={it.title} color={it.color} data={it.data} />)
					}
				</Wrapper>
			</SmoothList>
		</div>
	)
};
