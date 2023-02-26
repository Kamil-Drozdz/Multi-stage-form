import { useState, useEffect } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import doctor from './assets/doktor.jpg';

const SpecialistForm = ({ handleInputChange, nextPage, prevPage, formData }) => {
	const specialties = ['osteopatia', 'fizjoterapia'];
	const specialists = [
		{
			id: 1,
			name: 'Pioter Gruszkaaaaaaaaaaaaaa',
			title: 'fizjoterapeuta',
			speciality: 'osteopatia',
			facilities: 'Przychodnia A',
			image: doctor,
		},
		{
			id: 2,
			name: 'Pioter Pietruszewski',
			title: 'fizjoterapeuta',
			speciality: 'fizjoterapia',
			facilities: 'Przychodnia B',
			image: doctor,
		},
		{
			id: 3,
			name: 'Pioter Pietruszka',
			title: 'fizjoterapeuta',
			speciality: 'osteopatia',
			facilities: 'Przychodnia A',
			image: doctor,
		},
		{
			id: 4,
			name: 'Pioter Arbuz',
			title: 'fizjoterapeuta',
			speciality: 'fizjoterapia',
			facilities: 'Przychodnia B',
			image: doctor,
		},
		{
			id: 5,
			name: 'Pioter Marchewka',
			title: 'fizjoterapeuta',
			speciality: 'fizjoterapia',
			facilities: 'Przychodnia C',
			image: doctor,
		},
		{
			id: 6,
			name: 'Rysiek Pietruszka',
			title: 'fizjoterapeuta',
			speciality: 'osteopatia',
			facilities: 'Przychodnia B',
			image: doctor,
		},
		{
			id: 7,
			name: 'Wacław Chrząkała',
			title: 'fizjoterapeuta',
			speciality: 'fizjoterapia',
			facilities: 'Przychodnia C',
			image: doctor,
		},
		{
			id: 8,
			name: 'Rysiek Pietruszka',
			title: 'fizjoterapeuta',
			speciality: 'osteopatia',
			facilities: 'Przychodnia B',
			image: doctor,
		},
		{
			id: 9,
			name: 'Wacław Chrząkała',
			title: 'fizjoterapeuta',
			speciality: 'fizjoterapia',
			facilities: 'Przychodnia C',
			image: doctor,
		},
		{
			id: 10,
			name: 'Rysiek Pietruszka',
			title: 'fizjoterapeuta',
			speciality: 'osteopatia',
			facilities: 'Przychodnia B',
			image: doctor,
		},
		{
			id: 11,
			name: 'Wacław Chrząkała',
			title: 'fizjoterapeuta',
			speciality: 'fizjoterapia',
			facilities: 'Przychodnia C',
			image: doctor,
		},
		{
			id: 12,
			name: 'Wacław Chrząkała',
			title: 'fizjoterapeuta',
			speciality: 'fizjoterapia',
			facilities: 'Przychodnia A',
			image: doctor,
		},
		{
			id: 13,
			name: 'Rysiek Pietruszka',
			title: 'fizjoterapeuta',
			speciality: 'osteopatia',
			facilities: 'Przychodnia A',
			image: doctor,
		},
		{
			id: 14,
			name: 'Wacław Chrząkała',
			title: 'fizjoterapeuta',
			speciality: 'fizjoterapia',
			facilities: 'Przychodnia A',
			image: doctor,
		},
		{
			id: 15,
			name: 'Rysiek Pietruszka',
			title: 'fizjoterapeuta',
			speciality: 'osteopatia',
			facilities: 'Przychodnia A',
			image: doctor,
		},
		{
			id: 16,
			name: 'Wacław Chrząkała',
			title: 'fizjoterapeuta',
			speciality: 'fizjoterapia',
			facilities: 'Przychodnia A',
			image: doctor,
		},
		{
			id: 17,
			name: 'Rysiek Pietruszka',
			title: 'fizjoterapeuta',
			speciality: 'osteopatia',
			facilities: 'Przychodnia A',
			image: doctor,
		},
		{
			id: 15,
			name: 'Wacław Chrząkała',
			title: 'fizjoterapeuta',
			speciality: 'fizjoterapia',
			facilities: 'Przychodnia A',
			image: doctor,
		},
	];

	const [selectedSpecialty, setSelectedSpecialty] = useState(specialties[0]);
	const [selectedFacility, setSelectedFacility] = useState(null);

	const filteredSpecialists = specialists.filter(
		specialist => specialist.speciality === selectedSpecialty && specialist.facilities === selectedFacility
	);

	useEffect(() => {
		if (formData?.medicalFacility) {
			setSelectedSpecialty(specialties[0]);
			setSelectedFacility(formData.medicalFacility);
		} else {
			setSelectedSpecialty(specialties[0]);
			setSelectedFacility(null);
		}
	}, [formData?.medicalFacility]);

	return (
		<div className='w-auto h-auto flex justify-center items-center px-[10%] md:px-[15%]'>
			<div className='flex flex-col items-center border-2 border-gray-200 px-6 py-4 rounded-xl'>
				<div className='flex w-full mb-6 flex-nowrap border-b-[1px] pb-6'>
					<button
						className='py-[4px] px-2 hover:bg-slate-300 rounded-full text-black mr-4 disabled:opacity-60'
						onClick={() => {
							prevPage();
						}}>
						<FontAwesomeIcon icon={faArrowLeft} />
					</button>
					<h2 className='px-4 text-lg font-bold  w-[80%] flex md:whitespace-nowrap'>
						Wybierz typ wizyty {selectedSpecialty}
					</h2>
				</div>
				<div className='flex flex-col'>
					<div className='mb-4 flex justify-center items-center flex-wrap'>
						<label htmlFor='specialty' className='font-bold mr-4 w-full flex justify-center text-xl mb-4'>
							Specjalizacja:
						</label>
						<div className='flex flex-wrap w-full'>
							{specialties.map(specialty => (
								<button
									key={specialty}
									value={specialty}
									onClick={event => {
										setSelectedSpecialty(event.target.value);
										handleInputChange({ target: { name: 'specialty', value: event.target.value } });
									}}
									className={`hover:bg-slate-100 border-2 active:bg-slate-300 border-gray-300 rounded-md px-2 py-2 font-bold text-xl mr-2 mb-2 w-full basis-1/3 grow  ${
										specialty === selectedSpecialty ? 'border-gray-700 border-2' : ''
									}`}
									type='button'>
									{specialty}
								</button>
							))}
						</div>
					</div>
					<div className='flex mb-2 px-auto w-full flex-wrap'>
						{filteredSpecialists.map(specialist => (
							<div
								key={specialist.id}
								className='w-full basis-1/6 md:basis-[30%] mb-2 hover:border-slate-700 border-[1px] flex justify-center mr-2 md:mx-2 items-center text-xs md:text-sm bg-white rounded-md p-2 shadow-md cursor-pointer hover:shadow-lg'
								onClick={() => {
									handleInputChange({ target: { name: 'specialist', value: specialist.name } });
									nextPage();
								}}>
								<div className='flex flex-col w-full items-center'>
									<img className='max-w-[100px] object-cover ' src={specialist.image} />
									<p className='w-full flex jusify-center text-xs md:text-lg font-bold px-2'>
										{specialist.name} {specialist.surname}
									</p>
								</div>
							</div>
						))}
					</div>
					{!!filteredSpecialists.length || <p>Nie mamy aktualnie tego specialisty tej placówce</p>}
				</div>
			</div>
		</div>
	);
};

export default SpecialistForm;
