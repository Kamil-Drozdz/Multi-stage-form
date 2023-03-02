import { useState, useEffect } from 'react';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DateForm = ({
	handleInputChange,
	nextPage,
	prevPage,
	formData,
	AVAILABLE_DATES,
	selectedDateIndex,
	setSelectedDateIndex,
}) => {
	const [selectedSlotIndex, setSelectedSlotIndex] = useState(0);

	const handleDateChange = index => {
		setSelectedDateIndex(index);
		handleInputChange({ target: { name: 'date', value: AVAILABLE_DATES[index].date } });
	};

	const handleSlotChange = index => {
		setSelectedSlotIndex(index);
		handleInputChange({ target: { name: 'time', value: AVAILABLE_DATES[selectedDateIndex].slots[index] } });
	};
	const isDateActive = date => {
		const availableDate = AVAILABLE_DATES.find(d => d.date === date);
		return availableDate && availableDate.slots.length > 0;
	};

	const handleBooking = () => {
		nextPage();
	};
	useEffect(() => {
		if (formData.date !== undefined) {
			const dateIndex = AVAILABLE_DATES.findIndex(date => date.date === formData.date);
			setSelectedDateIndex(dateIndex);
		}
		if (formData.time !== undefined) {
			const date = AVAILABLE_DATES[selectedDateIndex];
			const slotIndex = date.slots.findIndex(slot => slot === formData.time);
			setSelectedSlotIndex(slotIndex);
		}
	}, [formData.date, formData.time, setSelectedDateIndex, setSelectedSlotIndex]);

	return (
		<div className='h-auto w-screen  flex justify-center items-center px-[10%] md:px-[20%]'>
			<div className=' md:max-w-[400px] w-full md:w-auto flex flex-col items-center border-2 border-gray-200 px-4 py-4 rounded-xl '>
				<div className='flex w-full mb-6 flex-nowrap border-b-[1px] pb-6'>
					<button
						className='py-[4px] px-2 hover:bg-slate-300 rounded-full text-black mr-4 disabled:opacity-30'
						onClick={() => {
							prevPage();
						}}>
						<FontAwesomeIcon icon={faArrowLeft} />
					</button>
					<h2 className=' flex text-xl font-bold w-[90%] justify-center'>Dostępne sesje</h2>
				</div>
				<div className='w-full flex mb-4 overflow-x-scroll  scrollbar select-none'>
					{AVAILABLE_DATES.map((date, index) => (
						<button
							key={index}
							className={`w-full py-2 mb-2 px-2 basis-[18%] border mr-2 rounded font-bold ${
								index === selectedDateIndex ? 'border-black text-black' : ''
							} ${!isDateActive(date.date) ? ' opacity-40' : ''}`}
							onClick={() => handleDateChange(index)}>
							<p className='text-[10px] font-bold text-gray-400'>Sob</p>
							<p className='ml-1 w-5/6'>{date.date}</p>
							<p className='text-green-500 text-[10px] whitespace-nowrap font-bold'>3 miejsca</p>
						</button>
					))}
				</div>
				<h2 className='text-lg mb-4 border-b-[1px] pb-4 w-full'>Dostępne sloty czasowe</h2>
				<div className='flex mb-2 px-auto w-full flex-wrap'>
					{AVAILABLE_DATES[selectedDateIndex].slots.map((slot, index) => (
						<button
							key={index}
							className={`py-2 border rounded font-bold basis-1/4 ${
								index === selectedSlotIndex ? 'border-black text-black' : ''
							}`}
							onClick={() => handleSlotChange(index)}>
							{slot}
						</button>
					))}
					{!isDateActive(AVAILABLE_DATES[selectedDateIndex].date) && (
						<p className=' text-sm mb-2'> w tym dniu nie mamy dostępnych już miejsc</p>
					)}
				</div>
				<button
					className='py-2 px-4 bg-teal-800 text-white rounded w-full font-bold disabled:opacity-30'
					disabled={!isDateActive(AVAILABLE_DATES[selectedDateIndex].date) || selectedSlotIndex === -1}
					onClick={handleBooking}>
					Zarezerwuj sesję dla {AVAILABLE_DATES[selectedDateIndex].date} 2023
				</button>
			</div>
		</div>
	);
};

export default DateForm;
