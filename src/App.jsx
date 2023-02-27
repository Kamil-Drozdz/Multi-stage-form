import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import ContactForm from './ContactForm';
import DateForm from './DateForm';
import MedicalFacilityForm from './MedicalFacilityForm';
import SpecialistForm from './SpecialistForm';
import { AVAILABLE_DATES } from './mockData';

const App = () => {
	const FormTitles = ['Wybierz placówkę', 'Wybierz typ wizyty', 'Wybierz termin wizyty', 'Uzupełnij dane'];
	const [page, setPage] = useState(0);
	const [formData, setFormData] = useState({
		fullName: '',
		number: '+48',
		email: '',
		specialist: '',
		specialty: '',
		consent: false,
	});
	const [selectedDateIndex, setSelectedDateIndex] = useState(0);
	const [errors, setErrors] = useState({});

	const handleInputChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const PageDisplay = () => {
		if (page === 0) {
			return (
				<MedicalFacilityForm
					FormTitles={FormTitles}
					handleInputChange={handleInputChange}
					page={page}
					prevPage={prevPage}
					nextPage={nextPage}
				/>
			);
		} else if (page === 1) {
			return (
				<SpecialistForm
					FormTitles={FormTitles}
					handleInputChange={handleInputChange}
					page={page}
					prevPage={prevPage}
					nextPage={nextPage}
					formData={formData}
				/>
			);
		} else if (page === 2) {
			return (
				<DateForm
					FormTitles={FormTitles}
					handleInputChange={handleInputChange}
					page={page}
					prevPage={prevPage}
					nextPage={nextPage}
					formData={formData}
					AVAILABLE_DATES={AVAILABLE_DATES}
					selectedDateIndex={selectedDateIndex}
					setSelectedDateIndex={setSelectedDateIndex}
				/>
			);
		} else if (page === 3) {
			return (
				<ContactForm
					handleInputChange={handleInputChange}
					prevPage={prevPage}
					nextPage={nextPage}
					formData={formData}
					errors={errors}
				/>
			);
		}
	};

	const prevPage = () => {
		setPage(currPage => currPage - 1);
	};
	const nextPage = index => {
		if (page === FormTitles.length - 1) {
			if (!formData.fullName) {
				setErrors({ ...errors, fullName: 'Imię i nazwisko jest wymagane' });
				return;
			}
			if (!/^\+48\d{9}$/.test(formData.number)) {
				errors.number = 'Numer telefonu musi składać się z 9 cyfr';
				return;
			}

			if (!/\S+@\S+\.\S+/.test(formData.email)) {
				errors.email = 'Niepoprawny adres e-mail';
				return;
			}
			if (!formData.consent) {
				errors.consent = 'zgoda musi zostać zaakceptowana';
				return;
			}
			alert(
				'Otrzymujemy obiekt, sprawdz konsolę deva godzina która jest wybrana została usunięta z tablicy (skopiowanej)'
			);
			const dateSlots = AVAILABLE_DATES[selectedDateIndex].slots;
			const removedSlot = dateSlots.splice(index, 1)[0];
			AVAILABLE_DATES[selectedDateIndex].slots = dateSlots;
			console.log(formData);
		} else {
			setPage(currPage => currPage + 1);
		}
	};

	return (
		<div className='w-auto h-screen flex items-center justify-center'>
			<div>{PageDisplay()}</div>
		</div>
	);
};

export default App;
