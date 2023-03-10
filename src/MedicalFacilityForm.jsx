import { useState } from 'react';
const MedicalFacilityForm = ({ handleInputChange, nextPage, AVAILABLE_DATES, formData, filteredSpecialists }) => {
	const medicalFacilities = [
		{ id: 1, name: 'Warszawa-Wesoła', address: 'Niemcewicza 9' },
		{ id: 2, name: 'Sulejówek', address: 'Niemcewicza 20' },
		{ id: 3, name: 'Warszawa', address: 'Centrala 23' },
		{ id: 4, name: 'Ząbki', address: 'Niemcewicza 9' },
	];

	const [firstAvailableDate, setFirstAvailableDate] = useState(null);
	const handleFacility = () => {
		const firstDate = AVAILABLE_DATES.find(date => date.facility === formData.medicalFacility)?.date;
		setFirstAvailableDate(firstDate);
	};
	return (
		<div className='w-auto h-auto relative flex justify-center items-start px-[10%] md:px-[15%]'>
			<div className='flex w-[80%] flex-col items-center border-2 border-gray-200 px-4 py-4 rounded-xl'>
				<div className='flex w-full mb-6 flex-nowrap border-b-[1px] pb-6 justify-center'>
					<h2 className=' text-lg font-bold align-self-center '>Wybierz placówkę medyczną</h2>
				</div>
				<div className='flex flex-col ml-4 md:ml-8 w-full justify-center'>
					<div className='flex  md:flex-wrap px-8 w-[100%] flex-wrap justify-center md:justify-start items-center'>
						{medicalFacilities.map(facility => (
							<div
								key={facility.id}
								className={`bg-white box-content   md:min-w-[100px] mr-4 mb-2 basis-1/3 rounded-md p-4 shadow-md cursor-pointer hover:shadow-lg ${
									facility.name === formData.medicalFacility ? ' border-black' : ''
								} hover:border-slate-700 border-2`}
								onClick={() => {
									handleInputChange({ target: { name: 'medicalFacility', value: facility.name } });
									handleFacility();
								}}>
								<div className='text-sm w-full flex flex-col justify-center items-center'>
									<h3 className='text-sm font-bold whitespace-nowrap'>{facility.name}</h3>
									<p className='text-xs'>{facility.address}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				{firstAvailableDate && (
					<>
						<p className='my-4 text-center md:text-sm text-xs '>
							Pierwsza dostępna data dla placówki {formData.medicalFacility}: {firstAvailableDate} u specialisty:
						</p>
						<div className='flex w-full mb-2 flex-wrap justify-items-stretch mx-auto '>
							{filteredSpecialists.map(specialist => (
								<div
									key={specialist.id}
									className='w-full basis-[45%]  mb-2 hover:border-slate-700 border-[1px] flex justify-center mr-2 md:mx-2 items-center text-xs md:text-sm bg-white rounded-md p-1 md:p-2 shadow-md cursor-pointer hover:shadow-lg'
									onClick={() => {
										handleInputChange({ target: { name: 'specialist', value: specialist.name } });
									}}>
									<div className='flex flex-col w-full items-center'>
										<img className='md:max-w-[100px] max-w-[75px] object-cover ' src={specialist.image} />
										<p className='md:w-full  w-[75px] flex jusify-center text-xs md:text-lg font-bold px-2'>
											{specialist.name} {specialist.surname}
										</p>
									</div>
								</div>
							))}
						</div>
						{!!filteredSpecialists.length || <p>Nie mamy aktualnie tego specialisty tej placówce</p>}
					</>
				)}
				<button
					className='p-2 bg-gray-200 rounded-lg mt-2 whitespace-nowrap hover:border-black border-2'
					onClick={() => {
						nextPage();
					}}>
					Zarezerwuj wizytę
				</button>
			</div>
		</div>
	);
};

export default MedicalFacilityForm;
