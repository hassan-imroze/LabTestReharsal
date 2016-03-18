module App {
    export class StudentController {

        Student: Student;
        private studentService: StudentService;
        static $inject = ["StudentService"];
        //static $inject = ["$stateProvider", "$urlRouterProvider"];
        constructor(studentSvc: StudentService) {
            this.studentService = studentSvc;
        }
    }

    angular.module("app").controller("StudentController", StudentController);
}