import React from 'react'
import styled from 'styled-components';
import SmoothList from 'react-smooth-list';
import { useInView } from 'react-hook-inview';

// Material UI
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
	phantom,
	opera,
	coin98,
	math,
	sollet,
	safepal,
	slope,
	solflare,
	connect,
	eco,
	meta,
	ledger,
	terra,
	exodus,
	shop,
	wallet2,
	send,
	logo,
	synthetixLogo,
	mirror,
	aaveLogo,
	compoundLogo
} from '../assets';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import StorefrontIcon from '@mui/icons-material/StorefrontTwoTone';

const Root = styled(SmoothList)`
	& .fade {
		position: relative;
		overflow: hidden;
	}
	& .fade:after {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 5;
		box-shadow: inset 0 0 20px 20px white;
		border-radius: 9px;
	}
	}
	@media (min-width: 900px) {
		& > div {
			&:last-of-type {
				& .reverse {
					flex-flow: row-reverse;
				}
			}
		}
	}
`;

const Flex = styled('div')`
	position: relative;
	color: black;
	border-radius: 9px;
	padding: 24px;
	background: white;
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	flex-direction: column;
	margin-top: 2rem;
	box-shadow: 0px 15px 40px rgba(7, 6, 9, 0.08);
	&:nth-child(2).flexCard {
		margin-left: -5rem;
	}
	& ul {
		font-size: 14px;
		text-align: left;
		& li { margin-top: 8px; }
		@media (min-width: 600px) { padding-left: 1rem; }
	}
`;

const CardFlex = styled('div')`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const BodyWrapper = styled(Grid)`
	border-radius: 24px;
	padding: 48px 72px;
	margin-bottom: 2.5rem;
	background: #080a0f;
	@media (max-width: 600px) {
		padding: 24px;
	}
	& img {
		max-width: 300px;
		text-align: center;
		@media (max-width: 600px) {
			max-width: 250px;
		}
	}
`;

const IconContainer = styled('div')`
	display: flex;
	position: relative;
	left: 0;
  animation-name: icon-animation;
  animation-duration: 15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-fill-mode: backwards;
`;

const IconGrid = styled('div')`
	min-width: 125px;
`;

const Card = ({header, classes, text, img, children}) => {
	return (
		<Flex className={classes}>
			{img}
			<Typography variant='h6' sx={{margin:'.5rem 0', fontWeight:500}}>{header}</Typography>
			<Typography variant='body2' className='textColor'>{text}</Typography>
			{children}
		</Flex>	
	)
};

const Body = ({svg, title, text, img, children, i}) => {
	return (
		<BodyWrapper className='reverse' xs={12} container justifyContent='space-between'>
			<Grid item xs={12} md={5}>
				<Typography variant='h5' sx={{fontWeight:'500!important'}} className='fontBold'><span style={{fontWeight:700}}>Step {i}:</span> {title}</Typography>
				<Typography sx={{margin:'1rem 0 2rem'}} variant='body2'>{text}</Typography>
				<img style={{marginTop:'2rem'}} src={img} alt="" />
			</Grid>
			<Grid item xs={12} md={5}>
				{children}
			</Grid>
		</BodyWrapper>
	)
}

export default function How() {

	const [view, setView] = React.useState(false);
  const el = React.useRef(null);
  const howRef = React.useRef();
  const [ref, isVisible] = useInView({
    threshold: 0,
  })

  // Trigger setView on viewport enter
  React.useEffect(() => {
  	isVisible && setView(true)
  }, [isVisible])

	const rowOne = [
		{img: meta, text: 'MetaMask'},
		{img: ledger, text: 'Ledger'},
		{img: exodus, text: 'Exodus'},
		{img: opera, text: 'Opera'},
		{img: meta, text: 'MetaMask'},
		{img: ledger, text: 'Ledger'},
		{img: exodus, text: 'Exodus'},
		{img: opera, text: 'Opera'},
		{img: meta, text: 'MetaMask'},
		{img: ledger, text: 'Ledger'},
		{img: exodus, text: 'Exodus'},
		{img: opera, text: 'Opera'},
	]

	const rowTwo = [
		{svg: true, img: <svg height="33" viewBox="0 0 40 25" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m8.19180572 4.83416816c6.52149658-6.38508884 17.09493158-6.38508884 23.61642788 0l.7848727.76845565c.3260748.31925442.3260748.83686816 0 1.15612272l-2.6848927 2.62873374c-.1630375.15962734-.4273733.15962734-.5904108 0l-1.0800779-1.05748639c-4.5495589-4.45439756-11.9258514-4.45439756-16.4754105 0l-1.1566741 1.13248068c-.1630376.15962721-.4273735.15962721-.5904108 0l-2.68489263-2.62873375c-.32607483-.31925456-.32607483-.83686829 0-1.15612272zm29.16903948 5.43649934 2.3895596 2.3395862c.3260732.319253.3260751.8368636.0000041 1.1561187l-10.7746894 10.5494845c-.3260726.3192568-.8547443.3192604-1.1808214.0000083-.0000013-.0000013-.0000029-.0000029-.0000042-.0000043l-7.6472191-7.4872762c-.0815187-.0798136-.2136867-.0798136-.2952053 0-.0000006.0000005-.000001.000001-.0000015.0000014l-7.6470562 7.4872708c-.3260715.3192576-.8547434.319263-1.1808215.0000116-.0000019-.0000018-.0000039-.0000037-.0000059-.0000058l-10.7749893-10.5496247c-.32607469-.3192544-.32607469-.8368682 0-1.1561226l2.38956395-2.3395823c.3260747-.31925446.85474652-.31925446 1.18082136 0l7.64733029 7.4873809c.0815188.0798136.2136866.0798136.2952054 0 .0000012-.0000012.0000023-.0000023.0000035-.0000032l7.6469471-7.4873777c.3260673-.31926181.8547392-.31927378 1.1808214-.0000267.0000046.0000045.0000091.000009.0000135.0000135l7.6473203 7.4873909c.0815186.0798135.2136866.0798135.2952053 0l7.6471967-7.4872433c.3260748-.31925458.8547465-.31925458 1.1808213 0z" fill="#3b99fc"></path></svg>, text: 'Terra Mobile'},
		{img: phantom, text: 'Phantom'},
		{img: terra, text: 'Terra'},
		{img: slope, text: 'Slope'},
		{svg: true, img: <svg height="33" viewBox="0 0 40 25" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m8.19180572 4.83416816c6.52149658-6.38508884 17.09493158-6.38508884 23.61642788 0l.7848727.76845565c.3260748.31925442.3260748.83686816 0 1.15612272l-2.6848927 2.62873374c-.1630375.15962734-.4273733.15962734-.5904108 0l-1.0800779-1.05748639c-4.5495589-4.45439756-11.9258514-4.45439756-16.4754105 0l-1.1566741 1.13248068c-.1630376.15962721-.4273735.15962721-.5904108 0l-2.68489263-2.62873375c-.32607483-.31925456-.32607483-.83686829 0-1.15612272zm29.16903948 5.43649934 2.3895596 2.3395862c.3260732.319253.3260751.8368636.0000041 1.1561187l-10.7746894 10.5494845c-.3260726.3192568-.8547443.3192604-1.1808214.0000083-.0000013-.0000013-.0000029-.0000029-.0000042-.0000043l-7.6472191-7.4872762c-.0815187-.0798136-.2136867-.0798136-.2952053 0-.0000006.0000005-.000001.000001-.0000015.0000014l-7.6470562 7.4872708c-.3260715.3192576-.8547434.319263-1.1808215.0000116-.0000019-.0000018-.0000039-.0000037-.0000059-.0000058l-10.7749893-10.5496247c-.32607469-.3192544-.32607469-.8368682 0-1.1561226l2.38956395-2.3395823c.3260747-.31925446.85474652-.31925446 1.18082136 0l7.64733029 7.4873809c.0815188.0798136.2136866.0798136.2952054 0 .0000012-.0000012.0000023-.0000023.0000035-.0000032l7.6469471-7.4873777c.3260673-.31926181.8547392-.31927378 1.1808214-.0000267.0000046.0000045.0000091.000009.0000135.0000135l7.6473203 7.4873909c.0815186.0798135.2136866.0798135.2952053 0l7.6471967-7.4872433c.3260748-.31925458.8547465-.31925458 1.1808213 0z" fill="#3b99fc"></path></svg>, text: 'Terra Mobile'},
		{img: phantom, text: 'Phantom'},
		{img: terra, text: 'Terra'},
		{img: slope, text: 'Slope'},
		{svg: true, img: <svg height="33" viewBox="0 0 40 25" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m8.19180572 4.83416816c6.52149658-6.38508884 17.09493158-6.38508884 23.61642788 0l.7848727.76845565c.3260748.31925442.3260748.83686816 0 1.15612272l-2.6848927 2.62873374c-.1630375.15962734-.4273733.15962734-.5904108 0l-1.0800779-1.05748639c-4.5495589-4.45439756-11.9258514-4.45439756-16.4754105 0l-1.1566741 1.13248068c-.1630376.15962721-.4273735.15962721-.5904108 0l-2.68489263-2.62873375c-.32607483-.31925456-.32607483-.83686829 0-1.15612272zm29.16903948 5.43649934 2.3895596 2.3395862c.3260732.319253.3260751.8368636.0000041 1.1561187l-10.7746894 10.5494845c-.3260726.3192568-.8547443.3192604-1.1808214.0000083-.0000013-.0000013-.0000029-.0000029-.0000042-.0000043l-7.6472191-7.4872762c-.0815187-.0798136-.2136867-.0798136-.2952053 0-.0000006.0000005-.000001.000001-.0000015.0000014l-7.6470562 7.4872708c-.3260715.3192576-.8547434.319263-1.1808215.0000116-.0000019-.0000018-.0000039-.0000037-.0000059-.0000058l-10.7749893-10.5496247c-.32607469-.3192544-.32607469-.8368682 0-1.1561226l2.38956395-2.3395823c.3260747-.31925446.85474652-.31925446 1.18082136 0l7.64733029 7.4873809c.0815188.0798136.2136866.0798136.2952054 0 .0000012-.0000012.0000023-.0000023.0000035-.0000032l7.6469471-7.4873777c.3260673-.31926181.8547392-.31927378 1.1808214-.0000267.0000046.0000045.0000091.000009.0000135.0000135l7.6473203 7.4873909c.0815186.0798135.2136866.0798135.2952053 0l7.6471967-7.4872433c.3260748-.31925458.8547465-.31925458 1.1808213 0z" fill="#3b99fc"></path></svg>, text: 'Terra Mobile'},
		{img: phantom, text: 'Phantom'},
		{img: terra, text: 'Terra'},
		{img: slope, text: 'Slope'},
	]

		const rowThree = [
		{img: coin98, text: 'Coin98'},
		{img: math, text: 'Math'},
		{img: safepal, text: 'Safepal'},
		{img: solflare, text: 'Solflare'},
		{img: coin98, text: 'Coin98'},
		{img: math, text: 'Math'},
		{img: safepal, text: 'Safepal'},
		{img: solflare, text: 'Solflare'},
		{img: coin98, text: 'Coin98'},
		{img: math, text: 'Math'},
		{img: safepal, text: 'Safepal'},
		{img: solflare, text: 'Solflare'},
	]

	return (
		<div id="how" ref={howRef} style={{paddingBottom:'2.5rem', position:'relative', maxWidth:'100vw'}} className='container bg-han'>
			<Typography variant='h2' className='fontBold' sx={{textAlign: 'center', fontSize:40, paddingTop:'5rem'}}>As Simple As It can Get</Typography>
			<Typography variant='body1' sx={{textAlign: 'center', marginTop:'1rem'}}>Understand the Aperture approach</Typography>
			<Box ref={ref} sx={{marginTop: '3rem'}}>
				<Root transitionDuration={1000} delay={200} visible={view}>
					<Body i={1} title='Connect Your Wallet from the Native Chain' text='Aperture initially supports Terra and soon expands to Ethereum, Solana and many more.' img={eco}>
						<Card classes='fade' header='Wallets'>
							<IconContainer>
							{rowOne.map((icon, i) => (
									<IconGrid style={{margin:'1rem 0'}}>
										{<img height='33' src={icon.img} alt="" />}
										<Typography sx={{marginTop:.5, color:'black'}} variant='body2' className='fontBold'>{icon.text}</Typography>
									</IconGrid>
								))
								}
							</IconContainer>
							<IconContainer style={{animationName: 'icon-animation-reverse'}}>
							{rowTwo.map((icon, i) => (
									<IconGrid style={{margin:'1rem 0'}}>
										{icon.svg === true ? icon.img : <img height='33' src={icon.img} alt="" />}
										<Typography sx={{marginTop:.5, color:'black'}} variant='body2' className='fontBold'>{icon.text}</Typography>
									</IconGrid>
								))
								}
							</IconContainer>
							<IconContainer>
							{rowThree.map((icon, i) => (
									<IconGrid style={{margin:'1rem 0'}}>
										{<img height='33' src={icon.img} alt="" />}
										<Typography sx={{marginTop:.5, color:'black'}} variant='body2' className='fontBold'>{icon.text}</Typography>
									</IconGrid>
								))
								}
							</IconContainer>
						</Card>
					</Body>
					<Body i={2} svg title='Access Aperture Ecosystem' text='Invest in opportunities and strategies across all chains without ever leaving your native chain. Stay in your comfort zone and let Aperture do the hard work of cross-chain investment.' img={connect}>
						<Card header='Aperture Invest' text='Yield-farming products aggregated across chains' img={<MonetizationOnTwoToneIcon sx={{fontSize:'2.5rem', color:'#5234F9'}} />}>
							<div>
								<img width='32.5' style={{margin:'1rem .75rem 0'}} src={compoundLogo} alt="compoundLogo" />
								<img width='32.5' style={{margin:'1rem .75rem 0'}} src={aaveLogo} alt="aaveLogo" />
								<img width='32.5' style={{margin:'1rem .75rem 0'}} src={synthetixLogo} alt="synthetixLogo" />
								<img width='32.5' style={{margin:'1rem .75rem 0'}} src={mirror} alt="mirror" />
							</div>
						</Card>
						<Card header='Aperture Invest+ Marketplace' text='Community driven strategies' img={<StorefrontIcon sx={{fontSize:'2.5rem', color:'#EAC435'}} />}>
							<ul>
								<li>Delta neutral combination with 60% APY on stablecoin</li>
								<li>Cross-chain stablecoin yield optimizer.</li>
								<li>Borrow across all chains with lowest rate and many more.</li>
							</ul>
						</Card>
					</Body>
				</Root>
			</Box>
		</div>
	)
};
