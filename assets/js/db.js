    //
    // Define your database
    //
    var db = new Dexie("utupress");
    db.version(1).stores({
      settings: 'name,value'
    });

    //
    // Put some data into it
    //
    db.settings.put({
      name: "limit",
      value: 20
    }).then(function () {
      //
      // Then when data is stored, read from it
      //
      return db.settings.get('limit');
    }).then(function (friend) {
      //
      // Display the result
      //
      alert("Limit is set ");
    }).catch(function (error) {
      //
      // Finally don't forget to catch any error
      // that could have happened anywhere in the
      // code blocks above.
      //
      alert("Ooops: " + error);
    });