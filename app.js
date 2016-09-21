angular.module('app', ['ngResource'])

.service('datatableService', ['$resource',
    function($resource) {
        this.getDatatable = function() {
            var datatableList = $resource("data/data.json");
            return datatableList.query({

            })
        }
    }
])

.controller('datatableCtrl', function($scope, datatableService) {

    //Get Data Table Data

    datatableService.getDatatable().$promise.then(function(data) {
        $scope.datalist = data;
        console.log($scope.datalist)
    });

    $scope.title = [
        {key:"id", name:"id"},
        {key:"cell_1", name:"cell_1"},
        {key:"cell_2", name:"cell_2"},
        {key:"cell_3", name:"cell_3"},
        {key:"cell_4", name:"cell_4"},
        {key:"cell_5", name:"cell_5"},
        {key:"cell_6", name:"cell_6"},
        {key:"cell_7", name:"cell_7"},
        {key:"cell_8", name:"cell_8"},
        {key:"cell_9", name:"cell_9"},
        {key:"cell_10", name:"cell_10"},
        {key:"cell_11", name:"cell_11"},
        {key:"cell_12", name:"cell_12"},
    ]
})

.directive('bootgrid', function($timeout) {
    return {
        link: function(scope, element, attr) {
            scope.$watch(attr.bootgrid + '.length', function(newVal, oldVal) {
                if (newVal !== oldVal && newVal) {
                    $timeout(function() {


                        element.bootgrid({
                            rowCount: [-1,5,10]
                        })
                        $("#getRowCount").on("click", function ()
                        {
                            alert(element.bootgrid("getRowCount"));
                        });

                        $("#append").on("click", function ()
                        {
                            element.bootgrid("append", [{
                                    "id": 10238,
                                    "cell_1": "data_1 Append",
                                    "cell_2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                                    "cell_3": "data_3",
                                    "cell_4": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                                    "cell_5": "Colored",
                                    "cell_6": "data_6",
                                    "cell_7": "data_7",
                                    "cell_8": "Lorem ipsum dolor",
                                    "cell_9": "data_9",
                                    "cell_10": "data_10",
                                    "cell_11": "data_11",
                                    "cell_12": "data_12"
                            },
                                {
                                    "id": 10239,
                                    "cell_1": "data_1 Append_2",
                                    "cell_2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                                    "cell_3": "data_3",
                                    "cell_4": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
                                    "cell_5": "Colored",
                                    "cell_6": "data_6",
                                    "cell_7": "data_7",
                                    "cell_8": "Lorem ipsum dolor",
                                    "cell_9": "data_9",
                                    "cell_10": "data_10",
                                    "cell_11": "data_11",
                                    "cell_12": "data_12"
                                }]);
                        });

                        $("#clear").on("click", function ()
                        {
                            element.bootgrid("clear");
                        });

                        $("#destroy").on("click", function ()
                        {
                            element.bootgrid("destroy");
                        });
                        $("#clearSearch").on("click", function ()
                        {
                            element.bootgrid("search");
                        });

                        $("#clearSort").on("click", function ()
                        {
                            element.bootgrid("sort");
                        });

                        $("#getCurrentPage").on("click", function ()
                        {
                            alert(element.bootgrid("getCurrentPage"));
                        });

                        $("#getTotalPageCount").on("click", function ()
                        {
                            alert(element.bootgrid("getTotalPageCount"));
                        });

                        $("#getTotalRowCount").on("click", function ()
                        {
                            alert(element.bootgrid("getTotalRowCount"));
                        });

                        $("#getSearchPhrase").on("click", function ()
                        {
                            alert(element.bootgrid("getSearchPhrase"));
                        });

                        $("#getSortDictionary").on("click", function ()
                        {
                            alert(element.bootgrid("getSortDictionary"));
                        });

                        $("#getSelectedRows").on("click", function ()
                        {
                            alert(element.bootgrid("getSelectedRows"));
                        });
                    });

                }
            });
        }
    }
});