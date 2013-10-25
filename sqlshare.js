(function() {
  sqlshare = {
    version : "0.0.1",
  }
  var sqlshare_rest_server = "https://rest.sqlshare.escience.washington.edu";
  sqlshare.rest_server = sqlshare_rest_server;

  var sqlshare_all_datasets = function() {
    var dataset_uri = sqlshare_rest_server + '/REST.svc/v2/db/dataset';
    return d3.json(dataset_uri, function (json, error) {
      if (error) {
        console.log(error);
	return;
      }
      return json;
    });
  };
  sqlshare.all_datasets = sqlshare_all_datasets;
})();
