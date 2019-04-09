exports.InsertShops	= (db,data,callback) =>	{

			db.collection("shops").insertOne(data,(err,res)=>	{
				//console.log(res);
				if(err){
					var response = {'status':403,'error':err};
				}else{
					var response = {'status':200,'message':'Insert sucess','_id':res.insertedId};
				}
				callback(response);
			})
}

exports.GetShops = (db,callback) => {
	db.collection("shops").find({}).sort({_id:-1}).toArray((err,data) =>	{
		//console.log(data,'data');
		if(data){
			var response = {'status':200,'data':data};
		}else{
			var response = {'status':400,'data':'no user found'};
		}
		callback(response);
	})
}
