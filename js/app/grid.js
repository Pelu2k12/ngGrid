(function (ng){
    ng.module('grid', [])
        .controller('GridController', GridController)
        .directive('grid', GridDirective)
        .directive('gridColumnDef', GridColumnDef)
//        .directive('gridData', GridData);
    
    function GridController ($scope){debugger
    }
    
    function GridDirective (){
        var template = [
            '<div class="panel panel-default">',
                '<table class="table table-hover table-striped">',
                    '<thead>',
                        '<tr grid-column-def="column-def">',
                        '</tr>',
                    '</thead>',
                    '<tbody grid-data>',
                    '</tbody>',
                '</table>',
            '</div>'
        ].join('');
        
        return {
            restrict: 'E',
            template: template,
            scope: {
                gridColumnDef: '=',
                data: '='
            },
            controller: 'GridController',
            controllerAs: "gridCtrl",
        };   
    }
    
    function GridColumnDef ($compile){
        var template = [
            '<th ng-repeat="item in colDefCtrl.columnDef">{{item.name}}</th>',
        ].join('');

        return {
            restrict: 'A',
            scope: {
                columnDef: "@"
            },
            require: ['^grid'],
            template: template,
            controller: colDefController,
            controllerAs: "colDefCtrl",
        };

        function colDefController ($scope){
            debugger
//            this.columnDef = columnDef;
        }
    }

    function GridData ($compile){
        var template = [
            '<tr ng-repeat="data in dataCtrl.testData">',
                '<td ng-repeat="col in colDefCtrl.columnDef">{{ data[col.name] }}</td>',
            '</tr>'
        ].join('');

        return {
            restrict: 'A',
            scope: {},
            require: ['^grid'],
            template: template,
            controller: dataController,
            controllerAs: "dataCtrl",
        };
        
        function dataController (GridController){
            debugger
            this.testData = testData;
        }
    }
})(angular);
