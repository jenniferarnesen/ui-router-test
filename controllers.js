app.controller('MainController', function ($scope) {
    $scope.greeting = "Hey";
})
.controller('AssignmentController', function ($scope) {
    $scope.title = "World War II Report";
    $scope.description = "Write a really long report with lots of words to impress the teacher.";
})
.controller('ReplyController', function ($scope) {
    $scope.status = "My Status";
})
.controller('EditController', function ($scope) {
    $scope.comment = "Hey this is my student comment";
})
.controller('EvaluationController', function ($scope) {
    $scope.grade = "A";
})
.controller('SubmissionController', function ($scope) {
    $scope.mysubmission = "here is my submission";
});
