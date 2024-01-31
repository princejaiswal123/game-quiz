import React, { useState } from 'react';

const YourComponent = ({setIsAddQuestions}) => {
  const [questions, setQuestions] = useState([
    { id: 1, questionText: '', questionType: 'text', options: ['', '', '', ''], timerType: '5 Sec' }
  ]);

  const [selectedQuestion, setSelectedQuestion] = useState(1);

  // Function to add a new question
  const addQuestion = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    const newQuestion = {
      id:newRandomNumber,
      // id: questions.length + 1,
      questionText: '',
      questionType: 'text',
      options: ['', '', '', ''],
      timerType: '5 Sec'
    };
    setQuestions([...questions, newQuestion]);
    setSelectedQuestion(newQuestion.id);
  };

  // Function to remove a question
  const removeQuestion = (id) => {
    console.log("inside removeQuestion",id);
    setQuestions(questions.filter((q,index) => index !== id));
    console.log("lenght",questions.length-1);
    // setSelectedQuestion(1)
    setSelectedQuestion(1)

  };

  // Handle change for question input
  const handleQuestionChange = (id, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === id ? { ...q, questionText: value } : q))
    );
  };

  // Handle change for option input
  const handleOptionChange = (questionId, optionIndex, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, options: [...q.options.slice(0, optionIndex), value, ...q.options.slice(optionIndex + 1)] } : q
      )
    );
  };

  // Handle change for radio inputs
  const handleOptionTypeChange = (questionId, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === questionId ? { ...q, questionType: value } : q))
    );
  };

  // Handle change for timer type
  const handleTimerTypeChange = (questionId, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q.id === questionId ? { ...q, timerType: value } : q))
    );
  };

  console.log('questions', questions);
  console.log("selectedQuestion",selectedQuestion);

  return (
    <div className="h-[100vh] w-[100vw] bg-[rgba(0,0,0,0.5)] fixed top-0 left-0  flex justify-center items-center z-50">
      <div className="xl:w-[40%] md:w-[60%] sm:w-[70%] w-[90%] h-auto bg-[white] rounded-xl font-poppins md:px-10 sm:px-5 px-5 md:py-10 sm:py-5 py-5 flex flex-col md:gap-10 gap-5">
      <div className="flex flex-col gap-7">
      <div className='flex justify-between items-center text-[#9f9f9f]'>
      <div className='flex items-center justify-between'>
       {questions.map((q,idx)=>(
         <div className='relative border border-[red] w-fit h-fit' style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
         <div onClick={()=>{
          console.log(q.id);
          setSelectedQuestion(q.id)
         }} className={` h-[40px] w-[40px] rounded-full   ${q.id===selectedQuestion?"border border-[green]":"border"} flex items-center justify-center cancel-button cursor-pointer`}>
          {/* {q.id} */}
          {idx+1}
          {/* {q.id > 1 && (
           <div className=" absolute top-0 right-0 cursor-pointer" onClick={async() => await removeQuestion(q.id)}>
             x
           </div>
         )} */}
         </div>
         {q.id > 1 && (
           <div className=" absolute top-0 right-0 cursor-pointer" onClick={() => removeQuestion(idx)}>
             x
           </div>
         )}
       </div>
       ))}
        <button onClick={addQuestion}>+</button>

       </div>

      <p>Max 5 Questions</p>

      </div>
        {questions.map((q) => (
          <div key={q.id} style={{ display: q.id === selectedQuestion ? 'block' : 'none' }}>
            <div>
              <input
                type="text"
                placeholder="Poll Question"
                className="cancel-button md:py-3 py-2 rounded-md px-4 w-[100%] outline-0"
                value={q.questionText}
                onChange={(e) => handleQuestionChange(q.id, e.target.value)}
              />
            </div>

            <div className='text-[#9f9f9f]' style={{ display: 'flex' }}>
              <div style={{ marginRight: '1.5rem' }}>Option Type:</div>
              <label>
                <input
                  type="radio"
                  name={`optionType_${q.id}`}
                  value="text"
                  checked={q.questionType === 'text'}
                  onChange={() => handleOptionTypeChange(q.id, 'text')}
                />
                Text
              </label>
              <label style={{ marginLeft: '0.5rem' }}>
                <input
                  type="radio"
                  name={`optionType_${q.id}`}
                  value="imageUrl"
                  checked={q.questionType === 'imageUrl'}
                  onChange={() => handleOptionTypeChange(q.id, 'imageUrl')}
                />
                Image URL
              </label>
              <label style={{ marginLeft: '0.5rem' }}>
                <input
                  type="radio"
                  name={`optionType_${q.id}`}
                  value="textAndImage"
                  checked={q.questionType === 'textAndImage'}
                  onChange={() => handleOptionTypeChange(q.id, 'textAndImage')}
                />
                Text and Image URL
              </label>
            </div>

            {q.questionType === 'text' && (
              <div className='flex flex-col gap-3'>
                {q.options.map((option, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <input type="radio" name={`ansOption_${q.id}`} />
                    <input
                      type="text"
                      placeholder="Option"
                      className="cancel-button rounded-md px-3 py-1"
                      value={option}
                      onChange={(e) => handleOptionChange(q.id, index, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            )}

            {q.questionType === 'imageUrl' && (
              <div className='flex flex-col gap-3'>
                {q.options.map((option, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <input type="radio" name={`ansOption_${q.id}`} />
                    <input
                      type="text"
                      placeholder="Option image url"
                      className="cancel-button rounded-md px-3 py-1"
                      value={option}
                      onChange={(e) => handleOptionChange(q.id, index, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            )}

            {q.questionType === 'textAndImage' && (
              <div className='flex flex-col gap-3'>
                {q.options.map((option, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <input type="radio" name={`ansOption_${q.id}`} />
                    <div className='flex items-center gap-5'>
                      <input
                        type="text"
                        placeholder="Option text"
                        className="cancel-button rounded-md px-3 py-1"
                        value={option}
                        onChange={(e) => handleOptionChange(q.id, index, e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Option image url"
                        className="cancel-button rounded-md px-3 py-1"
                        value={option}
                        onChange={(e) => handleOptionChange(q.id, index, e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className='text-[#9f9f9f]' style={{ display: 'flex' }}>
              <div style={{ marginRight: 'auto' }}>Timer Type:</div>
              <label>
                <input
                  type="radio"
                  name={`timerType_${q.id}`}
                  value="5 Sec"
                  checked={q.timerType === '5 Sec'}
                  onChange={() => handleTimerTypeChange(q.id, '5 Sec')}
                />
                5 Sec
              </label>
              <label style={{ marginLeft: '0.5rem' }}>
                <input
                  type="radio"
                  name={`timerType_${q.id}`}
                  value="10 Sec"
                  checked={q.timerType === '10 Sec'}
                  onChange={() => handleTimerTypeChange(q.id, '10 Sec')}
                />
                10 Sec
              </label>
              <label style={{ marginLeft: '0.5rem' }}>
                <input
                  type="radio"
                  name={`timerType_${q.id}`}
                  value="OFF"
                  checked={q.timerType === 'OFF'}
                  onChange={() => handleTimerTypeChange(q.id, 'OFF')}
                />
                OFF
              </label>
            </div>
          </div>
        ))}
  <div className='flex items-center justify-center md:gap-x-10 gap-2'>
                    <button onClick={()=>{setIsAddQuestions(false)}} className=' cancel-button w-[50%] py-2 rounded-lg text-[#474444] md:text-base text-sm font-semibold'>Cancel</button>
                    <button onClick={()=>{}} className='w-[50%] py-2 rounded-lg md:text-base text-sm bg-[#60b84b] font-semibold text-white'>Create Quiz</button>
                </div>
        {/* <button onClick={addQuestion}>Add Question</button> */}
        </div>
      </div>
    </div>
  );
};

export default YourComponent;




