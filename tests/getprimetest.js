
 'use strict';

 var chai = require('jasmine');

 var getPrimes = require('../app/getprimenumber.js');

 describe ("to check if the function is defined", function(){
   
   it("should return defined", function() {
      expect(getPrimes(10)).toBeDefined();
    });	

   it("should return not null", function() {
      expect(getPrimes(10)).not.toBeNull();
    });
 });
 
 describe ("Case for invalid numbers", function(){
   
   it("should return 'invalid number for' -12", function() {
      expect(getPrimes(-12)).toBe('invalid number');
    });	

   it("should return 'invalid number for' -12", function() {
      expect(getPrimes(0)).toBe('invalid number');
    });	
 });

 describe("Case for listing prime numbers", function() {

    it("should return [2,3,5,7] for a range of 10 numbers", function() {
      expect(getPrimes(10)).toEqual([2,3,5,7]);
    });

    it("should return [2,3,5,7,11,13,17,19,23,29,31,37] for a range of 40 numbers", function() {
      expect(getPrimes(40)).toEqual([2,3,5,7,11,13,17,19,23,29,31,37]);
    });

     it("should contain 5 as prime number for a range of 40 numbers", function() {
      expect(getPrimes(40)).toContain(5);
    });

      it("should contain [11,13,17,19,23] for a range of 40 numbers", function() {
      expect(getPrimes(40)).toContain(11,13,17,19,23);
    });

      it("should return [2] for 2", function() {
      expect(getPrimes(2)).toEqual([2]);
      });

      it("should return [3] for 3", function() {
      expect(getPrimes(3)).toEqual([2,3]);
    });
});    

