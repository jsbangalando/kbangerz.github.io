var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

	
	 $scope.init = function() {	 

		 $http.get("people.json").then(function (response) {
		    $scope.people = response.data.People;
		    $scope.searchElement(1);	

		 });

	 }

	  $scope.searchElement = function(id){

		    var searchElement = $scope.people.find(People => People.id === id);
			$scope.searchData = searchElement;
			$scope.likes 	  = searchElement.Likes;
			$scope.dislikes   = searchElement.Dislikes;

			/* This process change the rating star depends on its given rating */
			changeAttr(searchElement.rating);

		 };


$scope.init();

});




/* I used jQuery Approach here */
function changeAttr(rating) {

	resetStar();

	for(x=0; x < rating; x++) {
		jQuery("label[for='star-"+x+"']").attr("class","active");
	}

}

function resetStar() {
	for(x=0; x < 5; x++) {
		jQuery("label[for='star-"+x+"']").attr("class","");
	}
}

jQuery('.sendmessage').click(function(){
	alert('Send Message');
});
/* End here */
