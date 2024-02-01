import React from 'react';
import "./SampleCard.css";

const SampleCard = () => {
  return (
   <>
  <section class="box-panel">
	<div class="widget-container">
		<div class="flip-box common-flip-style">
			<div class="box-front common-box-style">
				<div class="box-content-wrapper">
				<div class="box-content">
						<h1>Hello there !</h1>
						<p>I am the <strong>front side</strong> of the box.</p>
					</div> 
				</div>
			</div>
			<div class="box-back common-box-style box-bgi-effect">
				<div class="box-content-wrapper">
					<div class="box-content">
						<h1>Hello there !</h1>
						<p>I am the <strong>back side</strong> of the box.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
   </>
  )
}

export default SampleCard;