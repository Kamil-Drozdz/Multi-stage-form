import { useState } from 'react';

const SpecialistForm = ({ handleInputChange, nextPage, prevPage }) => {
	const specialties = ['osteopatia', 'fizjoterapia'];
	const specialists = [
		{ id: 1, name: 'Pioter Gruszka', title: 'fizjoterapeuta', speciality: 'fizjoterapia' },
		{ id: 2, name: 'Rysiek Pietruszka', title: 'fizjoterapeuta', speciality: 'osteopatia' },
		{ id: 3, name: 'Wacław Chrząkała', title: 'fizjoterapeuta', speciality: 'fizjoterapia' },
	];
	const [selectedSpecialty, setSelectedSpecialty] = useState(specialties[0]);

	const filteredSpecialists = specialists.filter(specialist => specialist.speciality === selectedSpecialty);

	return (
		<div className='w-auto h-auto flex justify-center items-center px-[10%] md:px-[15%]'>
			<div className='flex flex-col items-center border-2 border-gray-200 px-4 py-4 rounded-xl'>
				<div className='flex w-full '>
					<button
						className='px-2 bg-gray-700 rounded-lg text-white mr-4 disabled:opacity-60'
						onClick={() => {
							prevPage();
						}}>
						Cofnij
					</button>
					<h2 className='text-lg font-bold mb-4 flex  md:whitespace-nowrap'>
						Wybierz typ wizyty {selectedSpecialty}
					</h2>
				</div>
				<div className='flex flex-col'>
					<div className='mb-4 flex justify-center items-center flex-wrap'>
						<label htmlFor='specialty' className='font-bold mr-4'>
							Specjalizacja:
						</label>
						<select
							id='specialty'
							name='specialty'
							required
							onChange={event => setSelectedSpecialty(event.target.value)}
							onClick={handleInputChange}
							className='border-2 border-gray-300 rounded-md px-2 py-1'>
							{specialties.map(specialty => (
								<option key={specialty} value={specialty}>
									{specialty}
								</option>
							))}
						</select>
					</div>
					<div className='flex justify-center flex-wrap md:flex-nowrap '>
						{filteredSpecialists.map(specialist => (
							<div
								key={specialist.id}
								className='w-full border-[1px] flex justify-center mx-2 items-center text-xs md:text-sm bg-white rounded-md p-4 shadow-md cursor-pointer hover:shadow-lg'
								onClick={() => {
									handleInputChange({ target: { name: 'specialist', value: specialist.name } });
									nextPage();
								}}>
								<p className=' text-xs md:text-lg font-bold px-2  '>
									{specialist.name} {specialist.surname}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpecialistForm;
