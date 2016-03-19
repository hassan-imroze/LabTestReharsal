module App {
    export class StudentController {

        Student: Student;
        ErrorOrSuccessList: string[];
        statusClass: string;

        private studentService: StudentService;

        static $inject = ["StudentService"];

        constructor(studentSvc: StudentService) {
            this.studentService = studentSvc;
        }

        Save() {
            this.ErrorOrSuccessList = new Array<string>();
            console.log(this.Student);
            var self = this;

            var successCallback = result => {
                console.log(result);
                self.Student = new Student(); 
                self.statusClass = "successList";
                self.ErrorOrSuccessList.push("Saved Successfully");
            };
            var errorCallback = error => {
                console.log(error);
                self.statusClass = "errorList";
                self.ErrorOrSuccessList.push(error.data);
            };

            self.studentService.Save(self.Student)
                .then(successCallback, errorCallback);
        }
    }

    angular.module("app").controller("StudentController", StudentController);
}