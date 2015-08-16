(function (ng){
    ng.module('app', ['grid'])
        .controller('MainController', MainController);
    
    function MainController ($scope){
        $scope.columnDef = columnDef;
    }
})(angular);


var columnDef = [
    {field: 'id', name: 'ID'},
    {field: 'first_name', name: 'First Name'},
    {field: 'last_name', name: 'Last Name'},
    {field: 'email', name: 'Email'},
    {field: 'country', name: 'Country'},
    {field: 'ip_address', name: 'Ip Address'},
];

var testData = [
    {
      "id": 1,
      "first_name": "Chris",
      "last_name": "Jenkins",
      "email": "cjenkins0@behance.net",
      "country": "China",
      "ip_address": "118.185.166.248"
    }, {
      "id": 2,
      "first_name": "Brenda",
      "last_name": "Nelson",
      "email": "bnelson1@delicious.com",
      "country": "China",
      "ip_address": "165.134.121.111"
    }, {
      "id": 3,
      "first_name": "Kenneth",
      "last_name": "Smith",
      "email": "ksmith2@foxnews.com",
      "country": "China",
      "ip_address": "11.168.197.127"
    }, {
      "id": 4,
      "first_name": "Stephen",
      "last_name": "Wagner",
      "email": "swagner3@dell.com",
      "country": "Puerto Rico",
      "ip_address": "165.4.97.74"
    }, {
      "id": 5,
      "first_name": "Billy",
      "last_name": "Webb",
      "email": "bwebb4@wix.com",
      "country": "China",
      "ip_address": "180.0.128.165"
    }, {
      "id": 6,
      "first_name": "Walter",
      "last_name": "Morgan",
      "email": "wmorgan5@latimes.com",
      "country": "Russia",
      "ip_address": "169.8.245.60"
    }, {
      "id": 7,
      "first_name": "Michael",
      "last_name": "Green",
      "email": "mgreen6@quantcast.com",
      "country": "China",
      "ip_address": "79.164.146.52"
    }, {
      "id": 8,
      "first_name": "Kevin",
      "last_name": "Jenkins",
      "email": "kjenkins7@friendfeed.com",
      "country": "Sri Lanka",
      "ip_address": "112.191.20.55"
    }, {
      "id": 9,
      "first_name": "Robert",
      "last_name": "Bennett",
      "email": "rbennett8@studiopress.com",
      "country": "China",
      "ip_address": "154.223.92.93"
    }, {
      "id": 10,
      "first_name": "Ryan",
      "last_name": "Lopez",
      "email": "rlopez9@so-net.ne.jp",
      "country": "France",
      "ip_address": "51.150.243.244"
    }
];
