const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections:[ 
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    changeEnrollment: function (sectionNum, add = true) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            if (add) {
            this.sections[sectionIndex].enrolled++; 
            } else {
            this.sections[sectionIndex].enrolled--;
            }
        renderSections(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        const sectionIndex = this.sections.findIndex(
            (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
        
    },
};

function setCourseInfo(course) {
    const courseCodeElement = document.querySelector('#courseCode');
    const courseNameElement = document.querySelector('#courseName'); 

    courseCodeElement.textContent = `Course Code: ${course.code}`;
    courseNameElement.textContent = `Course Name: ${course.name}`;

}

function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}

document.querySelector("#enrollSTudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, add = true);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.changeEnrollment(sectionNum, add = false);
  });

setCourseInfo(aCourse);
renderSections(aCourse.sections); 

