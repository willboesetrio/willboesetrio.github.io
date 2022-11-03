const testData = [
    {
      quizName: "History 1",
      quizModule: "History",
      quizScore: 70,
      studentId: 1,
      studentName: "Bob Ross",
      submissionDate: "12/20/2020"
    },
    {
      quizName: "History 1",
      quizModule: "History",
      quizScore: 77,
      studentId: 16,
      studentName: "Diana Ross",
      submissionDate: "12/20/2020"
    },
    {
      quizName: "History 1",
      quizModule: "History",
      quizScore: 82,
      studentId: 15,
      studentName: "Steve Smith",
      submissionDate: "12/20/2020"
    },
    {
      quizName: "History 1",
      quizModule: "History",
      quizScore: 88,
      studentId: 14,
      studentName: "Dylan Roberts",
      submissionDate: "12/20/2020"
    },
    {
      quizName: "History 2",
      quizModule: "History",
      quizScore: 82,
      studentId: 1,
      studentName: "Bob Ross",
      submissionDate: "1/20/2021"
    },
    {
      quizName: "History 2",
      quizModule: "History",
      quizScore: 89,
      studentId: 16,
      studentName: "Diana Ross",
      submissionDate: "1/20/2021"
    },
  
    {
      quizName: "History 2",
      quizModule: "History",
      quizScore: 73,
      studentId: 15,
      studentName: "Steve Smith",
      submissionDate: "1/20/2021"
    },
  
    {
      quizName: "History 2",
      quizModule: "History",
      quizScore: 85,
      studentId: 15,
      studentName: "Steve Smith",
      submissionDate: "1/20/2021"
    },
    {
      quizName: "Reading Comprehension",
      quizModule: "English",
      quizScore: 60,
      studentId: 15,
      studentName: "Steve Smith",
      submissionDate: "2/20/2020"
    },
    {
      quizName: "Reading Comprehension",
      quizModule: "English",
      quizScore: 83,
      studentId: 16,
      studentName: "Diana Ross",
      submissionDate: "2/20/2020"
    },
    {
      quizName: "Reading Comprehension",
      quizModule: "English",
      quizScore: 70,
      studentId: 14,
      studentName: "Dylan Roberts",
      submissionDate: "2/20/2020"
    }
  ];
  const dateInput = document.getElementById('date-input');
  const dateButton = document.getElementById('date-button');
  const output = document.getElementById('output');
  const idInput = document.getElementById('id-input');
  const idButton = document.getElementById('id-button');
  const unsubmitInput = document.getElementById('unsubmit-input');
  const unsubmitButton = document.getElementById('unsubmit-button');
  const averageButton = document.getElementById('average-button');
  dateButton.addEventListener('click', function() {
    output.innerHTML = '';
    let newArray = [];
    for (const item of testData) {
        if (item.submissionDate === dateInput.value) {
            newArray.push(item);
        }
    }
    if (newArray) {
        for (const item of newArray) {
            output.innerHTML += `Quiz Name: ${item.quizName}<br>Quiz Module: ${item.quizModule}<br>QuizScore: ${item.quizScore}<br>Student ID: ${item.studentId}<br>Student Name: ${item.studentName}<br>Submission Date: ${item.submissionDate}<br><hr>`
        }
    }
  })
  idButton.addEventListener('click', function() {
    output.innerHTML = '';
    let newArray = [];
    for (const item of testData) {
        if (item.studentId == idInput.value) {
            newArray.push(item);
        }
    }
    if (newArray) {
        for (const item of newArray) {
            output.innerHTML += `Quiz Name: ${item.quizName}<br>Quiz Module: ${item.quizModule}<br>QuizScore: ${item.quizScore}<br>Student ID: ${item.studentId}<br>Student Name: ${item.studentName}<br>Submission Date: ${item.submissionDate}<br><hr>`
        }
    }
  })
  unsubmitButton.addEventListener('click', function() {
    output.innerHTML = '';
    const allStudents = [];
    for (const item of testData) {
        if (!allStudents.includes(item.studentName)) {
            allStudents.push(item.studentName)
        }
    }
    for (const item of testData) {
        if (item.submissionDate === unsubmitInput.value) {
            const currentStudentIndex = allStudents.indexOf(item.studentName)
            allStudents.splice(currentStudentIndex, 1);
        }
    }
    output.textContent = `Students without submission on date ${unsubmitInput.value}: ${allStudents.join(' ')}`
  })
  averageButton.addEventListener('click', function() {
    output.innerHTML= '';
    const scoresArray = [];
        for (const item of testData) {
            scoresArray.push(item.quizScore);
        }
    output.textContent = (scoresArray.reduce((a,b) => a + b) / scoresArray.length).toFixed(1);
  })
