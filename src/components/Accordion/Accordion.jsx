import React, { useState } from 'react'
import data from './data'
const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSection, setenableMultiSelection] = useState(false);
    const [multipleSelect, setMultipleSelect] = useState([]);

    const handleEnableMultiSelection = () =>{
        if(enableMultiSection)
            setMultipleSelect([]);
        else
            setSelected(null);
        setenableMultiSelection(!enableMultiSection);

    }

    const handleMultiSelection = (id) => {
        const cpy_mulSelect = [...multipleSelect];
        let index = cpy_mulSelect.indexOf(id);
        index === -1 ? cpy_mulSelect.push(id) : cpy_mulSelect.splice(index, 1);
        setMultipleSelect(cpy_mulSelect);

    }

    const handleSingleSelection = (id) => {
        setSelected(selected === id ? null : id);
    }
    return (
        <div className="wrapper w-full flex flex-col items-center justify-center">
            <button className='bg-black text-white px-6 py-4 rounded-md' onClick={handleEnableMultiSelection}>
                {enableMultiSection
                    ? "Disable multiple selection"
                    : "Enable multiple selection"
                }
            </button>
            <div className="accordion w-[500px] flex flex-col gap-5 px-5 py-4 rounded-lg ">
                {
                    data && data.length > 0
                        ?
                        (
                            data.map((dataItem) => (
                                <div className="item bg-[#614101] px-5 py-4 flex flex-col gap-4 rounded-lg text-white" onClick={
                                    enableMultiSection
                                        ? () => handleMultiSelection(dataItem.id)
                                        : () => handleSingleSelection(dataItem.id)
                                }>
                                    <div className="title flex gap-4 justify-between">
                                        <h3>{dataItem.question}</h3>
                                        <span>+</span>
                                    </div>
                                    {
                                        selected === dataItem.id || multipleSelect.indexOf(dataItem.id) !== -1 ? (
                                            <div className="content">{dataItem.answer}</div>
                                        ) : null
                                    }
                                </div>
                            ))
                        )
                        :
                        (
                            <div>Data not found!</div>
                        )
                }
            </div>
        </div>
    )
}
export default Accordion
