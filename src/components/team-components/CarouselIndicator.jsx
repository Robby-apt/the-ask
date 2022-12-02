import React from 'react';

function CarouselIndicator() {
	return (
		<div className="carousel-indicators">
			<button
				type="button"
				data-bs-target="#carouselExampleDark"
				data-bs-slide-to="0"
				className="active"
				aria-current="true"
				aria-label="Slide 1"
			/>
			<button
				type="button"
				data-bs-target="#carouselExampleDark"
				data-bs-slide-to="1"
				aria-label="Slide 2"
			/>
			<button
				type="button"
				data-bs-target="#carouselExampleDark"
				data-bs-slide-to="2"
				aria-label="Slide 3"
			/>
			<button
				type="button"
				data-bs-target="#carouselExampleDark"
				data-bs-slide-to="3"
				aria-label="Slide 4"
			/>
			<button
				type="button"
				data-bs-target="#carouselExampleDark"
				data-bs-slide-to="4"
				aria-label="Slide 5"
			/>
			<button
				type="button"
				data-bs-target="#carouselExampleDark"
				data-bs-slide-to="5"
				aria-label="Slide 6"
			/>
		</div>
	);
}

export default CarouselIndicator;
