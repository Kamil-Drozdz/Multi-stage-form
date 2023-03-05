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
	//tutaj dodany jest string na wypadek gdyby ktoś zwalidował formularz uzywając w nextPage np !errors.fullName co sie równa true przed wpisaniem wartości do inputu
	const [errors, setErrors] = useState({
		fullName: ' ',
		number: ' ',
		email: ' ',
	});

	const handleInputChange = e => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setErrors({ ...errors, [name]: '' });
	};

	const PageDisplay = () => {
		if (page === 0) {
			return <MedicalFacilityForm FormTitles={FormTitles} handleInputChange={handleInputChange} nextPage={nextPage} />;
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
			if (!errors.fullName && !errors.email && !errors.number && formData.consent) {
				setErrors({});
			}
			let newErrors = {};
			if (formData.fullName.length < 4) {
				newErrors.fullName = 'Uzupełnij imię i nazwisko';
			}
			if (!/^(\+48)[1-9]\d{8}$/.test(formData.number)) {
				newErrors.number = 'Numer telefonu musi składać się z 9 cyfr';
			}
			if (!/\S+@\S+\.\S+/.test(formData.email)) {
				newErrors.email = 'Niepoprawny adres e-mail';
			}
			if (!formData.consent) {
				newErrors.consent = 'Zgoda musi zostać zaakceptowana';
			}
			setErrors(newErrors);

			if (Object.keys(errors).length === 0) {
				alert(
					'Otrzymujemy obiekt, sprawdz konsolę deva godzina która jest wybrana została usunięta z tablicy (skopiowanej)'
				);
				// te zmienne usuwają slot z obiektu mockData
				const dateSlots = AVAILABLE_DATES[selectedDateIndex].slots;
				const removedSlot = dateSlots.splice(index, 1)[0];
				AVAILABLE_DATES[selectedDateIndex].slots = dateSlots;
				console.log(formData);
			}
		} else {
			setPage(currPage => currPage + 1);
		}
	};

	return (
		<div className='w-auto h-auto mt-4 flex items-center justify-center'>
			<div>{PageDisplay()}</div>
		</div>
	);
};

export default App;
