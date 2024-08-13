export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const studentsInCity = listStudents.filter((student) => student.location === city);

  const updatedStudents = studentsInCity.map((student) => {
    const updatedStudent = { ...student, grade: 'N/A' };
    const matchingGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (matchingGrade) {
      updatedStudent.grade = matchingGrade.grade;
    }

    return updatedStudent;
  });

  return updatedStudents;
}
