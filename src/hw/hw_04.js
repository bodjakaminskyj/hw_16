const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students){
  const studentsBoys = [students[0], students[1],students[4]]
  const studentsGirls = [students[2], students[3], students[5]]
  let studentsPairs = []
  for(let i = 0; i < studentsBoys.length; i++){
  studentsPairs[i] = [studentsBoys[i],studentsGirls[i]]
}
  
  return studentsPairs
  
}
function getThemes(pairs, themes){
  let studentsPairsThemes = []
  for(let i = 0; i < pairs.length; i++){
    studentsPairsThemes[i] = [pairs[i], themes[i]]
  }
    
    return studentsPairsThemes
   
}
function getMarks(students,marks){
  let studentsMarks = []
  for(let i = 0; i < students.length; i++){
    studentsMarks[i] = [students[i], marks[i]]
  }
    
    return studentsMarks
  
}

function getMarkStudentsThemes(studentsPairs, themes) {
  const studentsMarksThemes = []
  for(let i = 0; i < studentsPairs.length; i++){
    let mark = Math.floor(Math.random() * 5) + 1
    studentsMarksThemes[i] = [studentsPairs[i], themes[i], mark]
  }
    
    return studentsMarksThemes
  
  
}
export const pairs = getPairs(students);
//console.log(pairs);

const pairsThemes = getThemes(pairs, themes)
//console.log(pairsThemes);

const markStudents = getMarks(students, marks)
//console.log(markStudents)

const markStudentsThemes = getMarkStudentsThemes(pairs, themes)  
//console.log(markStudentsThemes)

