import React from 'react'
import styled from 'styled-components';

import { terra, bitcoin, eth, solana, compoundLogo, aaveLogo, synthetixLogo, mirror } from '../assets';

const Container = styled('div')`
	min-height: 100vh;
	min-width: 600px;
	transform: scale(.8);
	padding-top: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	position: relative;
	@media (max-width: 1000px) {
		transform: scale(.65);
	}
	@media (max-width: 900px) {
		min-height: 600px;
	}
	@media (max-width: 600px) {
		transform: scale(.5);
		min-height: 450px;
		left: -125px;
	}
	@media (max-width: 400px) {
		left: -135px;
	}
	@media (max-width: 374px) {
		left: -145px;
	}
	@media (max-width: 350px) {
		left: -160px;
	}
	& .ring {
		border-radius: 50%;
		border: 0.5px solid #674DFA;
		box-sizing: border-box;
		box-shadow: 0px 15px 40px rgba(82, 52, 249, 0.04);
		position: absolute;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  margin: auto;
	}
	& .circle {
		background-color: white;
		height: 60px;
		width: 60px;
		min-height: 60px;
		min-width: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	  position:absolute;
	  top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  overflow:hidden;
	  margin:auto;
	}
	& .firstRing {
		height: 300px;
		width: 300px;
		min-height: 300px;
		min-width: 300px;
	}
	& .secondRing {
		height: 450px;
		width: 450px;
		min-height: 450px;
		min-width: 450px;
	}
	& .thirdRing {
		height: 600px;
		width: 600px;
		min-height: 600px;
		min-width: 600px;
	}
	@keyframes first-one {
	  0%{ transform:rotate(0deg) translateY(-150px) rotate(0deg) }
	  100%{ transform:rotate(360deg) translateY(-150px) rotate(-360deg) }
	}
	@keyframes first-two {
	  0%{ transform:rotate(0deg) translateY(150px) rotate(0deg) }
	  100%{ transform:rotate(360deg) translateY(150px) rotate(-360deg) }
	}
	@keyframes second-one {
	  0%{ transform:rotate(0deg) translate(197.5px, 112.5px) rotate(0deg) }
	  100%{ transform:rotate(360deg) translate(197.5px, 112.5px) rotate(-360deg) }
	}
	@keyframes second-two {
	  0%{ transform:rotate(0deg) translate(-197.5px, 112.5px) rotate(0deg) }
	  100%{ transform:rotate(360deg) translate(-197.5px, 112.5px) rotate(-360deg) }
	}
	@keyframes second-three {
	  0%{ transform:rotate(0deg) translateY(-225px) rotate(0deg) }
	  100%{ transform:rotate(360deg) translateY(-225px) rotate(-360deg) }
	}
	@keyframes three-one {
	  0%{ transform:rotate(0deg) translate(265px, -150px) rotate(0deg) }
	  100%{ transform:rotate(360deg) translate(265px, -150px) rotate(-360deg) }
	}
	@keyframes three-two {
	  0%{ transform:rotate(0deg) translate(265px, 150px) rotate(0deg) }
	  100%{ transform:rotate(360deg) translate(265px, 150px) rotate(-360deg) }
	}
	@keyframes three-three {
	  0%{ transform:rotate(0deg) translate(-265px, -150px) rotate(0deg) }
	  100%{ transform:rotate(360deg) translate(-265px, -150px) rotate(-360deg) }
	}
	@keyframes three-four {
	  0%{ transform:rotate(0deg) translate(-265px, 150px) rotate(0deg) }
	  100%{ transform:rotate(360deg) translate(-265px, 150px) rotate(-360deg) }
	}
`;

const Center = styled('div')`
	border-radius: 50%;
	height: 125px;
	width: 125px;
	position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #5234F9;
  margin: auto;
  border: 30px solid #1e193c;
`;

export default function CircleAnimate() {

	return (
		<Container>
			<Center />
			<div className='firstRing ring'>
				<div className="circle" style={{animation:'first-one 40s linear infinite'}}><img width='35' src={terra} alt="terra" /></div>
				<div className="circle" style={{animation:'first-two 40s linear infinite'}}><svg height="35" viewBox="0 0 40 25" width="35" xmlns="http://www.w3.org/2000/svg"><path d="m8.19180572 4.83416816c6.52149658-6.38508884 17.09493158-6.38508884 23.61642788 0l.7848727.76845565c.3260748.31925442.3260748.83686816 0 1.15612272l-2.6848927 2.62873374c-.1630375.15962734-.4273733.15962734-.5904108 0l-1.0800779-1.05748639c-4.5495589-4.45439756-11.9258514-4.45439756-16.4754105 0l-1.1566741 1.13248068c-.1630376.15962721-.4273735.15962721-.5904108 0l-2.68489263-2.62873375c-.32607483-.31925456-.32607483-.83686829 0-1.15612272zm29.16903948 5.43649934 2.3895596 2.3395862c.3260732.319253.3260751.8368636.0000041 1.1561187l-10.7746894 10.5494845c-.3260726.3192568-.8547443.3192604-1.1808214.0000083-.0000013-.0000013-.0000029-.0000029-.0000042-.0000043l-7.6472191-7.4872762c-.0815187-.0798136-.2136867-.0798136-.2952053 0-.0000006.0000005-.000001.000001-.0000015.0000014l-7.6470562 7.4872708c-.3260715.3192576-.8547434.319263-1.1808215.0000116-.0000019-.0000018-.0000039-.0000037-.0000059-.0000058l-10.7749893-10.5496247c-.32607469-.3192544-.32607469-.8368682 0-1.1561226l2.38956395-2.3395823c.3260747-.31925446.85474652-.31925446 1.18082136 0l7.64733029 7.4873809c.0815188.0798136.2136866.0798136.2952054 0 .0000012-.0000012.0000023-.0000023.0000035-.0000032l7.6469471-7.4873777c.3260673-.31926181.8547392-.31927378 1.1808214-.0000267.0000046.0000045.0000091.000009.0000135.0000135l7.6473203 7.4873909c.0815186.0798135.2136866.0798135.2952053 0l7.6471967-7.4872433c.3260748-.31925458.8547465-.31925458 1.1808213 0z" fill="#3b99fc"></path></svg></div>
			</div>
			<div className='secondRing ring'>
				<div className="circle" style={{animation:'second-one 20s linear infinite'}}><img width='35' src={bitcoin} alt="bitcoin" /></div>
				<div className="circle" style={{animation:'second-two 20s linear infinite'}}><img width='35' src={eth} alt="eth" /></div>
				<div className="circle" style={{animation:'second-three 20s linear infinite'}}><img width='35' src={solana} alt="solana" /></div>
			</div>
			<div className='thirdRing ring'>
				<div className="circle" style={{animation:'three-one 50s linear infinite'}}><img width='35' src={compoundLogo} alt="compoundLogo" /></div>
				<div className="circle" style={{animation:'three-two 50s linear infinite'}}><img width='35' src={aaveLogo} alt="aaveLogo" /></div>
				<div className="circle" style={{animation:'three-three 50s linear infinite'}}><img width='35' src={synthetixLogo} alt="synthetixLogo" /></div>
				<div className="circle" style={{animation:'three-four 50s linear infinite'}}><img width='35' src={mirror} alt="mirror" /></div>
			</div>
		</Container>
	)
}


