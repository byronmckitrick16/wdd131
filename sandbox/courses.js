const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
{ sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
],
  enrollStudent: function (sectionNum) {
    const section = this.sections.find(
        (section) => section.sectionNum === sectionNum
    );
  }
};

function setCourseInfo(course) {
    const courseNameElement = document.querySelector("#courseName");
    const courseCodeElement = document.querySelector("#courseCode");

    courseNameElement.textContent = course.name;
    courseCodeElement.textContent = course.code;
};

function sectionTemplate(section) {
    return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
    </tr>`
}

function renderSections(sections) {
    const sectionsEl = document.querySelector("#sections");
    const htmlStrings = sections.map(sectionTemplate);
    sectionsEl.innerHTML = htmlStrings.join("");
};

setCourseInfo(aCourse);
renderSections(aCourse.sections);

function clickHandler(event) {
    aCourse.enrollStudent(2)
}

document.querySelector("#enrollStudent").addEventListener("click", clickHandler)