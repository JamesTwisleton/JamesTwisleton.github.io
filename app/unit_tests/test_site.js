describe('Test site.js', function() {
	
   //
   // Example: A test case of getRandomIntInclusive
   //
   describe('getRandomIntInclusive Coverage Test', function() {

	  it('value within 1 to 3', function() {
	  	var value = getRandomIntInclusive(1, 3);
	  	expect( value>=1 && value <= 3 ).toEqual(true);
	  });

   });

   describe('compareString Coverage Test', function() {
   		var string1 = "testString";
   		var string2 = "testString2";

	  it('equal strings return true', function() {
	  	var value = compareString(string1,string1);
	  	expect(value).toEqual(true);
	  });

	  it('unequal strings return false', function() {
	  	var value = compareString(string1,string2);
	  	expect(value).toEqual(false);
	  });

   });


   describe('compareBoolean Coverage Test', function() {
   		var boolean1 = true;
   		var boolean2 = false;

	  it('equal strings return true', function() {
	  	var value = compareBoolean(boolean1,boolean1);
	  	expect(value).toEqual(true);
	  });

	  it('unequal strings return false', function() {
	  	var value = compareString(boolean1,boolean2);
	  	expect(value).toEqual(false);
	  });

   });

   describe('initalizeFirebase Coverage Test', function() {
   		initalizeFirebase();
   });

   describe('getURLParameter Coverage Test', function() {
   		getURLParameter("url");
   });


});