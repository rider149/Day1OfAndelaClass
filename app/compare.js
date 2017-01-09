
'use strict'

module.exports = function dataTypes(data){
	if (data instanceof Array ==true){
		if (data.length===3){
		    return data[2];
		}
		else {
			return undefined;
		}
	}
	else if (typeof(data)==='object' || typeof(data)==='undefined'){
		return 'no value';
	}
	else if (data===true){
		return true;
	}
	else if (data===false){
		return false;
	}
	else if (typeof(data)==='number'){
		if (data<100){
			return 'less than 100';
		}
		else if (data===100){
			return 'equal to 100';
		}
		else {
			return 'more than 100'
		}
	}	
	else if (typeof(data)==='string'){
        return data.length;
	}
	else if (typeof(data)==='function'){
    return data(true);
	}
	
}

