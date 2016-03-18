module App {
    export class StudentController {

        Student: Student;
        private studentService: StudentService;
        static $inject = ["StudentService"];
        //static $inject = ["$stateProvider", "$urlRouterProvider"];
        constructor(studentSvc: StudentService) {
            this.studentService = studentSvc;
        }

        Save() {
            console.log(this.Student);
            var self = this;

            var successCallback = result => {
                console.log(result);
            };
            var errorCallback = error => {
                console.log(error);
            };

            self.studentService.Save(self.Student)
                .then(successCallback, errorCallback);
        }
    }

    angular.module("app").controller("StudentController", StudentController);
}