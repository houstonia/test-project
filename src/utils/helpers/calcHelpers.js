export const calcExamRes = (grades = [], attendancePercentage) => {
  const attendanceRatio = attendancePercentage / 100;
  if(grades.length===0){
    return {
      isPassed: false,
      averageGrade:0,
      attendanceRatio,
    };
  }
  const averageGrade =(
    grades.reduce((acc, grade) => acc + Number(grade), 0) / grades.length);
  return {
    isPassed: averageGrade >= 4 && attendanceRatio < 0.1,
    averageGrade,
    attendanceRatio,
  };
};

export function calcGradesCount(arr=[]) {
  const countArray = [];
  arr?.forEach((element) => {
    const existingElement = countArray.find((item) => item.element === element);
    if (existingElement) {
      existingElement.count += 1;
    } else {
      countArray.push({ element, count: 1 });
    }
  });
  return countArray;
}


