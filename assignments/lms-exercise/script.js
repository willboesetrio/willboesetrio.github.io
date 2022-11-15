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

            const quizName = document.createElement('div');
            const quizNameText = document.createTextNode(`Quiz Name: ${item.quizName}`)
            quizName.appendChild(quizNameText);
            output.appendChild(quizName);

            const quizModule = document.createElement('div');
            const quizModuleText = document.createTextNode(`Quiz Module: ${item.quizModule}`);
            quizModule.appendChild(quizModuleText);
            output.appendChild(quizModule);

            const quizScore = document.createElement('div');
            const quizScoreText = document.createTextNode(`Quiz Score: ${item.quizScore}`);
            quizScore.appendChild(quizScoreText);
            output.appendChild(quizScore);

            const studentId = document.createElement('div');
            const studentIdText = document.createTextNode(`Student ID: ${item.studentId}`);
            studentId.appendChild(studentIdText);
            output.appendChild(studentId);

            const studentName = document.createElement('div');
            const studentNameText = document.createTextNode(`Student Name: ${item.studentName}`);
            studentName.appendChild(studentNameText);
            output.appendChild(studentName);

            const submissionDate = document.createElement('div');
            const submissionDateText = document.createTextNode(`Submission Date: ${item.submissionDate}`);
            submissionDate.appendChild(submissionDateText);
            output.appendChild(submissionDate);

            const horizontalRule = document.createElement('hr')
            output.appendChild(horizontalRule)
            // output.innerHTML += `Quiz Name: ${item.quizName}<br>Quiz Module: ${item.quizModule}<br>QuizScore: ${item.quizScore}<br>Student ID: ${item.studentId}<br>Student Name: ${item.studentName}<br>Submission Date: ${item.submissionDate}<br><hr>`
        }
    }
    if (newArray.length === 0) {

      output.textContent = 'No Information for this date';
    }
  })

  idButton.addEventListener('click', function() {
    output.innerHTML = '';
    let newArray = [];
    for (const item of testData) {
        if (item.studentId == idInput.value) {
            newArray.push(item);

            const quizName = document.createElement('div');
            const quizNameText = document.createTextNode(`Quiz Name: ${item.quizName}`)
            quizName.appendChild(quizNameText);
            output.appendChild(quizName);

            const quizModule = document.createElement('div');
            const quizModuleText = document.createTextNode(`Quiz Module: ${item.quizModule}`);
            quizModule.appendChild(quizModuleText);
            output.appendChild(quizModule);

            const quizScore = document.createElement('div');
            const quizScoreText = document.createTextNode(`Quiz Score: ${item.quizScore}`);
            quizScore.appendChild(quizScoreText);
            output.appendChild(quizScore);

            const studentId = document.createElement('div');
            const studentIdText = document.createTextNode(`Student ID: ${item.studentId}`);
            studentId.appendChild(studentIdText);
            output.appendChild(studentId);

            const studentName = document.createElement('div');
            const studentNameText = document.createTextNode(`Student Name: ${item.studentName}`);
            studentName.appendChild(studentNameText);
            output.appendChild(studentName);

            const submissionDate = document.createElement('div');
            const submissionDateText = document.createTextNode(`Submission Date: ${item.submissionDate}`);
            submissionDate.appendChild(submissionDateText);
            output.appendChild(submissionDate);

            const horizontalRule = document.createElement('hr')
            output.appendChild(horizontalRule)          
            // output.innerHTML += `Quiz Name: ${item.quizName}<br>Quiz Module: ${item.quizModule}<br>QuizScore: ${item.quizScore}<br>Student ID: ${item.studentId}<br>Student Name: ${item.studentName}<br>Submission Date: ${item.submissionDate}<br><hr>`
        }
    }
    if (newArray.length === 0) {
      output.textContent = 'ID not found';
    }
  })

  unsubmitButton.addEventListener('click', function() {
    output.innerHTML = '';
    const allStudents = [];
    const submittedStudents = []
    for (const item of testData) {
        if (!allStudents.includes(item.studentName)) {
            allStudents.push(item.studentName)
        }
    }
    for (const item of testData) {
        if (item.submissionDate === unsubmitInput.value) {
            if(!submittedStudents.includes(item.studentName)){
            const currentStudentIndex = allStudents.indexOf(item.studentName);
            allStudents.splice(currentStudentIndex, 1);
            submittedStudents.push(item.studentName);
            }
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
