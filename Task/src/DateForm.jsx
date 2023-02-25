import { useState } from 'react';

const AVAILABLE_DATES = [
	{
		date: '25 Lut',
		slots: ['5:30 PM', '6:00 PM', '6:30 PM'],
	},
	{
		date: '4 Mar',
		slots: ['5:30 PM', '6:00 PM', '6:30 PM'],
	},
	{
		date: '11 Mar',
		slots: ['5:30 PM', '6:00 PM', '6:30 PM'],
	},
	{
		date: '18 Mar',
		slots: ['5:30 PM', '6:00 PM', '6:30 PM'],
	},
	{
		date: '25 Mar',
		slots: ['5:30 PM', '6:00 PM', '6:30 PM'],
	},
];

const DateForm = ({ handleInputChange, nextPage, prevPage, page }) => {
	const [selectedDateIndex, setSelectedDateIndex] = useState(0);
	const [selectedSlotIndex, setSelectedSlotIndex] = useState(0);

	const handleDateChange = index => {
		setSelectedDateIndex(index);
		setSelectedSlotIndex(0);
	};

	const handleSlotChange = index => {
		setSelectedSlotIndex(index);
	};

	const handleBooking = () => {
		const selectedDate = AVAILABLE_DATES[selectedDateIndex];
		const selectedSlot = selectedDate.slots[selectedSlotIndex];
		handleInputChange({ target: { name: 'date', value: selectedDate.date } });
		handleInputChange({ target: { name: 'time', value: selectedSlot } });
		nextPage();
	};

	return (
		<div className='w-auto h-auto flex justify-center items-center px-[10%] md:px-[20%]'>
			<div className='flex flex-col items-center border-2 border-gray-200 px-4 py-4 rounded-xl'>
				<h2 className='text-xl mb-4 border-b-[1px] pb-4 w-full font-bold'>Dostępne sesje</h2>
				<div className='flex mb-4'>
					{AVAILABLE_DATES.map((date, index) => (
						<button
							key={index}
							className={`py-2 px-4 border mr-2 rounded font-bold ${
								index === selectedDateIndex ? 'border-black text-black' : ''
							}`}
							onClick={() => handleDateChange(index)}>
							<p className='text-[10px] font-bold text-gray-400'>Sob</p>
							{date.date}
							<p className='text-green-500 text-[10px] whitespace-nowrap font-bold'>3 miejsca</p>
						</button>
					))}
				</div>
				<h2 className='text-lg mb-4 border-b-[1px] pb-4 w-full'>Dostępne sloty czasowe</h2>
				<div className='flex mb-4 px-auto w-full justify-between'>
					{AVAILABLE_DATES[selectedDateIndex].slots.map((slot, index) => (
						<button
							key={index}
							className={`py-2 px-[8%] border rounded font-bold  ${
								index === selectedSlotIndex ? 'border-black text-black' : ''
							}`}
							onClick={() => handleSlotChange(index)}>
							{slot}
						</button>
					))}
				</div>
				<div className='flex p-4'>
					<button
						className='p-2 bg-gray-700 rounded text-white mr-4 disabled:opacity-60'
						disabled={page === 0}
						onClick={() => {
							prevPage();
						}}>
						Cofnij
					</button>
					<button className='py-2 px-4 bg-teal-800 text-white rounded w-full font-bold' onClick={handleBooking}>
						Zarezerwuj sesję dla {AVAILABLE_DATES[selectedDateIndex].date} 2023
					</button>
				</div>
			</div>
		</div>
	);
};

export default DateForm;
