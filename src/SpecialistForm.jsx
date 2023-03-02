import { useState, useEffect } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { specialists } from './mockSpecialists';

const SpecialistForm = ({ handleInputChange, nextPage, prevPage, formData }) => {
	const specialties = ['osteopatia', 'fizjoterapia'];

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
		<div className='w-auto max-w-[600px] pt-[20%] md:mt-0 h-full flex justify-center items-center px-[5%] md:px-[15%]'>
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
					<div className='flex w-full mb-2 flex-wrap justify-items-stretch mx-auto '>
						{filteredSpecialists.map(specialist => (
							<div
								key={specialist.id}
								className='w-full basis-[45%]  mb-2 hover:border-slate-700 border-[1px] flex justify-center mr-2 md:mx-2 items-center text-xs md:text-sm bg-white rounded-md p-1 md:p-2 shadow-md cursor-pointer hover:shadow-lg'
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
