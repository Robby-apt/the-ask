import React, { useState } from 'react';
import genderList from '../../genderList';
import religions from '../../religions';

function JoinForm() {
	const [joinFormDetails, setJoinFormDetails] = useState({
		fName: ``,
		lName: ``,
		phone: ``,
		email: ``,
		gender: ``,
		religiousViews: ``,
		country: ``,
		nationality: ``,
		paymentMethod: ``,
	});

	return (
		<form className="joinForm">
			<div className="names doubleInput">
				<div className="fNameInput">
					<label htmlFor="fName">First Name:</label>
					<input
						type="text"
						name="fName"
						id="fName"
						value={joinFormDetails.fName}
					/>
				</div>
				<div className="lNameInput">
					<label htmlFor="lName">Last Name:</label>
					<input
						type="text"
						name="lName"
						id="lName"
						value={joinFormDetails.lName}
					/>
				</div>
			</div>
			<div className="contactDetails doubleInput">
				<div className="phoneInput">
					<label htmlFor="phone">Phone Number:</label>
					<input
						type="text"
						name="phone"
						id="phone"
						value={joinFormDetails.phone}
					/>
				</div>
				<div className="emailInput">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						id="email"
						value={joinFormDetails.email}
					/>
				</div>
			</div>
			<div className="genderInput">
				<label htmlFor="gender">Gender:</label>
				<select
					type="text"
					name="gender"
					id="gender"
					value={joinFormDetails.gender}
				>
					{genderList.map((item, index) => {
						return (
							<option key={index} value={item}>
								{item}
							</option>
						);
					})}
				</select>
			</div>
			<div className="religiousViewsInput">
				<label htmlFor="religiousViews">
					Which of these best describe you? Select up to a maximum of
					three:
				</label>
				<input
					type="text"
					name="religiousViews"
					id="religiousViews"
					value={joinFormDetails.religiousViews}
				/>
				<div className="religiousOptions">
					{religions.map((item, index) => {
						return (
							<div key={index} className="checkboxInput">
								<input type="checkbox" />
								<label htmlFor="">{item}</label>
							</div>
						);
					})}
				</div>
			</div>

			<div className="locationDetails doubleInput">
				<div className="countryInput">
					<label htmlFor="country">Country:</label>
					<input
						type="text"
						name="country"
						id="country"
						value={joinFormDetails.country}
					/>
				</div>
				<div className="nationalityInput">
					<label htmlFor="nationality">Nationality:</label>
					<select
						type="text"
						name="nationality"
						id="nationality"
						value={joinFormDetails.nationality}
					>
						<option value="Kenyan">Kenyan</option>
						<option value="Non-Kenyan">Non-Kenyan</option>
					</select>
				</div>
			</div>

			<div className="paymentMethodInput">
				<label htmlFor="paymentMethod">
					Select your preferred payment method:
				</label>
				<select
					type="text"
					name="paymentMethod"
					id="paymentMethod"
					value={joinFormDetails.paymentMethod}
				>
					<option value="mpesa">M-Pesa</option>
					<option value="paypal">Paypal</option>
				</select>
			</div>

			<button type="submit">Submit</button>
		</form>
	);
}

export default JoinForm;
